<?php
declare(strict_types=1);

/**
 * Contact form endpoint for introspekta.com.hr
 *
 * Sends two emails per submission via SMTP:
 *   1. Notification to kontakt@introspekta.com.hr (auto-forwards to jeziclara@gmail.com)
 *   2. Auto-reply confirmation to the visitor
 *
 * SMTP credentials must be provided via `contact.config.php` uploaded ONCE
 * to ONE LEVEL ABOVE public_html on the server (do NOT commit to git).
 * Living above the web root means the file is not reachable over HTTP at all,
 * even if PHP processing is ever broken.
 *
 *     <?php
 *     return [
 *         'smtp_host' => 'mail.introspekta.com.hr',
 *         'smtp_port' => 465,
 *         'smtp_user' => 'kontakt@introspekta.com.hr',
 *         'smtp_pass' => 'YOUR_PASSWORD_HERE',
 *     ];
 */

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// --- Load config (one level above public_html) ---
$configFile = __DIR__ . '/../contact.config.php';
if (!file_exists($configFile)) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Server misconfigured']);
    error_log('contact.php: missing contact.config.php');
    exit;
}
$config = require $configFile;

$SMTP_HOST = (string)($config['smtp_host'] ?? 'mail.introspekta.com.hr');
$SMTP_PORT = (int)($config['smtp_port'] ?? 465);
$SMTP_USER = (string)($config['smtp_user'] ?? 'kontakt@introspekta.com.hr');
$SMTP_PASS = (string)($config['smtp_pass'] ?? '');
$MAIL_FROM = $SMTP_USER;
$MAIL_FROM_NAME = 'Introspekta';
$MAIL_TO = $SMTP_USER; // self → cPanel forwarder → jeziclara@gmail.com

// --- Method check ---
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// --- Parse JSON body ---
$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Invalid request']);
    exit;
}

// --- Honeypot ---
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]); // pretend success for bots
    exit;
}

// --- Sanitize header-bound fields (strip CR/LF/NUL to prevent header injection) ---
$noLines = static function (string $s): string {
    return str_replace(["\r", "\n", "\0"], '', $s);
};

$name    = $noLines(trim((string)($data['name']  ?? '')));
$email   = $noLines(trim((string)($data['email'] ?? '')));
$phone   = $noLines(trim((string)($data['phone'] ?? '')));
$topic   = $noLines(trim((string)($data['topic'] ?? '')));
$message = trim((string)($data['message'] ?? ''));

// --- Validate ---
$errors = [];
if ($name === '')                                                $errors[] = 'name';
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'email';
if ($message === '')                                             $errors[] = 'message';
if (mb_strlen($message) > 5000)                                  $errors[] = 'message_too_long';

if ($errors) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Validation failed', 'fields' => $errors]);
    exit;
}

// --- Build owner notification ---
$topicLabels = [
    'individualno' => 'Individualno savjetovanje',
    'online'       => 'Online savjetovanje',
    'radionica'    => 'Radionice i edukacije',
    'ostalo'       => 'Ostalo',
];
$topicLabel = $topicLabels[$topic] ?? '(nije odabrano)';

$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
try {
    $dateStr = (new DateTime('now', new DateTimeZone('Europe/Zagreb')))->format('d.m.Y. H:i');
} catch (Throwable $e) {
    $dateStr = date('d.m.Y. H:i');
}

$phoneLine = $phone !== '' ? $phone : '(nije naveden)';

$ownerSubject = 'Nova poruka s introspekta.com.hr';
$ownerBody = <<<EOT
Nova poruka putem kontakt obrasca:

Ime i prezime: {$name}
E-mail: {$email}
Telefon: {$phoneLine}
Vrsta usluge: {$topicLabel}

Poruka:
{$message}

---
Poslano: {$dateStr}
IP: {$ip}
EOT;

// --- Build visitor auto-reply ---
$replySubject = 'Hvala na vašoj poruci';
$replyBody = <<<EOT
Pozdrav {$name},

hvala na vašoj poruci. Javit ću vam se u roku od 24 do 48 sati kako bismo dogovorili slobodan termin.

Lijep pozdrav,
Lara
https://introspekta.com.hr
EOT;

// --- Send: notification is critical, auto-reply is best-effort ---
$base = [
    'host'     => $SMTP_HOST,
    'port'     => $SMTP_PORT,
    'user'     => $SMTP_USER,
    'pass'     => $SMTP_PASS,
    'from'     => $MAIL_FROM,
    'fromName' => $MAIL_FROM_NAME,
];

try {
    sendMail($base + [
        'to'          => $MAIL_TO,
        'toName'      => 'Introspekta',
        'subject'     => $ownerSubject,
        'body'        => $ownerBody,
        'replyTo'     => $email,
        'replyToName' => $name,
    ]);
} catch (Throwable $e) {
    error_log('contact.php notification failed: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail send failed']);
    exit;
}

try {
    sendMail($base + [
        'to'          => $email,
        'toName'      => $name,
        'subject'     => $replySubject,
        'body'        => $replyBody,
        'replyTo'     => $MAIL_FROM,
        'replyToName' => $MAIL_FROM_NAME,
    ]);
} catch (Throwable $e) {
    // Visitor's message was already delivered — log and continue.
    error_log('contact.php auto-reply failed: ' . $e->getMessage());
}

