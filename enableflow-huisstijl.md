# EnableFlow AI — Huisstijl Handboek

**Versie 1.1 | Maart 2026**  
*Dit handboek beschrijft de visuele identiteit en communicatiestijl van EnableFlow AI. Gebruik het als leidraad voor website, social media, presentaties, en alle andere communicatiemiddelen.*

---

## Inhoudsopgave

1. [Merkidentiteit & Positionering](#1-merkidentiteit--positionering)
2. [Logo & Woordmerk](#2-logo--woordmerk)
3. [Kleurenpalet](#3-kleurenpalet)
4. [Typografie](#4-typografie)
5. [Beeldtaal & Iconen](#5-beeldtaal--iconen)
6. [Tone of Voice](#6-tone-of-voice)
7. [Componenten & UI-stijl](#7-componenten--ui-stijl)
8. [Toepassing per medium](#8-toepassing-per-medium)
9. [Onregelmatigheden & verbeterpunten website](#9-onregelmatigheden--verbeterpunten-website)

---

## 1. Merkidentiteit & Positionering

### Missie
Slimmer werken met AI voor Noord-Nederlandse ondernemers — praktisch, nuchter en resultaatgericht.

### Tagline / Hero H1
**"Laat AI het zware werk doen."**

### Sectorlabel (boven de H1)
**"AI Consultancy voor MKB"**

### Kernwaarden

| Waarde | Omschrijving |
|--------|-------------|
| **Praktisch** | Geen technologiehype, maar concrete resultaten voor jouw bedrijf |
| **Lokaal** | Noord-Nederland, we komen langs — persoonlijk contact |
| **Nuchter** | Eerlijk over wat AI wel én niet kan |
| **Toegankelijk** | Lage drempel, gratis instap (AI Readiness Scan) |

### Doelgroep
MKB-ondernemers in Noord-Nederland die processen willen automatiseren of AI willen implementeren, maar niet weten waar te beginnen.

---

## 2. Logo & Woordmerk

### Naam
**EnableFlow AI**  
*(of kortweg: EnableFlow)*

### Schrijfwijze
- Altijd met hoofdletter E en F: **EnableFlow**
- Met spatie voor AI: **EnableFlow AI**
- Niet: Enableflow, enableflow, ENABLEFLOW

### Logo-principes
Het logo combineert het woordmerk met een visueel element dat beweging en flow uitdrukt. Dit sluit aan bij de merkwaarden "beweging" (enable = mogelijk maken) en "stroom" (flow = soepele processen).

**Gebruik:**
- Gebruik het volledige logo (icoon + tekst) als primaire variant
- Gebruik alleen het woordmerk als ruimte beperkt is
- Minimale breedte logo: 120px digitaal / 3 cm print
- Vrijruimte rondom logo: minimaal gelijk aan de hoogte van de letter E

**Achtergronden:**
- Voorkeur: wit of lichtgrijs (#F8FAFC)
- Donkere achtergrond: gebruik witte versie van het logo
- Nooit logo plaatsen op drukke fotografie zonder achtergrondvak

---

## 3. Kleurenpalet

### Primaire kleuren

| Naam | Hex | RGB | Gebruik |
|------|-----|-----|---------|
| **Teal 500** (Primair) | `#14b8a6` | rgb(20, 184, 166) | Primaire buttons, highlights, links |
| **Teal 600** (Primair Donker) | `#0d9488` | rgb(13, 148, 136) | Hover states, active states |
| **Teal 700** | `#0f766e` | rgb(15, 118, 110) | Tekst op lichte achtergronden |

### Secundaire kleuren

| Naam | Hex | RGB | Gebruik |
|------|-----|-----|---------|
| **Violet 600** (Secundair) | `#7c3aed` | rgb(124, 58, 237) | Uitgelichte diensten, premium accenten |
| **Violet 500** | `#8b5cf6` | rgb(139, 92, 246) | Secundaire iconen, gradients |
| **Cyan 500** (Accent) | `#06b6d4` | rgb(6, 182, 212) | Gradiënten, decoratieve elementen |

### Neutrale kleuren

| Naam | Hex | RGB | Gebruik |
|------|-----|-----|---------|
| **Slate 900** (Tekst hoofd) | `#0f172a` | rgb(15, 23, 42) | Hoofdtekst, koppen |
| **Slate 700** | `#334155` | rgb(51, 65, 85) | Subtekst, secundaire tekst |
| **Slate 500** | `#64748b` | rgb(100, 116, 139) | Placeholder, meta-tekst |
| **Slate 200** | `#e2e8f0` | rgb(226, 232, 240) | Borders, scheidingslijnen |
| **Slate 50** | `#f8fafc` | rgb(248, 250, 252) | Achtergrond secties |
| **Wit** | `#ffffff` | rgb(255, 255, 255) | Kaarten, containers |

### Achtergrond-gradiënten

```
Hero sectie:      from-sky-50 → white  (licht blauw-wit)
Features sectie:  from-slate-50 → cyan-50
Dark sectie:      from-slate-900 (donker blauwgrijs)
Cards highlight:  Violet 400 border + transform scale-105
```

### Functionele kleuren

| Status | Kleur | Hex |
|--------|-------|-----|
| Succes | Groen-800 | `#166534` |
| Fout | Rood-600 | `#dc2626` |
| Waarschuwing | Amber-500 | `#f59e0b` |
| Info | Blauw-500 | `#3b82f6` |

### ⚠️ Kleurgebruik — Do's & Don'ts

**Do:**
- Gebruik Teal als primaire actie-kleur op witte achtergronden
- Gebruik Violet sparingly voor premium/featured content
- Zorg voor voldoende contrast (minimaal 4.5:1 voor body tekst)

**Don't:**
- Gebruik niet meerdere accentkleuren naast elkaar in één sectie
- Gebruik Teal niet als tekstkleur op lichte achtergronden (te weinig contrast)
- Mix Violet en Cyan niet zonder Teal als anker

---

## 4. Typografie

### Lettertypestapel

**Primair lettertype:** Systeem-sans-serif stack  
```
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
             Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
             sans-serif;
```

Dit zorgt voor de best passende en meest leesbare font op elk apparaat, zonder laadtijd.

**Aanbeveling voor consistentie:** Overweeg te migreren naar **Inter** (Google Fonts) als vast lettertype voor alle media. Dit geeft meer controle en consistentie tussen website, presentaties en documenten.

```css
/* Inter importeren */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
font-family: 'Inter', sans-serif;
```

### Typografische schaal

| Element | Grootte | Gewicht | Kleur |
|---------|---------|---------|-------|
| H1 (hero) | 60px / 3.75rem | 700 Bold | Slate-900 of Wit |
| H2 (sectietitel) | 36px / 2.25rem | 700 Bold | Slate-900 |
| H3 (kaart titel) | 24px / 1.5rem | 600 Semibold | Slate-800 |
| H4 | 20px / 1.25rem | 600 Semibold | Slate-800 |
| Body (normaal) | 16px / 1rem | 400 Regular | Slate-700 |
| Body (groot) | 18px / 1.125rem | 400 Regular | Slate-600 |
| Klein / meta | 14px / 0.875rem | 400 Regular | Slate-500 |
| Label / badge | 12px / 0.75rem | 500 Medium | Divers |

### Regelafstand & Letterafstand

```
line-height body:     1.625 (leading-relaxed)
line-height koppen:   1.1-1.2
letter-spacing labels: 0.025-0.05em (tracking-wide / tracking-wider)
```

### Typografie — Do's & Don'ts

**Do:**
- Gebruik Bold (700) voor koppen en CTA's
- Gebruik Medium (500) voor labels en badges
- Gebruik Regular (400) voor broodtekst

**Don't:**
- Gebruik niet meer dan 3 font-gewichten per pagina
- Gebruik niet Light (300) — dat past niet bij de directe, krachtige uitstraling
- Vermijd ALL CAPS behalve bij badges/labels

---

## 5. Beeldtaal & Iconen

### Icoonset

**Bibliotheek:** Lucide Icons (open source, clean line-style)

Kenmerken:
- Lijndikte: consistent 1.5-2px stroke
- Formaten: 20px (inline), 24px (standaard), 32px (features), 48px (hero)
- Kleur: Teal-500 als primair icoonkleur, Violet-500 voor secundaire iconen

**Icoon-achtergrond (in cards):**
- Teal iconen: Teal-100 achtergrond (#ccfbf1), rounded-xl, padding p-3
- Violet iconen: Violet-100 achtergrond (#ede9fe), rounded-xl, padding p-3
- Cyan iconen: Cyan-100 achtergrond, rounded-xl, padding p-3

### Fotografie & Afbeeldingen

**Stijl:**
- Professioneel maar toegankelijk
- Noord-Nederlandse context (bij voorkeur lokale beelden)
- Lichte, heldere composities — geen donkere of dramatische fotografie
- Mensen in actie, werkend met technologie, is de voorkeur

**Wat te vermijden:**
- Stockfoto-clichés (handshakes, mensen met laptops op wazige achtergrond)
- Te abstracte tech-visuals
- Drukke, rommelige achtergronden

### Emoji als inline accent

Naast Lucide Icons worden op de website **emoji sparingly** gebruikt als inline visuele accenten (bijv. ⚡ 💡 🚀 ✓). Dit is toegestaan uitsluitend voor:
- Voordelen-lijsten en bullet-points
- Inline tekst-accenten in korte labels

**Lucide Icons blijven de standaard** voor alle card-iconen, sectie-iconen en navigatie-gerelateerde elementen.

### Decoratieve elementen

De website gebruikt subtiele decoratieve blur-bollen als achtergrond-effect:
- Kleur: Teal of Violet met hoge blur (blur-3xl)
- Opaciteit: 20-30%
- Gebruik: Alleen in hero-secties of grote achtergronden

---

## 6. Tone of Voice

### Persoonlijkheid

EnableFlow AI communiceert als een **nuchter, deskundig adviseur uit het Noorden** — geen opgeblazen marketingtaal, maar directe en eerlijke communicatie.

### Kernprincipes

**Nuchter & direct**
Schrijf zoals een Groninger dat zou zeggen: zonder opsmuk, to-the-point.
- ✅ "AI bespaart je uren per week op rapportages."
- ❌ "Revolutionaire AI-technologie transformeert jouw bedrijfsprocessen naar een nieuw paradigma van efficiëntie."

**Lokaal & betrokken**
Benoem Noord-Nederland, kom naar de klant toe, persoonlijk contact staat centraal.
- ✅ "Wij komen bij je langs in Groningen, Drenthe of Friesland."
- ❌ "Onze cloud-based services zijn overal beschikbaar."

**Eerlijk over AI**
Noem ook de beperkingen. Dat bouwt vertrouwen.
- ✅ "We zijn eerlijk over wat AI wel én niet kan voor jouw bedrijf."
- ❌ "Met AI los je alle problemen op!"

**Toegankelijk & praktisch**
Geen jargon tenzij noodzakelijk — dan altijd uitleggen.
- ✅ "ChatGPT helpt je e-mails sneller schrijven."
- ❌ "LLM-gebaseerde NLP-tooling optimaliseert je communicatieve output."

### Schrijfstijl

- Gebruik **jij/je** (informeel) als standaard — tenzij specifieke context anders vraagt
- Gebruik **actieve zinnen**: "We implementeren" niet "Er wordt geïmplementeerd"
- **Korte alinea's** van max. 3-4 zinnen
- **Concrete getallen** waar mogelijk: "2-4 uur per week bespaard" is beter dan "veel tijdwinst"
- Afsluitingen met een duidelijke call-to-action

### Communicatie per kanaal

| Kanaal | Toon | Lengte |
|--------|------|--------|
| Website | Professioneel-informeel, overtuigend | Beknopt, scanbaar |
| LinkedIn | Informatief, thought leadership | Medium (300-600 woorden) |
| E-mail | Persoonlijk, direct | Kort en helder |
| Presentaties | Overtuigend, visueel ondersteund | Bullet-based |

---

## 7. Componenten & UI-stijl

### Buttons

**Primaire button (Teal)**
```
Achtergrond: bg-teal-600
Tekst: text-white font-semibold
Padding: px-6 py-3
Radius: rounded-lg
Hover: bg-teal-700
```

**Secundaire button (Outline)**
```
Border: border-2 border-teal-600
Tekst: text-teal-600 font-semibold
Achtergrond: transparant
Hover: bg-teal-50
```

**CTA button (Gradient)**
```
Achtergrond: bg-gradient-to-r from-teal-500 to-cyan-500
Tekst: text-white font-bold
Hover: from-teal-400 to-cyan-400
```

### Kaarten (Cards)

**Standaard card:**
```
Achtergrond: bg-white
Border-radius: rounded-2xl
Shadow: shadow-lg
Padding: p-8
Hover: hover:shadow-2xl transition-all duration-300
```

**Uitgelichte card (featured):**
```
Border: border-2 border-violet-400
Transform: md:scale-105
Badge: "⭐ Populair" in violet
```

### Badges & Labels

```
Achtergrond: bg-teal-100 of bg-violet-100
Tekst: text-teal-700 of text-violet-800 font-medium text-sm
Padding: px-3 py-1
Radius: rounded-full
```

### Formuliervelden

```
Border: border border-slate-200
Radius: rounded-lg
Padding: px-4 py-3
Focus: focus:border-teal-400 focus:ring-4 focus:ring-teal-100
Placeholder: text-slate-400
```

### Spacing-systeem

Gebaseerd op Tailwind 4px grid:

| Token | px | Gebruik |
|-------|----|---------|
| 4 | 16px | Kleine spaties, padding small |
| 6 | 24px | Component interne padding |
| 8 | 32px | Sectie-interne ruimte |
| 12 | 48px | Tussen componenten |
| 16 | 64px | Sectie-padding verticaal |
| 20 | 80px | Grote secties |

### Border-radius

| Klasse | px | Gebruik |
|--------|----|---------|
| rounded-lg | 8px | Knoppen, inputs |
| rounded-xl | 12px | Icoon-achtergronden |
| rounded-2xl | 16px | Kaarten, modals |
| rounded-full | 9999px | Badges, avatars |

---

## 8. Toepassing per medium

### Website (Primair)

Stack: React + Tailwind CSS + Vite, gedeployed op Vercel

Secties en hun stijlpatroon (in volgorde op de homepage):

1. **Navbar** — Wit achtergrond, sticky, logo + naam links ("EnableFlow AI"), nav-links rechts, CTA button teal rechts
2. **Hero** — Licht gradient achtergrond, sectorlabel ("AI Consultancy voor MKB") boven de H1, grote H1 ("Laat AI het zware werk doen."), ondertitel slate-600, dubbele CTA-knoppen, 3 statistieken-balkjes eronder (uur/week, gratis, Noord-Nederland)
3. **Aanpak — "Zo werken wij"** — Lichte achtergrond, 3-stappen grid: _Scan & Diagnose_, _Ontwerp & Implementatie_, _Lancering & Groei_; elk met genummerde badge, teal icoon, bulletlijst; CTA onderaan
4. **Voordelen — "Waarom AI implementeren?"** — Twee-koloms layout: links tekst + 3 voordeel-cards (icoon + titel + subtekst), rechts donker paneel "Wat jij ervan merkt" met 3 concrete uitkomsten
5. **USP's — "Waarom kiezen voor ons?"** — 4-koloms icon-grid: Lokaal & Persoonlijk, Hands-on, Geen AI-hype, Snelle resultaten; teal iconen met lichte achtergrond
6. **ROI Calculator — "Bereken jouw potentiële besparing"** — Lichte sectie, slider (aantal medewerkers 1-100), uurloon inputveld, live berekende besparing in donker resultaat-blok; CTA naar scan
7. **Diensten — "Onze Diensten"** — 3-koloms card-grid: _AI Strategie & Advies_, _AI Implementatie & Automatisering_ (featured: "⭐ Populair", border-violet, scale-105), _AI Adoptie & Training_; direct gevolgd door donkere "Waarom EnableFlow AI?" sectie met teal/groen gradient achtergrond en 4 USP-badges
8. **Technology Partners — "Powered by de beste AI-platforms"** — 4 partner-cards: OpenAI/ChatGPT, Claude/Anthropic, Gemini/Google, n8n; badges rij eronder: Microsoft 365, Google Workspace, Zapier, Make
9. **FAQ — "Veelgestelde vragen"** — Accordion-stijl lijst, 6 vragen; CTA "Stel je vraag →" onderaan
10. **Footer** — Slate-900 donker, witte tekst, 3 kolommen: merk + tagline / Contact (email + telefoon) / Navigatielinks; copyright onderaan

### LinkedIn

- Profielfoto: professioneel, neutrale achtergrond (bij voorkeur wit/lichtgrijs)
- Omslagfoto: EnableFlow branding met tagline, teal gradient
- Posts: begin met een pakkende eerste zin (geen "Goed nieuws!")
- Gebruik sparingly Lucide-stijl iconen als emoji-equivalent

### Presentaties (PowerPoint / Google Slides)

- Lettertype: Inter of Segoe UI
- Achtergrond: Wit (#ffffff) met teal accent-balk bovenaan
- Titels: Slate-900, Bold
- Bullets: Slate-700, Regular
- Accentkleur in slides: Teal-500 voor highlights
- Maximaal 1 accent per slide (teal of violet, niet beiden)

### E-mail & Offertes

- Briefhoofd: Logo + EnableFlow AI + contactgegevens
- Kleur in tekst: alleen teal voor links, geen violet in e-mail
- Handtekening: naam, functie, EnableFlow AI, telefoon, website, LinkedIn
- Formaat offertes: A4, wit, teal header-balk

---

## 9. Onregelmatigheden & Verbeterpunten Website

*Op basis van analyse van de huidige CSS en structuur zijn de volgende inconsistenties geïdentificeerd:*

### Kleurinconsistenties

**Probleem:** De website gebruikt meerdere blauwtinten (sky, cyan, blue) naast teal, waardoor het kleurenpalet te breed aanvoelt.

**Verbeteractie:**
- Verwijder `blue-500/600` als UI-kleur — vervang door teal of slate
- Gebruik `sky-50` alleen als subtiele achtergrond in de hero, niet voor andere secties
- Consolideer: kies tussen cyan en teal als accent — niet beide even prominent

### Typografie-schaal

**Probleem:** Op mobiel kunnen de grote hero-koppen (text-5xl, text-6xl) te overdwelmend zijn.

**Verbeteractie:**
- Voeg tussenliggende schaalstap toe: `sm:text-4xl md:text-5xl lg:text-6xl`
- Controleer of alle koppen dezelfde font-weight hebben (alle H2's `font-bold`)

### Gradient-consistentie

**Probleem:** Er worden te veel verschillende gradient-richtingen en kleurcombinaties gebruikt (to-b, to-br, to-r, to-tr), wat de visuele samenhang vermindert.

**Verbeteractie:**
- Standaardiseer: achtergrond-gradiënten altijd `to-b` (verticaal)
- Knop-gradiënten: altijd `to-r` (horizontaal), altijd teal→cyan
- Gebruik maximaal 3 unieke gradient-patronen op de hele site

### Card-stijl

**Probleem:** Cards gebruiken wisselend `shadow-lg`, `shadow-xl`, `shadow-md` — inconsistent visueel gewicht.

**Verbeteractie:**
- Standaard cards: `shadow-md` (normaal), `hover:shadow-xl` (hover)
- Featured card: `shadow-xl` (normaal), `hover:shadow-2xl` (hover)

### Violet vs. Teal gebruik

**Probleem:** Violet wordt soms gebruikt als primaire kleur terwijl teal de primaire merkkleur is. Dit creëert verwarring over hiërarchie.

**Verbeteractie:**
- Teal = primaire acties, navigatie, links
- Violet = uitsluitend voor "featured" of "premium" content markering
- Nooit violet en teal naast elkaar in dezelfde component

### Icoon-achtergronden

**Probleem:** Sommige icooncontainers gebruiken `bg-cyan-100`, anderen `bg-teal-100`, zonder duidelijke logica.

**Verbeteractie:**
- Teal-iconen (primaire diensten): `bg-teal-100`
- Violet-iconen (premium/featured): `bg-violet-100`
- Cyan niet gebruiken als icoonachtergrond — alleen in gradiënten

---

## Colofon

**EnableFlow AI**  
📧 info@enableflow.nl  
🌐 www.enableflow.nl  
📍 Noord-Nederland

*Dit document is bedoeld als levend document. Update dit handboek wanneer de huisstijl evolueert.*

**Versiegeschiedenis:**
| Versie | Datum | Wijziging |
|--------|-------|-----------|
| 1.0 | Februari 2026 | Initiële versie op basis van enableflow.nl |
| 1.1 | Maart 2026 | Tagline bijgewerkt; "Over ons" → "Over mij"; featured badge tekst; websitestructuur uitgebreid naar 10 secties; emoji-gebruik gedocumenteerd |

---

*© 2026 EnableFlow AI — Alle rechten voorbehouden*
