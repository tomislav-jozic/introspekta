import { Link } from "react-router";
import { CtaButton } from "./CtaButton";
import { Seo } from "./Seo";
import { articles } from "../../data/articles";

const services = [
  {
    title: "Individualno savjetovanje",
    description:
      "Osobni prostor za istraživanje misli, emocija i ponašajnih obrazaca u sigurnom i povjerljivom okruženju.",
    href: "/usluge",
  },
  {
    title: "Online savjetovanje",
    description:
      "Dostupno iz udobnosti vašeg doma.",
    href: "/usluge",
  },
  {
    title: "Radionice i edukacije",
    description:
      "Grupni programi za razvoj emocionalnih vještina, samosvijesti i psihološke otpornosti.",
    href: "/usluge",
  },
];

const blogPreviews = articles.slice(0, 3);

export function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <Seo
        title="Psihoterapija Zagreb"
        description="Introspekta — siguran prostor za istraživanje sebe. Kognitivno-bihevioralna terapija, ekspresivna art terapija, mindfulness pristupi u Zagrebu. Individualno i online savjetovanje."
        path="/"
      />
      {/* Hero */}
      <section className="py-28 md:py-36">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.2em] text-brand mb-6 uppercase">Psihoterapija · Zagreb</p>
          <h1 className="text-5xl md:text-6xl tracking-tight text-stone-900 mb-8 leading-tight">
            Siguran prostor za<br />istraživanje sebe.
          </h1>
          <p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-xl">
            Dobrodošli u Introspektu — mjesto gdje stvaramo siguran prostor za istraživanje sebe,
            prepoznavanje vlastitih snaga i izgradnju života u skladu s osobnim vrijednostima.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <CtaButton to="/kontakt" className="px-8 py-4">
              Rezervirajte termin
            </CtaButton>
            <CtaButton to="/pristup" variant="secondary" className="px-8 py-4">
              Saznajte više
            </CtaButton>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="py-16 border-t border-stone-100">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <p className="text-stone-600 leading-relaxed text-lg">
              U svom radu usmjeravam se na jedinstvene potrebe svakog klijenta. Svaka osoba dolazi
              s vlastitim iskustvima, izazovima i ciljevima, stoga terapijski proces oblikujemo
              zajedno — kroz suradnju, razumijevanje i prilagođeni terapijski plan.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
              <span className="text-sm text-stone-500">Kognitivno-bihevioralna terapija (KBT)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
              <span className="text-sm text-stone-500">Ekspresivna art terapija</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
              <span className="text-sm text-stone-500">Mindfulness (MBCT)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
              <span className="text-sm text-stone-500">Terapija prihvaćanjem i posvećenošću (ACT)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-brand mt-2 shrink-0" />
              <span className="text-sm text-stone-500">Terapija usmjerena na suosjećanje (CFT)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-t border-stone-100">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl tracking-tight text-stone-900">Usluge</h2>
          <Link to="/usluge" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
            Sve usluge →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-stone-200">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="bg-white p-8 group hover:bg-stone-50 transition-colors"
            >
              <h3 className="text-lg tracking-tight text-stone-900 mb-3 group-hover:text-brand transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Philosophy quote */}
      <section className="py-24 border-t border-stone-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl text-stone-700 leading-relaxed tracking-tight">
            "Cilj terapije nije samo ublažavanje trenutnih teškoća, već i osnaživanje klijenata
            za dugoročne promjene — kako bi bolje razumjeli sebe i gradili život u skladu sa
            svojim vrijednostima."
          </p>
        </div>
      </section>

      {/* Blog preview */}
      <section className="py-24 border-t border-stone-100">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl tracking-tight text-stone-900">Blog</h2>
          <Link to="/blog" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">
            Svi tekstovi →
          </Link>
        </div>
        <div className="space-y-0 divide-y divide-stone-100">
          {blogPreviews.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row md:items-start gap-4 py-8 hover:bg-stone-50 -mx-4 px-4 transition-colors"
            >
              <div className="md:w-64 shrink-0">
                <span className="text-sm text-stone-900 group-hover:text-brand transition-colors leading-snug">
                  {post.title}
                </span>
              </div>
              <p className="text-sm text-stone-500 leading-relaxed md:ml-8">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Block */}
      <section className="py-24 border-t border-stone-100">
        <div className="bg-brand p-12 md:p-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 rounded-md shadow-2xl">
          <div>
            <p className="text-xs tracking-[0.2em] text-green-300 uppercase mb-3">Napravite prvi korak</p>
            <h2 className="text-3xl tracking-tight text-white">Rezervirajte termin</h2>
            <p className="text-green-200 text-sm mt-3 max-w-md">
              Za upite i rezervaciju termina, kontaktirajte me putem obrasca. Veselim se
              potencijalnoj suradnji.
            </p>
          </div>
          <CtaButton to="/kontakt" variant="inverse" className="shrink-0 px-8 py-4">
            Kontaktirajte me
          </CtaButton>
        </div>
      </section>
    </div>
  );
}
