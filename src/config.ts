/**
 * Eén bron van waarheid voor alle bedrijfsgegevens.
 * Pas hier aan, niet in de pagina's.
 */

export const SITE = {
  name: 'Kwartel Studio',
  legalName: 'Kwartel Studio',
  domain: 'kwartelstudio.nl',
  url: 'https://kwartelstudio.nl',
  tagline: 'AI voor bedrijven die geen AI-bedrijf zijn',
  description:
    'Kwartel Studio bouwt AI-toepassingen en apps voor mkb-bedrijven in Het Gooi. Eén proces geautomatiseerd, vaste prijs, live in vier tot acht weken. De code en data blijven van jou.',
  founded: '2026',
  locale: 'nl-NL',
};

export const CONTACT = {
  street: 'De Kwartel 13',
  postcode: '1251 RX',
  city: 'Laren',
  region: 'Noord-Holland',
  country: 'NL',
  phone: '+31 6 31683221',
  phoneHref: 'tel:+31631683221',
  email: 'info@kwartelstudio.nl',
  // Zet dit pas als de inschrijving bij de KvK rond is. Leeg = niet tonen.
  kvk: '',
  btw: '',
  responseTime: 'binnen één werkdag',
};

export const GEO = { lat: 52.2567, lon: 5.2264 };

/** Het servicegebied: eerst Het Gooi, daarna de rest van NL. */
export const AREA = [
  'Laren', 'Blaricum', 'Hilversum', 'Bussum', 'Naarden', 'Huizen',
  'Eemnes', 'Loosdrecht', "’s-Graveland", 'Muiden', 'Weesp', 'Baarn', 'Amersfoort', 'Utrecht',
];

export const PRIJS = {
  gesprek: 'gratis',
  scan: '€ 750',
  pilot: 'vanaf € 3.950',
  implementatie: 'vanaf € 6.500',
  app: 'vanaf € 9.500',
  onderhoud: 'vanaf € 195',
  uur: '€ 95',
};

export type Dienst = {
  slug: string;
  code: string;
  titel: string;
  kort: string;
  voorWie: string;
  doorlooptijd: string;
  investering: string;
  intro: string;
  bouwstenen: { titel: string; tekst: string }[];
  oplevert: string[];
  niet: string[];
  faq: { q: string; a: string }[];
};

