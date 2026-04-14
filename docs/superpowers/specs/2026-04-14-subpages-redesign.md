# Enable Flow — Sub-pagina's Redesign Spec
**Datum:** 2026-04-14
**Status:** Goedgekeurd door René

---

## Context

De homepage is volledig opnieuw ontworpen (zie spec `2026-04-13-homepage-redesign.md`). De vijf sub-pagina's gebruiken nog het oude design: `sky-50` gradient achtergronden, teal/violet kleurschema, animated blobs, en generieke copy. Dit redesign brengt alle pagina's in lijn met het nieuwe design system en verbetert de content waar nodig.

**Pagina's in scope:**
- `/over-mij` — `AboutPage.tsx`
- `/diensten` — `DienstenPage.tsx`
- `/use-cases` — `UseCasesPage.tsx`
- `/scan` — `ScanPage.tsx`
- `/contact` — `ContactPage.tsx`

**Buiten scope:** Forms (`ScanForm.tsx`, `ContactForm.tsx`) blijven ongewijzigd.

---

## Design System (zelfde als homepage)

- **Font:** Inter, 900 headlines, −0.04em letter-spacing
- **Primaire kleur:** Emerald-600 `#059669` / Emerald-500 `#10b981`
- **Achtergronden:** Wit `#ffffff` of lichtgrijs `#f8f9fa` — geen sky-gradiënten
- **Headlines:** `#0d0d0d`, body: `#555555`
- **CTA primair:** `linear-gradient(135deg, #059669, #10b981)`, `box-shadow: 0 4px 18px rgba(16,185,129,0.35)`
- **Kaarten:** `border-radius: 16–20px`, `border: 1px solid <kleur-200>`, `background: <kleur-50>`
- **Animated blobs:** verwijderen op alle pagina's

**Hergebruik bestaande componenten:**
- `<CTASection />` — afsluiting op elke pagina
- `<ProcessSection />` — op DienstenPage
- `<Services />` — data-array hergebruiken voor DienstenPage pricing

---

## Pagina 1: `/over-mij` — `AboutPage.tsx`

### Secties

