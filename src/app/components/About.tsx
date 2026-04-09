import { Seo } from "./Seo";

const certifications = [
  {
    year: "u tijeku",
    title: "Psihoterapeut pod supervizijom",
    subtitle: "Kognitivno-bihevioralna terapija (KBT)",
  },
  { year: "2025", title: "Kompleksna trauma", subtitle: "Kako da kompleksna trauma bude malo manje kompleksna?" },
  { year: "2025", title: "Edukacija iz ekspresivne art terapije", subtitle: "Praktičar metode" },
  { year: "2025", title: "Uvodna edukacija iz terapije usmjerene na suosjećanje", subtitle: "CFT" },
  {
    year: "2024",
    title: "Tretman i prevencija PTSP-a",
    subtitle: "Kognitivno-bihevioralni pristup usmjeren na samoefikasnost",
  },
  {
    year: "2024",
    title: "Stručno osposobljavanje iz područja traumatske psihologije",
    subtitle: "Lidija Arambašić",
  },
  {
    year: "2022",
    title: "Edukacija iz kognitivne terapije temeljene na mindfulnessu",
    subtitle: "MBCT",
  },
  {
    year: "2020",
    title: "Edukacija iz Terapije prihvaćanjem i posvećenošću",
    subtitle: "ACT",
  },
  {
    year: "2016",
    title: "Edukacija iz New Maudsley pristupa za poremećaje prehrane",
    subtitle: "",
  },
  {
    year: "2015",
    title: "Radionica o KBT-E Multistep",
    subtitle: "Dr. Dalle Grave",
  },
  {
    year: "2015",
    title: "Edukacija iz Neuro-lingvističkog programiranja",
    subtitle: "Business Practitioner Program",
  },
];

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Seo
        title="O meni"
        description="Upoznajte psihoterapeutkinju iza Introspekte — obrazovanje, radno iskustvo i certifikati iz kognitivno-bihevioralne terapije, art terapije, MBCT, ACT i CFT pristupa."
        path="/o-meni"
      />
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="text-xs tracking-[0.2em] text-brand uppercase mb-4">O meni</p>
        <h1 className="text-5xl tracking-tight text-stone-900 mb-6">Moj put u psihoterapiju.</h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          Cijeli moj profesionalni razvoj usmjeren je na rad u području mentalnog zdravlja,
          s posebnim fokusom na mentalnu otpornost i emocionalnu dobrobit.
        </p>
      </div>

      {/* Education */}
      <section className="mb-24">
        <h2 className="text-2xl tracking-tight text-stone-900 mb-8">Obrazovanje</h2>
        <div className="space-y-0 divide-y divide-stone-100">
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">Preddiplomski studij</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">Psihologija</p>
              <p className="text-sm text-stone-500 mt-1">Filozofski fakultet, Maribor</p>
            </div>
          </div>
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">Diplomski studij</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">Psihologija</p>
              <p className="text-sm text-stone-500 mt-1">
                Hrvatski studiji, Sveučilište u Zagrebu
              </p>
            </div>
          </div>
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">Psihoterapija</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">Kognitivno-bihevioralna terapija (KBT)</p>
              <p className="text-sm text-stone-500 mt-1">
                Trenutno u fazi supervizije. Uz KBT, završila sam dodatne edukacije iz
                trećeg vala KBT-a (MBCT, ACT, CFT).
              </p>
            </div>
          </div>
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">Psihoterapija</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">Ekspresivna art terapija</p>
              <p className="text-sm text-stone-500 mt-1">Praktičar metode</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work experience */}
      <section className="border-t border-stone-100 pt-16 mb-24">
        <h2 className="text-2xl tracking-tight text-stone-900 mb-8">Radno iskustvo</h2>
        <div className="space-y-0 divide-y divide-stone-100">
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">2019 — 2024</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">
                Udruga za podršku žrtvama i svjedocima, Varaždin
              </p>
              <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                Psihološka podrška žrtvama i svjedocima različitih oblika nasilja. Stjecanje
                iskustva rada s ljudima u teškim životnim situacijama.
              </p>
            </div>
          </div>
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">2019 — 2025</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">Hrvatski zavod za javno zdravstvo</p>
              <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                Istraživanja i projekti u području droga i ovisnosti. Poseban interes u
                smanjenju šteta i promicanju politika usmjerenih na podršku osobama koje
                se suočavaju s problemom ovisnosti.
              </p>
            </div>
          </div>
          <div className="py-8 grid md:grid-cols-4 gap-4">
            <p className="text-sm text-stone-400">Od studija</p>
            <div className="md:col-span-3">
              <p className="text-stone-900">Osposobljavanja i volontiranja</p>
              <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                Još od studentskih dana bavim se temama vezanim uz mentalno zdravlje kroz
                različita osposobljavanja i volontiranja, s posebnim fokusom na mentalnu
                otpornost i emocionalnu dobrobit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-stone-100 pt-16">
        <h2 className="text-2xl tracking-tight text-stone-900 mb-8">Diplome i certifikati</h2>
        <div className="space-y-0 divide-y divide-stone-100">
          {certifications.map((cert) => (
            <div key={cert.title} className="py-5 grid md:grid-cols-4 gap-4 items-start">
              <p className="text-sm text-stone-400 tabular-nums">{cert.year}</p>
              <div className="md:col-span-3">
                <p className="text-stone-800">{cert.title}</p>
                {cert.subtitle && (
                  <p className="text-sm text-stone-500 mt-0.5">{cert.subtitle}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