export const DIENSTEN: Dienst[] = [
  {
    slug: 'ai-implementatie',
    code: 'KW-01',
    titel: 'AI-implementatie',
    kort: 'Eén proces uit je bedrijf, overgenomen door software die meedenkt. Offertes, e-mails, orders, planning, dossiers.',
    voorWie: 'mkb met veel handwerk in de administratie',
    doorlooptijd: '4–6 weken',
    investering: 'vanaf € 3.950',
    intro:
      'Je hebt geen AI-strategie nodig. Je hebt één proces nodig dat stopt met handwerk zijn. Wij zoeken het duurste uur van je week op en bouwen daar een werkende toepassing omheen: een assistent die offertes opstelt uit je eigen prijslijst, een tool die inkoopfacturen leest en wegzet, of een agent die veelgestelde klantvragen afhandelt met jouw informatie.',
    bouwstenen: [
      { titel: 'Kansenkaart', tekst: 'We lopen drie processen door, rekenen de uren uit en kiezen de plek met de hoogste opbrengst per euro.' },
      { titel: 'Pilot op echte data', tekst: 'Geen demo met voorbeeldbestanden. Een werkend prototype op jouw gegevens, binnen twee weken.' },
      { titel: 'Koppelingen', tekst: 'Naar wat je al gebruikt: Exact, Moneybird, AFAS, Outlook, Google Workspace, je website, je boekhouding.' },
      { titel: 'Instructie en overdracht', tekst: 'Je team leert het in een half uur. Documentatie en code gaan mee naar jou.' },
    ],
    oplevert: [
      'Uren terug per week, meetbaar in plaats van beloofd',
      'Minder fouten bij overtypen en zoeken',
      'Een werkende toepassing in productie, niet een rapport',
    ],
    niet: [
      'Geen model dat je zelf moet trainen',
      'Geen dashboard dat niemand opent',
      'Geen abonnement dat je vastzet',
    ],
    faq: [
      {
        q: 'Moet ik al iets van AI weten?',
        a: 'Nee. Wij regelen de techniek en leggen in gewone taal uit wat het doet, wat het kost per maand en waar het misgaat. Je hoeft geen prompt te leren schrijven.',
      },
      {
        q: 'Wat als het niet werkt?',
        a: 'Dan stoppen we bij de pilot. Je verliest dan alleen de pilotprijs, geen volledig project. Wij zeggen liever in week twee dat het niet kan, dan in maand vier.',
      },
      {
        q: 'Waar staan mijn gegevens?',
        a: 'Standaard op Europese servers, met een verwerkersovereenkomst. Voor gevoelige dossiers werken we met een model dat binnen onze eigen omgeving draait, zodat er geen data naar een Amerikaanse leverancier gaat.',
      },
    ],
  },
  {
    slug: 'app-ontwikkeling',
    code: 'KW-02',
    titel: 'App-ontwikkeling',
    kort: 'Een portaal, planningsapp of interne tool die precies doet wat jouw bedrijf nodig heeft. Zonder bureau-prijskaartje.',
    voorWie: 'bedrijven die vastlopen in Excel en losse tools',
    doorlooptijd: '6–12 weken',
    investering: 'vanaf € 9.500',
    intro:
      'Soms is de oplossing geen AI maar gewoon een goede applicatie: een portaal waar je klanten zelf hun order, dossier of planning zien. Een app waarmee je monteurs buiten kantoor hun werkbonnen invullen. Een intern systeem dat doet wat je nodig hebt zonder de opties die je nooit gebruikt.',
    bouwstenen: [
      { titel: 'Werksessie van een dag', tekst: 'We schetsen de schermen op papier, met de mensen die het gaan gebruiken. Daarna bouwen we pas.' },
      { titel: 'Werkend eerste scherm', tekst: 'Binnen twee weken staat het belangrijkste scherm live, zodat je vroeg kunt bijsturen.' },
      { titel: 'Koppelingen en inloggen', tekst: 'Eén login voor je team, rechten per rol, koppeling met je boekhouding of voorraad.' },
      { titel: 'Opleiding en beheer', tekst: 'Uitleg op locatie, een korte handleiding, en daarna maandelijks onderhoud.' },
    ],
    oplevert: [
      'Klanten die zelf zaken regelen, zonder te bellen',
      'Monteurs en adviseurs die buiten kantoor kunnen werken',
      'Eén systeem in plaats van vijf spreadsheets',
    ],
    niet: [
      'Geen maatwerk waar een standaardtool volstaat — dat zeggen we vooraf',
      'Geen licentie per gebruiker die blijft oplopen',
      'Geen leverancier die je tegenhoudt als je wilt stoppen',
    ],
    faq: [
      {
        q: 'Is een app niet duur?',
        a: 'Bij grote bureaus wel: daar betaal je vaak € 40.000 of meer voor een eerste versie. Wij houden de scope klein, werken in korte rondes en beginnen rond € 9.500 voor een eerste werkende versie.',
      },
      {
        q: 'Moet het in de App Store?',
        a: 'Meestal niet. Negen van de tien keer is een webapp genoeg: werkt op telefoon, tablet en laptop, geen goedkeuring nodig, direct te updaten.',
      },
      {
        q: 'Wie is de eigenaar van de code?',
        a: 'Jij. Bij oplevering krijg je de repository, de documentatie en de hostingtoegang. Wij blijven graag je beheerpartner, maar je zit niet vast.',
      },
    ],
  },
  {
    slug: 'onderhoud-en-beheer',
    code: 'KW-03',
    titel: 'Onderhoud & beheer',
    kort: 'Wij houden het draaiend, lossen storingen op en bouwen door. Per maand opzegbaar, zonder verrassingen.',
    voorWie: 'iedereen met software die jaren mee moet',
    doorlooptijd: 'maandelijks',
    investering: 'vanaf € 195 per maand',
    intro:
      'Software is geen gebouw: het blijft veranderen. Koppelingen wijzigen, modellen worden bijgewerkt, browsers vernieuwen zich. Wij zorgen dat wat we bouwden blijft werken, en we gebruiken de uren die overblijven om kleine verbeteringen door te voeren die je zelf nooit aanvraagt.',
    bouwstenen: [
      { titel: 'Monitoring', tekst: 'We zien een storing voordat je team erover belt. Bij kritieke fouten ingrijpen binnen kantooruren.' },
      { titel: 'Updates', tekst: 'Beveiligingsupdates en modelwissels, getest op een kopie voordat ze live gaan.' },
      { titel: 'Klein onderhoud', tekst: 'Een veld erbij, een e-mail anders opgemaakt, een rapport extra. Binnen je urenbudget.' },
      { titel: 'Kwartaalgesprek', tekst: 'Elk kwartaal een half uur: wat werkt, wat irriteert, wat bouwen we hierna.' },
    ],
    oplevert: [
      'Geen verrassingen en geen stilstand',
      'Doorontwikkeling zonder nieuwe aanbesteding',
      'Eén aanspreekpunt dat je systeem kent',
    ],
    niet: [
      'Geen jaarcontract met automatische verlenging',
      'Geen doorbelaste uren zonder overleg',
      'Geen ticketnummer in plaats van een mens',
    ],
    faq: [
      {
        q: 'Kan ik maandelijks opzeggen?',
        a: 'Ja. Onderhoud is maandelijks opzegbaar met één maand opzegtermijn. Wij geloven niet in meerjarige contracten om software in leven te houden.',
      },
      {
        q: 'Wat als ik meer uren nodig heb?',
        a: 'Dan zeg je het, en doen we het. Boven je bundel rekenen we € 95 per uur, altijd pas na je akkoord op de schatting.',
      },
      {
        q: 'Nemen jullie ook bestaande software over?',
        a: 'Soms. Als de code leesbaar en de hosting toegankelijk is, kunnen we het beheer overnemen. We kijken er eerst een dag naar en zeggen eerlijk of het verstandig is.',
      },
    ],
  },
];

