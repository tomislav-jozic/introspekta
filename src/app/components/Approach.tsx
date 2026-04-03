import { CtaButton } from "./CtaButton";
import { Seo } from "./Seo";

const modalities = [
  {
    code: "KBT",
    name: "Kognitivno-bihevioralna terapija",
    description:
      "Znanstveno utemeljen pristup koji pomaže u prepoznavanju i mijenjanju misaonih i ponašajnih obrazaca koji doprinose teškoćama. KBT je posebno učinkovit za anksioznost, depresiju i upravljanje stresom.",
  },
  {
    code: "ART",
    name: "Ekspresivna art terapija",
    description:
      "Kreativne metode koje omogućuju izražavanje i obradu emocija, posebno u trenucima kada riječi nisu dovoljne. Praktičarka sam ekspresivne art terapije i koristim je kao dopunu razgovornoj terapiji.",
  },
  {
    code: "MBCT",
    name: "Kognitivna terapija temeljena na mindfulnessu",
    description:
      "Integrira tehnike mindfulnessa s kognitivnom terapijom kako bi pomogla klijentima da razviju svjesnu prisutnost, regulaciju emocija i odgovor umjesto automatske reakcije.",
  },
  {
    code: "ACT",
    name: "Terapija prihvaćanjem i posvećenošću",
    description:
      "Pristup koji potiče psihološku fleksibilnost — prihvaćanje misli i osjećaja bez izbjegavanja te posvećenost ponašanjima koja su u skladu s osobnim vrijednostima.",
  },
  {
    code: "CFT",
    name: "Terapija usmjerena na suosjećanje",
    description:
      "Razvijanje suosjećanja prema sebi i drugima kao temelj psihološkog iscjeljenja — posebno korisno za osobe s visokom razinom samokritičnosti i kroničnog srama.",
  },
];

export function Approach() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <Seo
        title="Terapijski pristup"
        description="Integrirani terapijski pristupi prilagođeni vašim potrebama — KBT, ekspresivna art terapija, MBCT, ACT i CFT. Suradnja, osnaživanje i prilagodljivost."
        path="/pristup"
      />
      {/* Header */}
      <div className="max-w-2xl mb-20">
        <p className="text-xs tracking-[0.2em] text-brand uppercase mb-4">Pristup</p>
        <h1 className="text-5xl tracking-tight text-stone-900 mb-6">
          Terapija prilagođena vama.
        </h1>
        <p className="text-lg text-stone-500 leading-relaxed">
          Integriram više pristupa utemeljenih na istraživanjima, prilagođavajući metode
          jedinstvenim potrebama i ciljevima svakog klijenta.
        </p>
      </div>

      {/* Core principles */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-px bg-stone-200">
          <div className="bg-white p-8">
            <div className="w-8 h-px bg-brand mb-6" />
            <h3 className="text-stone-900 mb-3 tracking-tight">Suradnja</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Vi ste stručnjak za vlastiti život. Moj posao je stvoriti siguran prostor i
              zajedno s vama osmisliti terapijski put koji odgovara vašim potrebama i
              vrijednostima.
            </p>
          </div>
          <div className="bg-white p-8">
            <div className="w-8 h-px bg-brand mb-6" />
            <h3 className="text-stone-900 mb-3 tracking-tight">Osnaživanje</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Cilj nije samo ublažavanje teškoća u ovom trenutku, već razvijanje dugoročnih
              vještina — novih načina suočavanja, boljeg razumijevanja sebe i jačih unutarnjih
              resursa.
            </p>
          </div>
          <div className="bg-white p-8">
            <div className="w-8 h-px bg-brand mb-6" />
            <h3 className="text-stone-900 mb-3 tracking-tight">Prilagodljivost</h3>
            <p className="text-sm text-stone-500 leading-relaxed">
              Kombiniram različite terapijske modalitete — razgovornu terapiju, kreativne
              metode, mindfulness tehnike — ovisno o tome što u danom trenutku ima smisla
              za vas.
            </p>
          </div>
        </div>
      </section>

      {/* Modalities */}
      <section className="border-t border-stone-100 pt-16 mb-24">
        <h2 className="text-2xl tracking-tight text-stone-900 mb-12">Terapijski pristupi</h2>
        <div className="space-y-0 divide-y divide-stone-100">
          {modalities.map((m) => (
            <div key={m.code} className="py-8 grid md:grid-cols-4 gap-6 items-start">
              <div>
                <span className="inline-block text-xs tracking-widest text-brand border border-brand/30 px-2.5 py-1">
                  {m.code}
                </span>
              </div>
              <div className="md:col-span-3">
                <h3 className="text-stone-900 mb-2 tracking-tight">{m.name}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-stone-100 pt-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl tracking-tight text-stone-900 mb-8">Što možete očekivati</h2>
            <div className="space-y-6 text-sm text-stone-500 leading-relaxed">
              <div>
                <p className="text-stone-900 mb-1">Prvo savjetovanje</p>
                <p>
                  Razgovaramo o tome što vas je dovelo u terapiju, vašim ciljevima i
                  pitanjima. Ovo je i prilika da procijenimo međusobni odnos i pristup
                  koji bi vam odgovarao.
                </p>
              </div>
              <div>
                <p className="text-stone-900 mb-1">Kontinuirani rad</p>
                <p>
                  Sesije obično traju 50 minuta i odvijaju se tjedno ili dvotjedno. Zajedno
                  razvijamo terapijski plan koji prilagođavamo prema potrebi.
                </p>
              </div>
              <div>
                <p className="text-stone-900 mb-1">Povjerljivost</p>
                <p>
                  Sve što se razgovara na seansama je povjerljivo, uz rijetke zakonske
                  iznimke koje ću objasniti na prvom susretu.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-stone-50 p-8">
            <p className="text-xs tracking-[0.2em] text-brand uppercase mb-6">
              Napravite prvi korak
            </p>
            <p className="text-stone-700 leading-relaxed mb-8">
              Početak terapije može izgledati zastrašujuće. Slobodno me kontaktirajte s
              pitanjima — bez obveza.
            </p>
            <CtaButton to="/kontakt">
              Kontaktirajte me
            </CtaButton>
          </div>
        </div>
      </section>
    </div>
  );
}
