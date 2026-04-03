export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  content: string[];
}

export const articles: Article[] = [
  {
    slug: "maladaptivno-sanjarenje",
    title: "Maladaptivno sanjarenje: zarobljeni u svijetu mašte",
    excerpt:
      "Sanjarenje je spontano iskustvo koje može poticati kreativnost — no kada postane prekomjerno, može narušiti svakodnevno funkcioniranje.",
    tags: ["mentalno zdravlje", "sanjarenje", "ovisnost o ponašanju", "mehanizmi suočavanja"],
    content: [
      "Sanjarenje se definira kao preusmjeravanje pažnje s vanjskog okruženja na vlastite misli i osjećaje. Ono je spontano, subjektivno iskustvo koje se javlja u situacijama bez zadataka ili podražaja te ima različite funkcije, ovisno o sadržaju i učestalosti. Može poticati kreativnost, pomoći u planiranju i rješavanju problema, olakšati suočavanje s budućim izazovima te unaprijediti socijalne interakcije. Također, može pridonijeti boljoj samosvijesti, uspješnijem planiranju budućnosti i razvijanju suosjećanja.",
      "Singer (1966) navodi da se čak 96% prosječnih, odraslih Amerikanaca svakodnevno prepušta nekom obliku sanjarenja. U sanjarenje se najčešće upuštamo kada smo sami (primjerice, prije spavanja) i uglavnom je usmjereno na planiranje budućih postupaka ili analiziranje međuljudskih odnosa.",
      "S druge strane, pretjerano sanjarenje može narušavati svakodnevno funkcioniranje te tad govorimo o maladaptivnom sanjarenju. Umjesto ispunjavanja radnih i akademskih aktivnosti ili njegovanja interpersonalnih odnosa, osobe sklone maladaptivnom sanjarenju provode znatan dio budnog vremena u svojim imaginarnim scenarijima. Sanjarenje može biti posebno potaknuto određenom glazbom, vizualnim podražajima ili specifičnim slikama, a često uključuje kontinuirane priče i složene zaplete.",
      "Prema istraživanjima, mnogi pojedinci koji su skloni maladaptivnom sanjarenju već od djetinjstva posjeduju iznimno živopisnu maštu. Iskustvo sanjarenja opisuje se kao ugodno i umirujuće, no s vremenom može postati destruktivno ako imaginarni svijet počinje iskrivljavati percepciju stvarnosti. Štetni učinci maladaptivnog sanjarenja očituju se u narušenoj kvaliteti mentalnog zdravlja, smanjenoj akademskoj i profesionalnoj uspješnosti te problemima u društvenom životu.",
      "Maladaptivno sanjarenje često služi kao mehanizam suočavanja s emocionalnim poteškoćama, usamljenošću, socijalnom anksioznošću ili čak traumatskim iskustvima. Pojedini stručnjaci ističu da može djelovati kao obrambeni mehanizam protiv ekstremnih psihičkih stanja, nepovoljnih životnih okolnosti ili zlostavljanja. Može se promatrati kao vrsta ponašajnih ovisnosti koja služi za izbjegavanje stvarnosti.",
      "Navedeni obrazac stvara začarani krug: izbjegavanje problema donosi kratkoročno olakšanje, dok sanjarenje pruža emocionalno zadovoljavajuću alternativu. Međutim, dugoročno, ova navika može produbiti probleme jer osoba ne razvija učinkovite strategije suočavanja sa stvarnim izazovima. Nakon intenzivnog sanjarenja pojedinci često osjećaju krivnju zbog izgubljenog vremena, što može dodatno potaknuti potrebu za još dubljim povlačenjem u imaginarni svijet.",
    ],
  },
  {
    slug: "kronicni-sram",
    title: "Kronični sram",
    excerpt:
      "Kronični sram nije samo trenutna nelagoda — to je dugotrajan osjećaj vlastite slabosti popraćen uvjerenjem da nismo dostojni ljubavi i bliskih odnosa.",
    tags: ["emocije", "sram", "samopoštovanje", "rani razvoj"],
    content: [
      "Sram je osjećaj koji nastaje kada pomislimo da smo učinili nešto što će druge ljude navesti da nas procjenjuju na negativan način. Obično se javlja kada mislimo da nismo ispunili tuđa očekivanja ili da smo \"ispali loši\" u njihovim očima. Učvršćuje vjerovanje da nas drugi ne prihvaćaju, što nas opetovano navodi na procjenu da će nas odbaciti.",
      "S druge strane, kronični sram nije samo trenutna nelagoda, već je dugotrajan osjećaj vlastite slabosti, popraćen negativnim mišljenjem o sebi i niskim samopoštovanjem. Osoba koja doživljava kronični sram često se osjeća odvojeno od drugih i ima osjećaj da nije \"dovoljno dobra\", što može dovesti do duboke unutarnje izolacije i osjećaja bezvrijednosti. Iza tog osjećaja obično stoji uvjerenje da nismo dostojni ljubavi i bliskih odnosa, unatoč tome što želimo biti povezani s drugima.",
      "Sram ima važnu ulogu u našem razvoju jer nam pomaže usvojiti društvene norme i prihvatljiva ponašanja. Osjećaj srama javlja se kada mislimo da smo učinili nešto što nije u skladu s normama koje su društveno prihvaćene ili s našim vlastitim idealima o tome kako bismo se trebali ponašati ili izgledati pred drugima.",
      "Kronični sram može nastati ako dijete nije osjećalo dovoljno povezanosti s primarnim skrbnicima. Svaki trenutak u kojem dijete ne može osjetiti povezanost s primarnim skrbnicima može dovesti do neusklađenosti osjećaja i misli, što dovodi do osjećaja gubitka kontrole, nesigurnosti ili zbunjenosti u vezi s tim tko smo u stvarnosti.",
      "Jedan od mehanizama koji može pojačati osjećaj srama je projekcija. To je način na koji nesvjesno prebacujemo naše unutarnje osjećaje i misli na druge. Na primjer, kada se osjećamo nesigurno zbog vlastitih nesavršenosti, možemo početi kritizirati druge ljude zbog istih osobina. Projekcija nam kratkoročno pomaže izbjeći nelagodu, ali dugoročno održava i produbljuje začarani krug srama.",
      "Kronični sram može postati začarani krug. Osoba koja se srami zbog nečega počinje primjećivati fizičke simptome srama, poput crvenila ili znojenja. Tada počinje misliti da su drugi to primijetili i da o njoj misle loše, što izaziva još jači sram. Ovaj metasram (sram od srama) samo pojačava početni osjećaj i cijeli proces postaje još bolniji.",
    ],
  },
  {
    slug: "kreativnost-u-psihoterapiji",
    title: "Uloga kreativnosti u psihoterapiji",
    excerpt:
      "Kreativnost je temeljna ljudska sposobnost — u psihoterapiji, ona otvara prostor za nove perspektive, fleksibilnija uvjerenja i inovativne načine suočavanja s izazovima.",
    tags: ["kreativnost", "art terapija", "psihoterapija", "psihološka fleksibilnost"],
    content: [
      "Kreativnost je temeljna ljudska sposobnost koja omogućuje stvaranje novih i originalnih ideja, rješavanje problema te prilagodbu promjenjivim okolnostima. U kontekstu psihoterapije, o kreativnosti se najčešće govori u ekspresivnim terapijskim pravcima, gdje se koristi kao alat za preoblikovanje i razrješenje problema.",
      "Kreativnost je generalno ključna za psihološku fleksibilnost jer omogućava stvaranje novih perspektiva i fleksibilnijih uvjerenja koja pomažu u učinkovitijem nošenju s izazovima. Primjerice, kod rješavanja problema, veći broj generiranih opcija povećava šanse za odabir strategije koja će biti prilagodljiva i korisna u specifičnom kontekstu.",
      "Na kognitivnoj razini, kreativnost uključuje dinamičnu interakciju divergentnog i konvergentnog mišljenja. Divergentno mišljenje omogućuje generiranje novih ideja, dok ih konvergentno mišljenje evaluira i primjenjuje. Ovaj proces povezan je s emocionalnim zadovoljstvom i osjećajem koherencije, koji su ključni za mentalno zdravlje.",
      "Kreativnost se promatra kao opći ljudski potencijal koji se može poticati, ali i potiskivati. Ometanje kreativnosti u ranom razvoju može imati dugoročne posljedice, poput smanjene sposobnosti rješavanja problema. Stoga je u psihoterapiji ključno raditi na razvoju kreativnog potencijala klijenata i osnaživanju njihovih resursa za istraživanje problema.",
      "Kreativnost u terapiji može se manifestirati na tri razine: unutar klijenta, terapeuta i samog procesa. Omogućuje oblikovanje novih narativa, integraciju iskustava i transformaciju konflikata, čime doprinosi osjećaju koherencije i osobnog značenja.",
      "Ovaj potencijal kreativnosti osobito je naglašen u ekspresivnim pristupima poput psihodrame, koju je razvio Moreno. On je isticao spontanost kao ključni element ljudske sposobnosti za rast i prilagodbu. Njegovo poimanje kreativne akcije kao sredstva za otvaranje novih mogućnosti odražava osnovni cilj terapijskog procesa: pomoći klijentima da pronađu inovativne načine za suočavanje s izazovima i stvaranje promjena koje vode osobnom rastu.",
    ],
  },
];
