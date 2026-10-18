import { SITE, CONTACT, GEO, AREA, DIENSTEN, PRIJS } from '../config';

const ORG_ID = `${SITE.url}/#organisatie`;
const WEBSITE_ID = `${SITE.url}/#website`;

export function organisation() {
  return {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.tagline,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Factuur, bankoverschrijving',
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.street,
      postalCode: CONTACT.postcode,
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.region,
      addressCountry: CONTACT.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: GEO.lat,
      longitude: GEO.lon,
    },
    areaServed: AREA.map((plaats) => ({ '@type': 'City', name: plaats })),
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    knowsAbout: [
      'AI-implementatie',
      'procesautomatisering',
      'app-ontwikkeling',
      'large language models',
      'AVG',
      'koppelingen met boekhoudsoftware',
      'onderhoud van software',
    ],
    makesOffer: DIENSTEN.map((d) => ({
      '@type': 'Offer',
      name: d.titel,
      description: d.kort,
      url: `${SITE.url}/diensten/${d.slug}/`,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'EUR',
        description: d.investering,
      },
    })),
  };
}

export function website() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: 'nl-NL',
    publisher: { '@id': ORG_ID },
  };
}

export function webPage(path: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE.url}${path}#pagina`,
    url: `${SITE.url}${path}`,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'nl-NL',
  };
}

export function dienstSchema(slug: string) {
  const d = DIENSTEN.find((x) => x.slug === slug);
  if (!d) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: d.titel,
    serviceType: d.titel,
    description: d.kort,
    url: `${SITE.url}/diensten/${d.slug}/`,
    provider: { '@id': ORG_ID },
    areaServed: AREA.map((plaats) => ({ '@type': 'City', name: plaats })),
    audience: { '@type': 'BusinessAudience', name: 'mkb-bedrijven in Het Gooi' },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      description: d.investering,
      availability: 'https://schema.org/InStock',
    },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumbSchema(items: { naam: string; pad: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((i, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: i.naam,
      item: `${SITE.url}${i.pad}`,
    })),
  };
}

export function artikelSchema(post: {
  titel: string;
  omschrijving: string;
  pad: string;
  datum: string;
  gewijzigd?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.titel,
    description: post.omschrijving,
    url: `${SITE.url}${post.pad}`,
    datePublished: post.datum,
    dateModified: post.gewijzigd ?? post.datum,
    inLanguage: 'nl-NL',
    author: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name },
    publisher: { '@id': ORG_ID, '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `${SITE.url}${post.pad}`,
    isAccessibleForFree: true,
  };
}

export function prijsSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'Tarieven Kwartel Studio',
    url: `${SITE.url}/prijzen/`,
    provider: { '@id': ORG_ID },
    itemListElement: [
      { naam: 'Kennismaking', prijs: '0', beschrijving: 'Gesprek van 30 minuten, vrijblijvend' },
      { naam: 'Kansenkaart', prijs: '750', beschrijving: 'Procesanalyse met businesscase, wordt verrekend bij opdracht' },
      { naam: 'Instap-automatisering', prijs: '1950', beschrijving: `Vanaf ${PRIJS.instap}, één taak in twee weken, zonder koppelingen` },
      { naam: 'AI-pilot', prijs: '3950', beschrijving: `Vanaf ${PRIJS.pilot}, één proces live in vier weken` },
      { naam: 'AI-implementatie', prijs: '6500', beschrijving: `Vanaf ${PRIJS.implementatie}, meerdere processen en koppelingen` },
      { naam: 'App of portaal', prijs: '9500', beschrijving: `Vanaf ${PRIJS.app}, eerste werkende versie` },
      { naam: 'Onderhoud', prijs: '195', beschrijving: `Vanaf ${PRIJS.onderhoud} per maand, maandelijks opzegbaar` },
    ].map((i) => ({
      '@type': 'Offer',
      name: i.naam,
      description: i.beschrijving,
      price: i.prijs,
      priceCurrency: 'EUR',
    })),
  };
}
