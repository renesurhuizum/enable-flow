# EnableFlow AI - Project Brief

## Project Overview

**Bedrijfsnaam:** EnableFlow AI  
**Payoff:** Supercharge the way you work  
**Domein:** enableflow.ai (nog te registreren bij Porkbun)  
**Type:** AI Consultancy voor MKB in Noord-Nederland  
**Eigenaar:** René (eenmanszaak, parttime naast baan bij Provincie Groningen)

---

## Kernpositionering

EnableFlow AI helpt bedrijven in Noord-Nederland (40km rond Surhuizum) om slimmer te werken met AI. Focus op:
- **Microsoft Copilot 365** (hoofdproduct - meeste MKB heeft al Microsoft)
- **Claude** (Anthropic)
- **Gemini** (Google)

### Unique Selling Points
1. **Lokaal & persoonlijk** - Geen Randstad-bureau, komt langs
2. **Hands-on** - Niet alleen advies, ook implementatie
3. **Geen AI-hype** - Nuchter, eerlijk over wat AI wel/niet kan
4. **Betaalbaar voor MKB** - Flexibele tarieven

---

## Diensten & Prijzen

### Consultancy
| Dienst | Prijs |
|--------|-------|
| AI Readiness Scan | Gratis (lead magnet) |
| AI Strategie Workshop (dagdeel) | €750 - €1.500 |
| Business case ontwikkeling | Op maat |

### Implementatie
| Dienst | Prijs |
|--------|-------|
| Microsoft Copilot 365 uitrol | Vanaf €2.500 |
| Procesautomatisering | Uurtarief €75+ of fixed price |
| Custom AI-oplossingen | Op maat |

### Training
| Dienst | Prijs |
|--------|-------|
| Prompt Engineering Basics | €150 p.p. / groep €1.200 |
| AI voor Management | €175 p.p. |
| Copilot voor teams | Op maat |

---

## Technische Stack

### Frontend
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (gratis tier)

### Backend & Database
- **Database:** Convex
- **Project:** `modest-dodo-158`
- **Dashboard:** https://dashboard.convex.dev/t/renedeboer97/enable-flow-ai/modest-dodo-158/data

### Email & DNS
- **Domein registrar:** Porkbun (~€45/jaar voor .ai)
- **DNS:** Cloudflare (gratis)
- **Email:** Cloudflare Email Routing → Gmail (gratis)

### Totale jaarlijkse kosten: ~€45

---

## Huisstijl

### Kleuren
```css
--navy: #1a2b4a;      /* Primair, tekst, vertrouwen */
--teal: #00d4aa;      /* Accent, CTAs, energie */
--white: #f8f9fa;     /* Achtergrond */
--gray: #6b7280;      /* Secundaire tekst */
--light-gray: #f3f4f6; /* Secties */
```

### Typografie
- **Headings:** Inter (font-semibold/bold)
- **Body:** Inter (font-normal)
- **Geen script fonts**

### Logo
- Wordmark + subtle icon (nog te finaliseren)
- "Enable" (navy) + "Flow" (teal) + "AI" (gray, light)

### Tone of Voice
- Deskundig maar toegankelijk
- Partner/meedenker, niet verkoper
- Nederlands, Engels waar nodig
- Direct, concreet, met voorbeelden

---

## Website Structuur

```
enableflow.ai/
├── / (Homepage)
├── /diensten
│   ├── /ai-consultancy
│   ├── /ai-implementatie
│   └── /ai-training
├── /ai-scan (Lead magnet)
├── /over-ons
├── /contact
├── /blog/ (later)
├── /privacy
├── /voorwaarden
└── /regio/
    ├── /groningen
    ├── /drachten
    ├── /leeuwarden
    ├── /assen
    ├── /heerenveen
    └── [35+ andere plaatsen binnen 40km]
```

---

## Convex Database Schema

```typescript
// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    email: v.string(),
    company: v.string(),
    answers: v.object({
      companySize: v.string(),
      sector: v.string(),
      aiUsage: v.string(),
      hasMicrosoft365: v.string(),
      biggestChallenge: v.string(),
    }),
    score: v.number(),
    createdAt: v.number(),
    contacted: v.boolean(),
  }).index("by_email", ["email"])
    .index("by_date", ["createdAt"]),

  contacts: defineTable({
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    message: v.string(),
    createdAt: v.number(),
    replied: v.boolean(),
  }).index("by_date", ["createdAt"]),

  chatSessions: defineTable({
    sessionId: v.string(),
    messages: v.array(v.object({
      from: v.string(),
      text: v.string(),
      timestamp: v.number(),
    })),
    createdAt: v.number(),
  }),
});
```

