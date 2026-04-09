import { Link } from "react-router";
import { CtaButton } from "./CtaButton";
import { Seo } from "./Seo";

const services = [
  {
    number: "01",
    title: "Individualno savjetovanje",
    description:
      "Individualni terapijski susreti pružaju osobni, povjerljivi prostor za istraživanje misli, emocija i ponašajnih obrazaca. Svaki proces oblikujemo zajedno — prilagođen vašim potrebama, tempu i ciljevima.",
    details: [
      "Sesije trajanja 60 minuta",
      "Tjedno ili dvotjedno",
      "Prilagođen terapijski plan",
    ],
  },
  {
    number: "02",
    title: "Online savjetovanje",
    description:
      "Terapija dostupna iz udobnosti vašeg doma — ista razina pažnje, prisutnosti i profesionalnosti. Online savjetovanje idealno je za one koji preferiraju fleksibilnost ili nemaju mogućnost dolaska uživo.",
    details: [
      "Video sesije putem sigurne platforme",
      "Isti format i trajanje kao i u osobnom susretu",
      "Pristupačno bez obzira na lokaciju",
      "Fleksibilno zakazivanje",
    ],
  },
  {
    number: "03",
    title: "Radionice i edukacije",
    description:
      "Grupni programi dizajnirani za razvoj emocionalnih vještina, samosvijesti i psihološke otpornosti. Radionice kombiniraju teorijske uvide s praktičnim vježbama u sigurnom, podržavajućem skupnom okruženju.",
    details: [
      "Kombinacija teorije i iskustvenih vježbi",
      "Grupni format koji potiče refleksiju i povezivanje",
      "Za organizacije, škole i otvorene grupe",
    ],
  },
];

export function Services() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Seo
        title="Usluge"
        description="Individualno savjetovanje, online terapija i grupne radionice u Zagrebu. Podrška za anksioznost, depresiju, traumu, samopoštovanje i osobni rast."
        path="/usluge"
      />
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="text-xs tracking-[0.2em] text-brand uppercase mb-4">Usluge</p>
        <h1 className="text-5xl tracking-tight text-stone-900 mb-6">
          Što nudim.
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          Terapijski prostor prilagođen vašim potrebama — individualni, online i grupni
          formati za podršku vašem mentalnom zdravlju i osobnom rastu.
        </p>
      </div>

      {/* Services */}
      <section className="space-y-0 divide-y divide-stone-100 mb-24">
        {services.map((service) => (
          <div key={service.number} className="py-14 grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs text-stone-400 tracking-widest mb-4">{service.number}</p>
              <h2 className="text-2xl tracking-tight text-stone-900 mb-4">{service.title}</h2>
              <p className="text-stone-500 leading-relaxed text-sm">{service.description}</p>
            </div>
            <div className="space-y-3">
              {service.details.map((detail) => (
                <div key={detail} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                  <span className="text-sm text-stone-600">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Focus areas */}
      <section className="border-t border-stone-100 pt-16 mb-24">
        <h2 className="text-2xl tracking-tight text-stone-900 mb-10">Područja rada</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            "Anksioznost i stres",
            "Depresija",
            "Trauma",
            "Kronični sram",
            "Samopoštovanje i identitet",
            "Emocionalna regulacija",
            "Ovisnosti i štetne navike",
            "Životne tranzicije",
            "Osobni rast i vrijednosti",
          ].map((area) => (
            <div
              key={area}
              className="border border-stone-200 px-4 py-3 text-sm text-stone-600"
            >
              {area}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-stone-100 pt-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl tracking-tight text-stone-900 mb-3">
              Niste sigurni koja usluga odgovara vama?
            </h2>
            <p className="text-stone-500 text-sm leading-relaxed">
              Slobodno me kontaktirajte s pitanjima. Zajedno ćemo pronaći pristup koji
              ima smisla za vaše potrebe i okolnosti.
            </p>
          </div>
          <div className="flex gap-4">
            <CtaButton to="/kontakt">
              Rezervirajte termin
            </CtaButton>
            <CtaButton to="/pristup" variant="secondary">
              O pristupu
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
