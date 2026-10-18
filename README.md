# Kwartel Studio — website

Statische marketingsite voor **Kwartel Studio**, een AI- en softwarestudio aan De Kwartel 13 in
Laren, die AI-toepassingen en apps bouwt voor mkb-bedrijven in Het Gooi.

Live: [kwartelstudio.nl](https://kwartelstudio.nl) · voorstaging: `kwartelstudio.casadosmoreira.com`

## Stack

- [Astro](https://astro.build) 6, statische output, geen UI-framework
- Eén handgeschreven stylesheet (`src/styles/global.css`), geen Tailwind
- Zelf-gehoste variabele lettertypen via Fontsource (Archivo, Instrument Sans, JetBrains Mono)
- Geen cookies, geen analytics, geen trackers, geen externe requests
- Deployment: Coolify, Dockerfile met nginx

## Ontwerp

Werkplaats-esthetiek: papier, inkt, flessengroen en één markergele stempel. Het
signatuurelement is de **werkbon** — een kaartje met perforatielijn, stempel en vaste velden
(wat / voor wie / doorlooptijd / investering). Prijzen en scope worden daardoor tastbaar.
Bewust géén gradient, glassmorphism, paars, emoji-iconen of stockfoto's.

Tokens staan bovenaan `src/styles/global.css`:

| Token | Waarde | Gebruik |
|---|---|---|
| `--paper` | `#f3f4ef` | achtergrond |
| `--paper-raised` | `#fbfbf7` | kaarten, werkbonnen |
| `--ink` | `#12171a` | tekst |
| `--green` | `#14342b` | CTA's, donkere banden |
| `--mark` | `#f2c230` | stempel, markeerlijn (spaarzaam) |

## Structuur

```
src/
  config.ts              ← alle bedrijfsgegevens, diensten, prijzen, werkgebied
  lib/schema.ts          ← JSON-LD builders (LocalBusiness, Service, FAQ, Article…)
  lib/artikelen.ts       ← metadata kennisbank
  layouts/Base.astro     ← <head>, SEO, OG, JSON-LD, header/footer
  layouts/Artikel.astro  ← artikelsjabloon met FAQ + gerelateerde stukken
  components/            ← Header, Footer, Werkbon, Faq, CtaBand
  pages/                 ← 18 pagina's
  styles/global.css
public/
  llms.txt               ← AEO: samenvatting voor AI-assistenten
  robots.txt             ← expliciete allow voor GPTBot, ClaudeBot, PerplexityBot…
  og.png, favicon.svg, apple-touch-icon.png
```

## Aanpassen

Alle bedrijfsgegevens staan in `src/config.ts`:

- `SITE` — naam, domein, tagline, description
- `CONTACT` — adres, telefoon, e-mail, **`kvk` en `btw`** (leeg = niet getoond in de footer)
- `PRIJS` — bedragen die in tabellen en antwoordblokken terugkomen
- `DIENSTEN` — de drie werkbonnen inclusief eigen FAQ per dienst
- `SECTOREN`, `AREA` — gebruikt op de homepage, contactpagina en in schema

Na het invullen van KvK/BTW: `npm run build` en opnieuw deployen. De footer toont ze automatisch.

## Contactformulier

Het formulier heeft geen backend nodig: het stelt een e-mail op en opent het e-mailprogramma van
de bezoeker (`mailto:`). Wil je berichten liever server-side ontvangen (Web3Forms, Formspark,
Baserow, eigen endpoint), zet dan bij de build:

```bash
PUBLIC_FORM_ENDPOINT="https://api.web3forms.com/submit" npm run build
```

De waarde komt in `data-endpoint` op het formulier; de inline script POST de JSON en valt terug op
`mailto:` als het verzoek faalt. Zonder waarde werkt alleen de mailto-route.

## Lokaal

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # statische build naar dist/
npm run preview   # serveert dist/
```

Let op: Astro 6 vereist Node ≥ 22.12. Op deze machine staat Node 24 onder
`~/.nvm/versions/node/v24.13.0/bin`.

## Afbeeldingen

`public/og.png` (1200×630) en `public/apple-touch-icon.png` zijn gegenereerd met
`scripts/make_og.py` (Pillow + Archivo/Instrument Sans TTF). Opnieuw genereren:

```bash
python3 scripts/make_og.py
```

## Deploy

Live: **https://kwartelstudio.casadosmoreira.com** · Coolify-app `ok3sojaz91rwii7xoawajruk`
(project `Kwartel Studio`, environment `production`).

Push naar `main`, daarna de deploy triggeren (apps aangemaakt via de Coolify public-repo API
hebben géén GitHub-webhook):

```bash
set -a; . ~/.hermes/.env; set +a
curl -s -X POST -H "Authorization: Bearer $COOLIFY_TOKEN" \
  "$COOLIFY_URL/api/v1/deploy?uuid=ok3sojaz91rwii7xoawajruk&force=false"
```

Wacht ~60 seconden en controleer:

```bash
curl -sI https://kwartelstudio.casadosmoreira.com/ | head -3
curl -s https://kwartelstudio.casadosmoreira.com/llms.txt | head -5
```

### Coolify API-gotchas (4.2, oktober 2026)

- `POST /api/v1/applications/public` **weigert `fqdn`** (`422 This field is not allowed`) en
  vereist naast `environment_name` ook **`environment_uuid`** (uit
  `GET /api/v1/projects/<project_uuid>/environments`).
- Domeinen zet je achteraf met `PATCH /api/v1/applications/<uuid>` en het veld **`domains`**
  (komma-gescheiden string). Daarna is een **tweede deploy** nodig, anders blijven de
  Traefik-labels op het auto-gegenereerde `<uuid>.casadosmoreira.com` staan: het eigen domein
  geeft dan `404` op http en een self-signed certificaat op https.
- `GET /api/v1/servers` kan traag zijn; gebruik een timeout van 60–90s.

### Productiedomein

Het domein `kwartelstudio.nl` (+ `www`) staat al op de app. Zodra de DNS A-records naar
`152.53.123.24` wijzen, uitgeeft Coolify automatisch het certificaat. Geen codewijziging nodig.

## SEO / AEO-checklist (staat aan)

- [x] Unieke `title` (≤ 60 tekens) en `meta description` per pagina
- [x] Canonieke URL's met trailing slash, sitemap-index via `@astrojs/sitemap`
- [x] JSON-LD: `ProfessionalService`/`LocalBusiness` met adres, geo, openingstijden, `areaServed`
- [x] `Service` + `Offer` per dienst, `FAQPage` op home/prijzen/diensten/artikelen
- [x] `Article` met `datePublished`/`dateModified` op de kennisbank
- [x] `BreadcrumbList` op alle binnenpagina's
- [x] Antwoord-eerst blokken (`answer-box`) boven elk lang artikel
- [x] Vraaggestuurde H2's, tabellen met feiten, heldere definities
- [x] `llms.txt` + expliciete allow in `robots.txt` voor AI-crawlers
- [x] Semantische HTML: één H1, `<main>`, `<article>`, `<nav aria-label>`, skip-link
- [x] Geen client-side JavaScript nodig voor navigatie of FAQ (`<details>`)

## Nog te doen (eigenaar)

- [ ] Domein `kwartelstudio.nl` registreren (gecontroleerd: vrij op 18-10-2026)
- [ ] E-mail `info@kwartelstudio.nl` aanmaken en forwarding naar de eigen inbox
- [ ] KvK-inschrijving, daarna `CONTACT.kvk` invullen
- [ ] Google Business Profile + Search Console + sitemap indienen
- [ ] Formulier-endpoint kiezen (Web3Forms/Formspark) of eigen mailservice
