import { useState } from "react";
import { Seo } from "./Seo";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
    website: "", // honeypot
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const json = await res.json().catch(() => ({ ok: false }));
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "send_failed");
      }
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", topic: "", message: "", website: "" });
    } catch {
      setError(
        "Slanje poruke nije uspjelo. Molim pokušajte ponovno ili me kontaktirajte direktno na kontakt@introspekta.com.hr."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Seo
        title="Kontakt"
        description="Rezervirajte termin za psihoterapiju u Zagrebu ili online. Kontaktirajte Introspektu putem obrasca ili e-maila kontakt@introspekta.com.hr."
        path="/kontakt"
      />
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="text-xs tracking-[0.2em] text-brand uppercase mb-4">Kontakt</p>
        <h1 className="text-5xl tracking-tight text-stone-900 mb-6">Stupite u kontakt.</h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          Za upite i rezervaciju termina, ispunite obrazac u nastavku ili me kontaktirajte
          direktno. Veselim se potencijalnoj suradnji.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-20">
        {/* Form */}
        <div>
          {submitted ? (
            <div className="border border-brand/20 bg-brand/5 p-10">
              <p className="text-brand mb-2">Hvala vam na poruci.</p>
              <p className="text-sm text-stone-500">
                Javit ću vam se u roku od 24–48 sati.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-xs tracking-wide text-stone-500 mb-2 block uppercase">
                  Ime i prezime *
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-stone-200 focus:border-brand rounded-none bg-transparent"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-xs tracking-wide text-stone-500 mb-2 block uppercase">
                  E-mail adresa *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-stone-200 focus:border-brand rounded-none bg-transparent"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-xs tracking-wide text-stone-500 mb-2 block uppercase">
                  Broj telefona
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-stone-200 focus:border-brand rounded-none bg-transparent"
                />
              </div>

              <div>
                <Label htmlFor="topic" className="text-xs tracking-wide text-stone-500 mb-2 block uppercase">
                  Vrsta usluge
                </Label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full border border-stone-200 px-3 py-2 text-sm text-stone-700 bg-transparent focus:outline-none focus:border-brand"
                >
                  <option value="">Odaberite...</option>
                  <option value="individualno">Individualno savjetovanje</option>
                  <option value="online">Online savjetovanje</option>
                  <option value="radionica">Radionice i edukacije</option>
                  <option value="ostalo">Ostalo</option>
                </select>
              </div>

              <div>
                <Label htmlFor="message" className="text-xs tracking-wide text-stone-500 mb-2 block uppercase">
                  Poruka *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full border-stone-200 focus:border-brand rounded-none bg-transparent resize-none"
                  placeholder="Ukratko mi opišite što vas je dovelo ovdje..."
                />
              </div>

              {/* Honeypot — hidden from real users, bots will fill it */}
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-brand text-white hover:bg-brand-dark rounded-lg py-6 tracking-wide text-sm disabled:opacity-60"
              >
                {loading ? "Slanje..." : "Pošaljite poruku"}
              </Button>

              {error && (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}

              <p className="text-xs text-stone-500">
                * Obavezna polja. Vaši podaci se čuvaju strogo povjerljivo.
              </p>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-stone-500 uppercase mb-6">
              Kontakt informacije
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-500 mb-1">E-mail</p>
                <a
                  href="mailto:kontakt@introspekta.com.hr"
                  className="text-stone-800 hover:text-brand transition-colors"
                >
                  kontakt@introspekta.com.hr
                </a>
              </div>
              <div>
                <p className="text-xs text-stone-500 mb-1">Lokacija</p>
                <p className="text-stone-700">Zagreb</p>
                <p className="text-xs text-stone-500 mt-0.5">
                  Sesije dostupne i online
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-8">
            <p className="text-xs tracking-[0.2em] text-stone-500 uppercase mb-5">
              Što mogu očekivati
            </p>
            <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
              <p>
                Nakon što pošaljete poruku, javit ću vam se u roku od 24–48 sati kako bismo
                dogovorili slobodan termin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
