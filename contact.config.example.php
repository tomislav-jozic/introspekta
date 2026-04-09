<?php
/**
 * SMTP credentials for contact.php
 *
 * DEPLOYMENT:
 *   1. Copy this file to `contact.config.php` (NOT committed to git)
 *   2. Fill in the password from your cPanel mailbox
 *   3. Upload to ONE LEVEL ABOVE public_html on the server
 *      (e.g. /home/yourusername/contact.config.php)
 *   4. Set permissions to 600 in cPanel File Manager
 *
 * Living above the web root means the file is physically unreachable via
 * HTTP — even if PHP processing ever breaks, the password cannot leak.
 * It is never overwritten by deploys (it lives only on the server).
 */

return [
    'smtp_host' => 'mail.introspekta.com.hr',
    'smtp_port' => 465,
    'smtp_user' => 'kontakt@introspekta.com.hr',
    'smtp_pass' => 'PASTE_THE_MAILBOX_PASSWORD_HERE',
];
