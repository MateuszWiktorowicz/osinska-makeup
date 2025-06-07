import { Service, ServiceVariant } from "@/@types/objects/service/service";

export const mainServices: Service[] = [
  {
    id: 1,
    title: "Makijaż",
    subtitle: "",
    description: `
      <h2>Makijaż dopasowany do Ciebie</h2>
  <p>
    W mojej pracy najważniejsze jest dla mnie podkreślenie Twojego naturalnego piękna i sprawienie, byś czuła się wyjątkowo — niezależnie od okazji.
    Pracuję z pasją, starannością i pełnym zaangażowaniem, tworząc makijaże, które wydobywają to, co w Tobie najpiękniejsze.
  </p>

  <h3>Zakres usług:</h3>
  <ul>
    <li>Makijaż ślubny – klasyczny, romantyczny lub glamour</li>
    <li>Makijaż wieczorowy – idealny na imprezy, wesela i ważne wyjścia</li>
    <li>Makijaż dzienny – lekki, świeży, idealny na co dzień</li>
    <li>Makijaż dla kobiety dojrzałej – subtelny, wygładzający i elegancki</li>
    <li>Makijaż do sesji fotograficznych – dopasowany do światła i stylu sesji</li>
  </ul>

  <h3>Dlaczego warto?</h3>
  <ul>
    <li>Indywidualne podejście i dopasowanie do typu urody</li>
    <li>Trwałość makijażu – nawet do kilkunastu godzin</li>
    <li>Profesjonalne kosmetyki renomowanych marek</li>
    <li>Doświadczenie w pracy z cerą w każdym wieku</li>
    <li>Spokojna, kameralna atmosfera lub dojazd na miejsce</li>
  </ul>
    `,
    icon: "makeup",
  },
  {
    id: 2,
    title: "Masaż kobido",
    subtitle: "",
    description: `
      <h2>Naturalny lifting twarzy dzięki masażowi Kobido</h2>
      <p>
        Masaż Kobido to tradycyjna japońska technika, która poprawia krążenie, ujędrnia skórę i redukuje napięcia mięśniowe twarzy. Dzięki regularnym zabiegom możesz cieszyć się młodszym, bardziej promiennym wyglądem bez konieczności ingerencji chirurgicznej.
      </p>

      <h3>Korzyści masażu Kobido:</h3>
      <ul>
        <li>Poprawa elastyczności i jędrności skóry</li>
        <li>Redukcja zmarszczek i napięcia mięśniowego</li>
        <li>Stymulacja naturalnej produkcji kolagenu</li>
        <li>Relaks i odprężenie dla całej twarzy</li>
        <li>Poprawa kolorytu i blasku skóry</li>
      </ul>

      <h3>Dla kogo?</h3>
      <p>Masaż Kobido polecany jest dla osób pragnących naturalnego odmłodzenia, poprawy kondycji skóry oraz redukcji stresu.</p>
    `,
    icon: "kobido",
  },
];