echo json_encode(['ok' => true]);
exit;

// =============================================================
// SMTP helper — minimal RFC 5321 client over SSL/STARTTLS
// =============================================================

function sendMail(array $opts): void
{
    $host        = (string)$opts['host'];
    $port        = (int)$opts['port'];
    $user        = (string)$opts['user'];
    $pass        = (string)$opts['pass'];
    $from        = (string)$opts['from'];
    $fromName    = (string)$opts['fromName'];
    $to          = (string)$opts['to'];
    $toName      = (string)$opts['toName'];
    $subject     = (string)$opts['subject'];
    $body        = (string)$opts['body'];
    $replyTo     = (string)($opts['replyTo'] ?? '');
    $replyToName = (string)($opts['replyToName'] ?? '');

    $ctx = stream_context_create([
        'ssl' => [
            // Shared cPanel servers often use self-signed or hostname-mismatched
            // certs on the local SMTP listener. Connection is still encrypted.
            'verify_peer'      => false,
            'verify_peer_name' => false,
        ],
    ]);

    $address = ($port === 465 ? 'ssl://' : 'tcp://') . $host . ':' . $port;
    $errno = 0;
    $errstr = '';
    $fp = @stream_socket_client($address, $errno, $errstr, 30, STREAM_CLIENT_CONNECT, $ctx);
    if (!$fp) {
        throw new RuntimeException("SMTP connect failed ($errno): $errstr");
    }
    stream_set_timeout($fp, 30);

    try {
        smtpExpect($fp, '220');
        smtpCmd($fp, 'EHLO introspekta.com.hr');
        smtpExpect($fp, '250');

        // STARTTLS upgrade for port 587 (not needed on 465 — already SSL)
        if ($port !== 465) {
            smtpCmd($fp, 'STARTTLS');
            smtpExpect($fp, '220');
            $crypto = STREAM_CRYPTO_METHOD_TLS_CLIENT
                | STREAM_CRYPTO_METHOD_TLSv1_1_CLIENT
                | STREAM_CRYPTO_METHOD_TLSv1_2_CLIENT;
            if (!stream_socket_enable_crypto($fp, true, $crypto)) {
                throw new RuntimeException('STARTTLS failed');
            }
            smtpCmd($fp, 'EHLO introspekta.com.hr');
            smtpExpect($fp, '250');
        }

        smtpCmd($fp, 'AUTH LOGIN');
        smtpExpect($fp, '334');
        smtpCmd($fp, base64_encode($user));
        smtpExpect($fp, '334');
        smtpCmd($fp, base64_encode($pass));
        smtpExpect($fp, '235');

        smtpCmd($fp, "MAIL FROM:<$from>");
        smtpExpect($fp, '250');
        smtpCmd($fp, "RCPT TO:<$to>");
        smtpExpect($fp, '250');
        smtpCmd($fp, 'DATA');
        smtpExpect($fp, '354');

        $headers = [];
        $headers[] = 'From: ' . mimeName($fromName) . " <$from>";
        $headers[] = 'To: '   . mimeName($toName)   . " <$to>";
        if ($replyTo !== '') {
            $headers[] = 'Reply-To: ' . mimeName($replyToName) . " <$replyTo>";
        }
        $headers[] = 'Subject: ' . mimeHeader($subject);
        $headers[] = 'Date: ' . date('r');
        $headers[] = 'Message-ID: <' . bin2hex(random_bytes(8)) . '@introspekta.com.hr>';
        $headers[] = 'MIME-Version: 1.0';
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers[] = 'Content-Transfer-Encoding: 8bit';

        // Normalize line endings, then dot-stuff lines starting with "."
        $normBody = str_replace(["\r\n", "\r", "\n"], "\r\n", $body);
        $normBody = preg_replace('/^\./m', '..', $normBody);

        $payload = implode("\r\n", $headers) . "\r\n\r\n" . $normBody . "\r\n.";
        smtpCmd($fp, $payload);
        smtpExpect($fp, '250');

        smtpCmd($fp, 'QUIT');
    } finally {
        if (is_resource($fp)) {
            fclose($fp);
        }
    }
}

function smtpCmd($fp, string $cmd): void
{
    fwrite($fp, $cmd . "\r\n");
}

function smtpExpect($fp, string $code): string
{
    $response = '';
    while (!feof($fp)) {
        $line = fgets($fp, 1024);
        if ($line === false) {
            break;
        }
        $response .= $line;
        // Multi-line replies use "code-text" on continuation lines and
        // "code text" (space) on the final line.
        if (strlen($line) >= 4 && $line[3] === ' ') {
            break;
        }
    }
    if (substr($response, 0, 3) !== $code) {
        throw new RuntimeException("SMTP expected $code, got: " . trim($response));
    }
    return $response;
}

function mimeHeader(string $s): string
{
    if (preg_match('/[^\x20-\x7e]/', $s)) {
        return '=?UTF-8?B?' . base64_encode($s) . '?=';
    }
    return $s;
}

function mimeName(string $s): string
{
    if ($s === '') {
        return '';
    }
    if (preg_match('/[^\x20-\x7e]/', $s)) {
        return '=?UTF-8?B?' . base64_encode($s) . '?=';
    }
    return '"' . str_replace('"', '\\"', $s) . '"';
}