---

## AI Scan - Lead Generator Logic

### Vragen
1. Hoeveel medewerkers heeft je bedrijf? (1-10, 11-50, 51-100, 100+)
2. In welke sector is je bedrijf actief? (5 opties)
3. Gebruikt je team al AI-tools? (4 opties)
4. Heeft je organisatie Microsoft 365? (Ja/Nee/Weet niet)
5. Wat is je grootste uitdaging? (4 opties)

### Scoring Algoritme
```javascript
const getScore = (answers) => {
  let score = 0;
  
  // AI usage
  if (answers.aiUsage === 'Ja, structureel' || answers.aiUsage === 'Ja, volledig geïntegreerd') {
    score += 30;
  } else if (answers.aiUsage === 'Ja, incidenteel (ChatGPT e.d.)') {
    score += 15;
  }
  
  // Microsoft 365
  if (answers.hasMicrosoft365 === 'Ja') score += 25;
  
  // Company size (sweet spot 11-100)
  if (answers.companySize === '11-50' || answers.companySize === '51-100') {
    score += 20;
  }
  
  // Challenge alignment
  if (answers.biggestChallenge === 'Tijdgebrek / te veel handmatig werk') {
    score += 25;
  } else {
    score += 10;
  }
  
  return Math.min(score, 100);
};
```

---

## Lokale SEO Strategie

### Plaatsen voor /regio/ pagina's (binnen 40km Surhuizum)

**Friesland:**
Drachten, Leeuwarden, Heerenveen, Sneek, Dokkum, Burgum, Kollum, Buitenpost, Surhuisterveen, Grou, Akkrum, Wolvega, Gorredijk, Joure, Bolsward, Harlingen, Franeker

**Groningen:**
Groningen (stad), Hoogezand, Leek, Marum, Zuidhorn, Winsum, Bedum, Ten Boer, Haren, Roden

**Drenthe:**
Assen, Roden, Peize, Norg

### SEO per locatiepagina
- Unieke H1: "AI Consultancy in [Plaatsnaam]"
- Lokale content: afstand tot Surhuizum, bereikbaarheid
- Dezelfde diensten, lokaal verwoord
- Schema.org LocalBusiness markup
- Google Business Profile link

---

## Volgende Stappen (Prioriteit)

### Week 1: Setup
- [ ] Domein registreren (enableflow.ai via Porkbun)
- [ ] Next.js project opzetten met Convex
- [ ] Cloudflare DNS configureren
- [ ] Vercel project aanmaken

### Week 2: Core Website
- [ ] Homepage implementeren
- [ ] Diensten pagina's
- [ ] AI Scan (lead generator) met Convex
- [ ] Contact formulier met Convex
- [ ] Chatbot

### Week 3: SEO & Content
- [ ] Lokale SEO pagina's genereren (40+)
- [ ] Meta tags & Open Graph
- [ ] Sitemap.xml
- [ ] Schema.org markup
- [ ] robots.txt

### Week 4: Launch
- [ ] Privacy & voorwaarden pagina's
- [ ] Google Business Profile
- [ ] LinkedIn bedrijfspagina
- [ ] Testen & bugfixes
- [ ] Go live!

---

## Project Commands

```bash
# Nieuw Next.js project
npx create-next-app@latest enableflow-ai --typescript --tailwind --app

# Convex installeren
npm install convex
npx convex dev

# Development
npm run dev

# Convex functies deployen
npx convex deploy
```

---

## Belangrijke Links

- **Convex Dashboard:** https://dashboard.convex.dev/t/renedeboer97/enable-flow-ai/modest-dodo-158/data
- **Vercel:** (nog aan te maken)
- **Domein:** enableflow.ai (nog te registreren)

---

## Design Assets Nodig

- [ ] Logo (SVG, PNG in meerdere formaten)
- [ ] Favicon (16x16, 32x32, apple-touch-icon)
- [ ] Open Graph image (1200x630)
- [ ] Placeholder profielfoto's of avatars

---

## Notes

- Website moet professioneel maar toegankelijk ogen
- Animaties en visuele elementen voor "energie" (niet te clean/corporate)
- Lead generator (AI Scan) is primaire conversie-doel
- Chatbot voor FAQ, geen complexe AI nodig
- Mobile-first design