**01 — Hero**
- Layout: twee kolommen — foto links, tekst rechts
- Foto: `/images/rene-profile.jpeg`, `rounded-2xl`, emerald `ring-4 ring-emerald-100`
- Naamkaartje onder foto: naam, functie, telefoon + LinkedIn (emerald hover accenten)
- Eyebrow: `OVER MIJ` (uppercase label, emerald)
- Koptekst: **"Ik help Noord-Nederlandse bedrijven de AI-slag maken."**
- Intro-paragraaf (René's motivatie): *"AI-ontwikkelingen gaan sneller dan ooit. Bedrijven die dat nu omarmen, krijgen een voorsprong die tot voor kort simpelweg niet mogelijk was. Ik zag die kans — en besloot Noord-Nederlandse bedrijven te helpen hem concreet te pakken."*
- Tweede alinea: beschrijft wat René doet (van Microsoft Copilot tot n8n, hands-on implementatie)
- Achtergrond: wit, geen blobs

**02 — Werkwijze (3 waarden-kaarten)**
- Koptekst: "Mijn aanpak"
- 3 kaarten met emerald border-left accent:
  1. **Eerlijk & nuchter** — Ik vertel wat AI wél kan doen, maar ook wat niet. Geen beloftes die ik niet waar kan maken.
  2. **Lokaal & persoonlijk** — Ik kom gewoon bij je langs. Noord-Nederland is mijn werkgebied — geen gezichtsloze consultancy uit de Randstad.
  3. **Hands-on & praktisch** — Niet alleen advies, maar ook echt implementeren. Van installatie tot training — van A tot Z.
- Achtergrond: `slate-50`
- Kaart-stijl: `border-l-4 border-emerald-400`, emerald check-icoon

**03 — Wat ik doe (3 competentie-kaarten)**
- Koptekst: "Wat ik voor je doe"
- Subtitel: "Van analyse tot implementatie en training."
- 3 kaarten (grid 3 kolommen):
  1. **Werkprocessen doorgronden** — emerald icoon
  2. **AI-tools implementeren** — emerald icoon
  3. **Teams begeleiden & trainen** — emerald icoon
- Achtergrond: wit

**04 — Afsluiting**
- Hergebruik `<CTASection />`

---

## Pagina 2: `/diensten` — `DienstenPage.tsx`

### Secties

**01 — Hero**
- Koptekst: **"Van scan naar automatisering in 3 stappen."**
- Subtitel: *"Geen langlopende trajecten. Geen vage rapporten. Jouw eerste AI-automatisering is live binnen 2 weken."*
- Achtergrond: wit
- Eyebrow: `DIENSTEN & PRIJZEN`

**02 — Pricing kaarten (3 stuks)**
- Zelfde visuele stijl als de nieuwe `Services.tsx` (emerald highlight, schaal-effect, resultaat-first copy)
- **Niet** dezelfde component hergebruiken — DienstenPage heeft meer feature-bullets en andere CTA-teksten
- Result-first copy per kaart:
  - Quickscan €395: *"Weet binnen een week waar AI jou tijd bespaart."*
  - AI Starter €995: *"Jouw eerste automatisering live in 2 weken."* (emerald highlight, ⭐ Meest gekozen)
  - AI Partnership €495/mnd: *"Continue AI-begeleiding terwijl je bedrijf groeit."*
- Subsidie footnote: één regel onder de kaarten

**03 — Hoe het werkt**
- Hergebruik `<ProcessSection />`

**04 — Veelgestelde vragen (diensten-specifiek)**
- 3 accordion-vragen specifiek over de diensten:
  1. *"Moet ik al Microsoft 365 of andere tools hebben?"* — Nee, René bekijkt samen met je welke tools passen. Soms zijn bestaande tools al voldoende.
  2. *"Wat als de automatisering niet oplevert wat ik verwacht?"* — We starten altijd met een scan. Als de kansen er niet zijn, zeggen we dat eerlijk — zonder verdere verplichting.
  3. *"Kan ik stoppen wanneer ik wil?"* — Ja. Het Partnership is maandelijks opzegbaar. De Quickscan en AI Starter zijn éénmalige trajecten zonder doorlopende verplichting.
- Stijl: zelfde accordion als homepage FAQ

**05 — Afsluiting**
- Hergebruik `<CTASection />`

---

## Pagina 3: `/use-cases` — `UseCasesPage.tsx`

### Aanpak

De huidige industrie-indeling (Sales, Customer Service, HR, Operations) vervalt volledig. Vervangen door taaktype-indeling: herkenbaar voor elke MKB-medewerker, ongeacht branche.

### Secties

**01 — Hero**
- Koptekst: **"Wat wij voor jouw team automatiseren."**
- Subtitel: *"Concrete toepassingen met meetbare tijdsbesparing — geen theorie, maar resultaten die je morgen al kunt inzetten."*
- Eyebrow: `USE CASES`
- Achtergrond: wit

**02 — 4 taaktype-secties**

Elke sectie: koptekst + subtitel + grid van use case kaarten.

Kaart-opbouw: toolnaam badge, naam, beschrijving, tijdsbesparing badge (emerald).

**Communicatie automatiseren**
Subtitel: *"Stop met handmatig schrijven — laat AI de concepten maken."*
| Naam | Tool | Besparing |
|------|------|-----------|
| E-mail drafting | Microsoft Copilot | −3u/week |
| Vergadernotities | Teams Copilot | −2u/week |
| Klantcommunicatie | ChatGPT / Claude | −2u/week |

**Data & rapportage**
Subtitel: *"Van ruwe data naar bruikbaar inzicht, zonder formule-kennis."*
| Naam | Tool | Besparing |
|------|------|-----------|
| Excel-analyses | Copilot + Excel | −1.5u/week |
| Voortgangsrapportages | Copilot + Word | −1u/week |
| Klantinzichten | Claude / ChatGPT | −1.5u/week |

**Documenten & content**
Subtitel: *"Professionele documenten in minuten, in jouw eigen stijl."*
| Naam | Tool | Besparing |
|------|------|-----------|
| Presentaties | PowerPoint + AI | −2u/week |
| Offertes & voorstellen | Word + AI | −1.5u/week |
| Handleidingen & procedures | ChatGPT / Copilot | −1u/week |

**Processen verbinden**
Subtitel: *"Zet repetitief werk op de automatische piloot."*
| Naam | Tool | Besparing |
|------|------|-----------|
| CRM-koppelingen | n8n + AI | −3u/week |
| Automatische triggers | n8n + Make | −2u/week |
| Factuurverwerking | n8n + AI | −1.5u/week |

**03 — "Niet gevonden wat je zoekt?"**
- Smalle callout-balk (emerald-50 achtergrond, emerald border)
- Tekst: *"Elke organisatie heeft unieke processen. René kijkt graag mee wat er bij jou mogelijk is."*
- CTA: "Plan een gratis scan →" → `/scan`

**04 — Afsluiting**
- Hergebruik `<CTASection />`

---

## Pagina 4: `/scan` — `ScanPage.tsx`

### Secties

**01 — Hero**
- Koptekst: **"Ontdek in 10 minuten wat AI voor jouw bedrijf kan doen."**
- Subtitel: *"Je krijgt direct je score, top 3 kansen en een indicatieve ROI-berekening. René neemt het daarna persoonlijk met je door."*
- 3 benefit-boxen (emerald iconen):
  - AI Readiness Score
  - Top 3 kansen
  - Indicatieve ROI
- Achtergrond: wit (sky-gradient weg)

**02 — Formulier**
- `<ScanForm />` ongewijzigd

---

## Pagina 5: `/contact` — `ContactPage.tsx`

### Secties

**01 — Hero**
- Koptekst: **"Plan een gratis gesprek met René."**
- Subtitel: *"30 minuten die direct waarde opleveren. Op locatie of online — geen verkooppraatje, maar een eerlijk gesprek over wat AI voor jóuw bedrijf kan doen."*
- 3 stats (emerald accenten):
  - `24u` — Reactietijd
  - `Gratis` — Altijd vrijblijvend
  - `Op locatie` — Noord-Nederland
- Achtergrond: wit

**02 — Formulier**
- `<ContactForm defaultTab="consult" />` ongewijzigd

**03 — Direct contact**
- 3 kaarten: E-mail, Telefoon, LinkedIn
- Emerald icoon-achtergronden (ipv teal/violet)
- Donkere achtergrond blijft

---

## Technische aanpak

### Hergebruik
- `<CTASection />` — importeren op alle 5 pagina's als afsluiting
- `<ProcessSection />` — op DienstenPage (al bijgewerkt)
- Services data array uit `Services.tsx` — hergebruiken in DienstenPage

### Verwijderen
- Alle `animate-floatblob` / inline blob SVGs
- Alle `bg-gradient-to-b from-sky-50` achtergronden
- Alle `text-teal-600`, `border-teal-400`, `bg-teal-*` → vervangen door emerald equivalenten
- `rounded-full` CTA-knoppen → `rounded-[10px]` met nieuwe primaire knop-stijl

### Max-width consistentie
- Alle sectie-containers: `max-w-6xl mx-auto px-6` (consistent met homepage)
- Geen mixed `max-w-5xl` / `max-w-7xl` meer

### Gewijzigde bestanden
- `src/pages/AboutPage.tsx` — volledig herschrijven
- `src/pages/DienstenPage.tsx` — volledig herschrijven
- `src/pages/UseCasesPage.tsx` — volledig herschrijven
- `src/pages/ScanPage.tsx` — update hero + kleuren
- `src/pages/ContactPage.tsx` — update hero + kleuren

---

## Verificatie

1. `npm run dev` → alle 5 pagina's visueel controleren
2. Geen teal/violet kleuren meer zichtbaar
3. `<CTASection>` aanwezig op elke pagina
4. `/use-cases` toont 4 taaktype-secties (geen industrie-indeling meer)
5. Responsive: 375px, 768px, 1280px
6. `npm run build` → geen TypeScript errors
7. `npm run test` → alle bestaande tests groen