export const makeups: ServiceVariant[] = [
  {
    id: 3,
    title: "Makijaż ślubny",
    subtitle:
      "W tym: aplikacja kępek rzęs, utrwalenie makijażu, mini zestaw do poprawek.",
    description: `
      <p>
        Makijaż stworzony z myślą o najważniejszym dniu w Twoim życiu. Podkreśla naturalne piękno, harmonizuje z suknią, fryzurą i klimatem ceremonii. 
        Wykonany z użyciem najwyższej jakości kosmetyków, odporny na wzruszenia, łzy i wielogodzinną zabawę.
      </p>
      <p>
        W cenie znajduje się aplikacja kępek rzęs, precyzyjne utrwalenie makijażu oraz mini zestaw do poprawek, byś mogła przez cały dzień czuć się pięknie i pewnie.
      </p>
    `,
    image: { url: "/img/makijaz-slubny.jpg", alt: "" },
    icon: "makeup",
    price: 250,
    promotionPrice: 90,
    time: 60,
  },
  {
    id: 4,
    title: "Makijaż ślubny próbny",
    subtitle:
      "W tym: konsultacja makijażowa, aplikacja kępek rzęs, utrwalenie makijażu",
    description: `
      <p>
        Spotkanie, podczas którego wspólnie zaplanujemy idealny makijaż ślubny. Analizujemy Twoje rysy twarzy, preferencje kolorystyczne oraz styl całej uroczystości. 
        Omawiamy pielęgnację skóry oraz wybieramy najlepsze rozwiązania kosmetyczne.
      </p>
      <p>
        W trakcie próby wykonuję pełen makijaż ślubny wraz z rzęsami i jego utrwaleniem, abyś mogła poczuć się jak w dniu ślubu i sprawdzić, czy wszystko spełnia Twoje oczekiwania.
      </p>
    `,
    image: { url: "/img/makijaz-slubny.jpg", alt: "" },
    icon: "makeup",
    price: 200,
    promotionPrice: 90,
    time: 60,
  },
  {
    id: 5,
    title: "Makijaż wieczorowy",
    subtitle: "Idealny na imprezy, bale, randki",
    description: `
      <p>
        Makijaż z efektem “wow” – idealny na wyjątkowe okazje, gdy chcesz zabłysnąć i przyciągać spojrzenia. Wyraziste cienie, błysk, konturowanie oraz kępki rzęs tworzą spektakularny efekt glamour.
      </p>
      <p>
        Doskonale sprawdzi się na balach, weselach, randkach czy wieczorach panieńskich. Trwały i odporny, prezentuje się idealnie w świetle dziennym i sztucznym.
      </p>
    `,
    image: { url: "/img/makijaz-wieczorowy.jpg", alt: "" },
    icon: "makeup",
    price: 190,
    promotionPrice: 90,
    time: 60,
  },
  {
    id: 6,
    title: "Makijaż okolicznościowy",
    subtitle: "Na chrzciny, komunie, urodziny, jubileusze.",
    description: `
      <p>
        Delikatny, elegancki i ponadczasowy makijaż na rodzinne i oficjalne uroczystości. Subtelnie podkreśla urodę, pozostając w harmonii z wydarzeniem oraz strojem.
      </p>
      <p>
        Świetnie prezentuje się na zdjęciach i w świetle dziennym. To idealny wybór na komunie, chrzciny, jubileusze i inne wyjątkowe chwile.
      </p>
    `,
    image: { url: "/img/makijaz-okolicznosciowy.jpg", alt: "" },
    icon: "makeup",
    price: 160,
    promotionPrice: 90,
    time: 60,
  },
  {
    id: 7,
    title: "Makijaż dzienny",
    subtitle: "Lekki, świeży look do pracy lub na co dzień.",
    description: `
      <p>
        Makijaż, który podkreśla Twoją naturalną urodę bez efektu przesady. Czysta, rozświetlona cera, subtelne oko i zdrowy rumieniec – wszystko, czego potrzebujesz na co dzień.
      </p>
      <p>
        Idealny do pracy, na spotkania biznesowe czy luźniejsze wyjścia. Lekki, komfortowy i trwały przez wiele godzin.
      </p>
    `,
    image: { url: "/img/makijaz-okolicznosciowy.jpg", alt: "" },
    icon: "makeup",
    price: 120,
    promotionPrice: 90,
    time: 60,
  },
  {
    id: 8,
    title: "Makijaż do sesji zdjęciowych",
    subtitle: "Dostosowany do światła studyjnego i wymogów fotografa.",
    description: `
      <p>
        Profesjonalny makijaż fotograficzny zaprojektowany z myślą o świetle studyjnym i wysokiej rozdzielczości aparatu. Perfekcyjnie matuje, rozświetla strategiczne miejsca i maskuje wszelkie niedoskonałości.
      </p>
      <p>
        Idealny wybór na sesje portretowe, wizerunkowe, ciążowe, brandingowe czy modowe. Efekt? Zdjęcia bez konieczności dużej obróbki graficznej.
      </p>
    `,
    image: { url: "/img/makijaz-wieczorowy.jpg", alt: "" },
    icon: "makeup",
    price: 200,
    promotionPrice: 90,
    time: 60,
  },
];

export const massages: ServiceVariant[] = [
  {
    id: 9,
    title: " Masaż Kobido – Japoński Rytuał Liftingujący",
    subtitle:
      "Pozwól sobie na chwilę głębokiego relaksu i naturalnego liftingu dzięki masażowi Kobido",
    description: `
<h2>Pozwól sobie na chwilę głębokiego relaksu&nbsp;i naturalnego liftingu dzięki masażowi&nbsp;Kobido</h2>
<p>
  Masaż Kobido to jedna z najstarszych i najbardziej zaawansowanych technik masażu twarzy wywodzących się z Japonii.
  To nie tylko zabieg pielęgnacyjny, ale prawdziwy rytuał piękna, który przywraca skórze blask, jędrność i świeżość.
</p>
<hr />
<h3>🌿 Co zawiera zabieg?</h3>
<ol>
  <li>
    <strong>Rytuał demakijażu z użyciem ciepłego ręcznika</strong><br />
    Delikatne oczyszczenie skóry z resztek makijażu i zanieczyszczeń, wykonane w&nbsp;formie relaksującego rytuału
    z&nbsp;użyciem ciepłego, aromatycznego ręcznika.
  </li>
  <li>
    <strong>Głębokie rozluźnienie mięśni twarzy, szyi i karku</strong><br />
    Pomaga zniwelować napięcia i stres, które mogą wpływać na wygląd i kondycję skóry.
  </li>
  <li>
    <strong>Drenaż limfatyczny</strong><br />
    Stymulacja przepływu limfy w celu redukcji obrzęków, poprawy kolorytu cery i usunięcia toksyn.
  </li>
  <li>
    <strong>Intensywny lifting manualny</strong><br />
    Dynamiczne techniki liftingujące pobudzają krążenie krwi, poprawiają napięcie skóry i kontur twarzy – bez igieł
    i&nbsp;skalpela.
  </li>
  <li>
    <strong>Elementy akupresury i wygładzające techniki wykończeniowe</strong><br />
    Balansują energię, odprężają ciało i umysł, przywracając naturalną harmonię.
  </li>
</ol>
<hr />
<h3>💆‍♀️ Efekty, które pokochasz:</h3>
<ul>
  <li>wygładzona, promienna skóra</li>
  <li>poprawa owalu twarzy</li>
  <li>redukcja napięć i stresu</li>
  <li>naturalny lifting bez ingerencji</li>
</ul>
<p>
  <em>Umów się na swoją japońską podróż ku pięknu – Twoja twarz zasługuje na to, co najlepsze.</em>
</p>
`,
    image: {
      url: "/img/masaz-kobido.jpeg",
      alt: "",
    },
    icon: "kobido",
    price: 190,
    promotionPrice: 150,
    time: 60,
  },
];