export const SECTOREN = [
  {
    naam: 'Horeca & hotels',
    voorbeeld: 'Reserveringen, menukaarten in vier talen, reviewreacties en inkoop op basis van bonnen.',
    build: 'WhatsApp-reserveringen die automatisch in je agenda belanden, met een bevestiging in de taal van de gast.',
  },
  {
    naam: 'Zorg & praktijken',
    voorbeeld: 'Intake, herinneringen, no-shows en dossierverslaglegging volgens de richtlijnen.',
    build: 'Een intake-assistent die de juiste vragen stelt, het verslag voorbereidt en de agenda vult.',
  },
  {
    naam: 'Bouw & installatie',
    voorbeeld: 'Offertes uit foto’s en spraaknotities, materiaallijsten, planning van monteurs.',
    build: 'Van foto en ingesproken notitie naar een offerte in je eigen huisstijl, binnen tien minuten.',
  },
  {
    naam: 'Retail & groothandel',
    voorbeeld: 'Voorraadvoorspelling, productteksten, stapelkortingen en orderinvoer per e-mail.',
    build: 'Inkooporders en orderbevestigingen die automatisch worden uitgelezen en in je systeem gezet.',
  },
  {
    naam: 'Zakelijke dienstverlening',
    voorbeeld: 'Documentverwerking, dossiersamenvattingen, declaraties en kennis zoeken in eigen archief.',
    build: 'Een assistent die vragen beantwoordt op basis van je eigen contracten, met bronvermelding.',
  },
  {
    naam: 'Makelaardij & vastgoed',
    voorbeeld: 'Woningteksten, bezichtigingen plannen, vragen van kopers afvangen.',
    build: 'Van foto’s en kenmerken naar een complete woningtekst in drie talen.',
  },
];
