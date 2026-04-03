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
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", topic: "", message: "" });
      setSubmitted(false);
    }, 4000);
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
        description="Rezervirajte termin za psihoterapiju u Zagrebu ili online. Kontaktirajte Introspektu putem obrasca ili e-maila info@introspekta.hr."
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

              <Button
                type="submit"
                className="w-full bg-brand text-white hover:bg-brand-dark rounded-lg py-6 tracking-wide text-sm"
              >
                Pošaljite poruku
              </Button>

              <p className="text-xs text-stone-400">
                * Obavezna polja. Vaši podaci se čuvaju strogo povjerljivo.
              </p>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="space-y-12">
          <div>
            <p className="text-xs tracking-[0.2em] text-stone-400 uppercase mb-6">
              Kontakt informacije
            </p>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-stone-400 mb-1">E-mail</p>
                <a
                  href="mailto:info@introspekta.hr"
                  className="text-stone-800 hover:text-brand transition-colors"
                >
                  info@introspekta.hr
                </a>
              </div>
              <div>
                <p className="text-xs text-stone-400 mb-1">Lokacija</p>
                <p className="text-stone-700">Zagreb</p>
                <p className="text-xs text-stone-400 mt-0.5">
                  Sesije dostupne i online
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-100 pt-8">
            <p className="text-xs tracking-[0.2em] text-stone-400 uppercase mb-5">
              Što mogu očekivati
            </p>
            <div className="space-y-4 text-sm text-stone-500 leading-relaxed">
              <p>
                Nakon što pošaljete poruku, javit ću vam se u roku od 24–48 sati kako bismo
                dogovorili slobodan termin.
              </p>
              <p>
                Nismo hitna ili krizna služba. Ako ste u krizi, molim kontaktirajte Centar za
                krizna stanja ili Liniju za podršku 0800 225 888 (besplatno).
              </p>
            </div>
          </div>

          <div className="bg-stone-50 p-6 border-l-2 border-brand">
            <p className="text-xs text-brand tracking-wide mb-2">Krizna podrška</p>
            <p className="text-sm text-stone-500 leading-relaxed">
              U slučaju hitne krize mentalnog zdravlja, nazovite besplatnu liniju{" "}
              <strong className="text-stone-700">0800 225 888</strong> ili se uputite
              u najbliži hitni prijam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
