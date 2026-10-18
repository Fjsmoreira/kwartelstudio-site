export type Artikel = {
  slug: string;
  titel: string;
  vraag: string;
  omschrijving: string;
  datum: string;
  gewijzigd: string;
  leestijd: number;
  onderwerp: string;
};

export const ARTIKELEN: Artikel[] = [
  {
    slug: 'wat-kost-ai-implementatie-mkb',
    titel: 'Wat kost AI-implementatie voor een mkb-bedrijf?',
    vraag: 'Wat kost AI-implementatie voor een mkb-bedrijf?',
    omschrijving:
      'Prijzen voor AI-implementatie in het mkb: wat een pilot kost, wat een volledige implementatie kost, welke kosten er los bij komen en hoe je het klein houdt.',
    datum: '2026-10-18',
    gewijzigd: '2026-10-18',
    leestijd: 7,
    onderwerp: 'Prijzen',
  },
  {
    slug: 'ai-en-de-avg',
    titel: 'AI en de AVG: wat mag je als mkb-bedrijf wel en niet?',
    vraag: 'Mag je als mkb-bedrijf AI gebruiken met persoonsgegevens onder de AVG?',
    omschrijving:
      'Praktische uitleg over AI en de AVG: grondslag, verwerkersovereenkomst, doorgifte buiten de EU, DPIA en wat de AI Act betekent voor kleine bedrijven.',
    datum: '2026-10-18',
    gewijzigd: '2026-10-18',
    leestijd: 9,
    onderwerp: 'Privacy',
  },
  {
    slug: 'vijf-ai-toepassingen-terugverdienen',
    titel: 'Vijf AI-toepassingen die zich binnen drie maanden terugverdienen',
    vraag: 'Welke AI-toepassingen verdienen zich snel terug in een mkb-bedrijf?',
    omschrijving:
      'Vijf concrete AI-toepassingen voor het mkb met een realistische terugverdientijd: orderinvoer, offertes, klantvragen, verslaglegging en planning.',
    datum: '2026-10-18',
    gewijzigd: '2026-10-18',
    leestijd: 8,
    onderwerp: 'Toepassingen',
  },
  {
    slug: 'chatbot-assistent-agent-verschil',
    titel: 'Chatbot, assistent of agent: wat heb je echt nodig?',
    vraag: 'Wat is het verschil tussen een chatbot, een AI-assistent en een AI-agent?',
    omschrijving:
      'Het verschil tussen een chatbot, een assistent en een agent, met per vorm wat het kost, wat het risico is en wanneer het voor een mkb-bedrijf zin heeft.',
    datum: '2026-10-18',
    gewijzigd: '2026-10-18',
    leestijd: 6,
    onderwerp: 'Begrippen',
  },
];
