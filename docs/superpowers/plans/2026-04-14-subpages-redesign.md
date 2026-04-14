# Sub-pagina's Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign alle 5 sub-pagina's naar het nieuwe emerald design system en verbeter de content (zie spec `docs/superpowers/specs/2026-04-14-subpages-redesign.md`).

**Architecture:** Elke pagina wordt volledig herschreven als standalone TSX-bestand. Bestaande components (`CTASection`, `ProcessSection`, `ScanForm`, `ContactForm`) worden hergebruikt. Geen nieuwe shared components nodig — elke pagina is zelfstandig en ongecompliceerd.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v3, Vite, Vitest + React Testing Library

---

## File Structure

**Gewijzigd:**
- `src/pages/AboutPage.tsx` — volledig herschreven
- `src/pages/DienstenPage.tsx` — volledig herschreven
- `src/pages/UseCasesPage.tsx` — volledig herschreven
- `src/pages/ScanPage.tsx` — hero + kleuren update
- `src/pages/ContactPage.tsx` — hero + kleuren update

**Nieuw (tests):**
- `src/pages/AboutPage.test.tsx`
- `src/pages/DienstenPage.test.tsx`
- `src/pages/UseCasesPage.test.tsx`
- `src/pages/ScanPage.test.tsx`
- `src/pages/ContactPage.test.tsx`

**Ongewijzigd:**
- `src/components/sections/CTASection.tsx`
- `src/components/sections/ProcessSection.tsx`
- `src/components/forms/ScanForm.tsx`
- `src/components/forms/ContactForm.tsx`
- `src/components/layout/Navigation.tsx`
- `src/components/layout/Footer.tsx`

---

## Context voor implementatie

**Design tokens (van homepage):**
- Headlines: `font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d]`
- Body: `text-[#555] leading-[1.7]`
- Eyebrow: `text-xs font-bold tracking-[0.12em] uppercase text-emerald-600`
- Primaire CTA-knop: `bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-[10px] font-bold shadow-[0_4px_18px_rgba(16,185,129,0.35)]`
- Max-width: `max-w-6xl mx-auto px-6`
- Sectie-achtergrond: `bg-white` of `bg-slate-50`

**CTASection importeren:**
```tsx
import CTASection from '../components/sections/CTASection';
// Gebruik als: <CTASection />
```

**Test setup patroon (kijk naar bestaande utils voor Vitest config):**
```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
```

---

## Task 1: AboutPage

**Files:**
- Create: `src/pages/AboutPage.test.tsx`
- Modify: `src/pages/AboutPage.tsx`

- [ ] **Stap 1: Schrijf de failing test**

Maak `src/pages/AboutPage.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AboutPage } from './AboutPage';

describe('AboutPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><AboutPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows new hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Noord-Nederlandse bedrijven de AI-slag/i)
    ).toBeInTheDocument();
  });

  it('shows René motivatie tekst', () => {
    renderPage();
    expect(
      screen.getByText(/AI-ontwikkelingen gaan sneller dan ooit/i)
    ).toBeInTheDocument();
  });

  it('shows drie werkwijze-kaarten', () => {
    renderPage();
    expect(screen.getByText('Eerlijk & nuchter')).toBeInTheDocument();
    expect(screen.getByText('Lokaal & persoonlijk')).toBeInTheDocument();
    expect(screen.getByText('Hands-on & praktisch')).toBeInTheDocument();
  });

  it('shows drie competentie-kaarten', () => {
    renderPage();
    expect(screen.getByText('Werkprocessen doorgronden')).toBeInTheDocument();
    expect(screen.getByText('AI-tools implementeren')).toBeInTheDocument();
    expect(screen.getByText('Teams begeleiden & trainen')).toBeInTheDocument();
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
```

- [ ] **Stap 2: Run test — verwacht FAIL**

```bash
npm test -- --run src/pages/AboutPage.test.tsx
```

Verwacht: FAIL (headline niet gevonden, teal-check faalt op huidige code)

- [ ] **Stap 3: Herschrijf AboutPage.tsx**

```tsx
import React from 'react';
import CTASection from '../components/sections/CTASection';

export const AboutPage = () => {
  const values = [
    {
      title: 'Eerlijk & nuchter',
      body: 'Ik vertel wat AI wél kan doen, maar ook wat niet. Geen beloftes die ik niet waar kan maken.',
    },
    {
      title: 'Lokaal & persoonlijk',
      body: 'Ik kom gewoon bij je langs. Noord-Nederland is mijn werkgebied — geen gezichtsloze consultancy uit de Randstad.',
    },
    {
      title: 'Hands-on & praktisch',
      body: 'Niet alleen advies, maar ook echt implementeren. Van installatie tot training — van A tot Z.',
    },
  ];

  const competencies = [
    {
      title: 'Werkprocessen doorgronden',
      sub: 'Analyse & optimalisatie',
      body: 'Snel zien waar tijd verloren gaat. Van offertestroom tot klantcommunicatie — ik breng het in kaart en maak het slimmer.',
    },
    {
      title: 'AI-tools implementeren',
      sub: 'Microsoft Copilot · Claude · n8n',
      body: 'Van oriëntatie tot volledig werkende oplossing. Ik regel de setup, configuratie en koppeling met jouw werkwijze.',
    },
    {
      title: 'Teams begeleiden & trainen',
      sub: 'Adoptie & gedragsverandering',
      body: 'Nieuwe tools werken alleen als je team ze ook echt gebruikt. Ik train, ondersteun en zorg dat de verandering beklijft.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* 01 — Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Foto */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/images/rene-profile.jpeg"
                alt="René de Boer - Oprichter Enable Flow"
                className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl mb-6 ring-4 ring-emerald-100"
              />
              <div className="bg-white rounded-xl shadow-md px-6 py-4 border border-slate-100 w-full max-w-xs">
                <p className="font-bold text-[#0d0d0d] text-lg">René de Boer</p>
                <p className="text-emerald-600 text-sm font-medium">Oprichter Enable Flow</p>
                <p className="text-[#555] text-sm mt-1">AI Consultant · Noord-Nederland</p>
                <div className="mt-3 flex gap-4">
                  <a
                    href="tel:+31630534740"
                    className="text-xs text-[#555] hover:text-emerald-600 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06 30 53 47 40
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renedeboer97/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#555] hover:text-emerald-600 transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            {/* Intro tekst */}
            <div>
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
                Over mij
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
                Ik help Noord-Nederlandse bedrijven de AI-slag maken.
              </h1>
              <p className="text-lg text-[#555] leading-[1.7] mb-4">
                AI-ontwikkelingen gaan sneller dan ooit. Bedrijven die dat nu omarmen, krijgen een voorsprong die tot voor kort simpelweg niet mogelijk was. Ik zag die kans — en besloot Noord-Nederlandse bedrijven te helpen hem concreet te pakken.
              </p>
              <p className="text-lg text-[#555] leading-[1.7]">
                Of je nu wil starten met Microsoft Copilot 365, een slim klantproces wil automatiseren via n8n, of gewoon wil weten wat AI voor jóuw bedrijf kan doen — ik zorg dat het écht werkt. Hands-on, persoonlijk, zonder gedoe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Werkwijze */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0d0d0d] mb-10">
            Mijn aanpak
          </h2>
          <div className="space-y-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-4 border-emerald-400 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0d0d0d] mb-1">{item.title}</h3>
                  <p className="text-[#555] text-sm leading-[1.7]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Competenties */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0d0d0d] mb-3">
            Wat ik voor je doe
          </h2>
          <p className="text-[#555] mb-10">Van analyse tot implementatie en training.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {competencies.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0d0d0d] mb-1">{card.title}</h3>
                <p className="text-emerald-600 text-sm font-medium mb-3">{card.sub}</p>
                <p className="text-[#555] text-sm leading-[1.7]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CTA */}
      <CTASection />

    </div>
  );
};
```

- [ ] **Stap 4: Run test — verwacht PASS**

```bash
npm test -- --run src/pages/AboutPage.test.tsx
```

Verwacht: 6 tests passing

- [ ] **Stap 5: Commit**

```bash
git add src/pages/AboutPage.tsx src/pages/AboutPage.test.tsx
git commit -m "feat: rewrite AboutPage with emerald design and René's personal story"
```

---

## Task 2: DienstenPage

**Files:**
- Create: `src/pages/DienstenPage.test.tsx`
- Modify: `src/pages/DienstenPage.tsx`

- [ ] **Stap 1: Schrijf de failing test**

Maak `src/pages/DienstenPage.test.tsx`:

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DienstenPage } from './DienstenPage';

describe('DienstenPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><DienstenPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Van scan naar automatisering in 3 stappen/i)
    ).toBeInTheDocument();
  });

  it('shows drie pricing kaarten', () => {
    renderPage();
    expect(screen.getByText('AI QUICKSCAN')).toBeInTheDocument();
    expect(screen.getByText('AI STARTER')).toBeInTheDocument();
    expect(screen.getByText('AI PARTNERSHIP')).toBeInTheDocument();
  });

  it('shows result-first taglines', () => {
    renderPage();
    expect(
      screen.getByText(/Weet binnen een week waar AI jou tijd bespaart/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Jouw eerste automatisering live in 2 weken/i)
    ).toBeInTheDocument();
  });

  it('shows FAQ vragen', () => {
    renderPage();
    expect(
      screen.getByText(/Moet ik al Microsoft 365/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Kan ik stoppen wanneer ik wil/i)
    ).toBeInTheDocument();
  });

  it('FAQ opent bij klikken', () => {
    renderPage();
    const button = screen.getByText(/Moet ik al Microsoft 365/i);
    fireEvent.click(button);
    expect(
      screen.getByText(/René bekijkt samen met je/i)
    ).toBeInTheDocument();
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
```

- [ ] **Stap 2: Run test — verwacht FAIL**

```bash
npm test -- --run src/pages/DienstenPage.test.tsx
```

Verwacht: FAIL

- [ ] **Stap 3: Herschrijf DienstenPage.tsx**

```tsx
import React, { useState } from 'react';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

const SERVICES = [
  {
    id: 'quickscan',
    label: 'AI QUICKSCAN',
    price: '€395',
    period: 'éénmalig',
    tagline: 'Weet binnen een week waar AI jou tijd bespaart.',
    features: [
      'Analyse van jouw processen op AI-kansen',
      'Concrete ROI-berekening per kans',
      'Prioriteitenlijst met aanbevolen tools',
      'Persoonlijk gesprek met René',
    ],
    cta: 'Plan een Quickscan',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: false,
    badge: null,
  },
  {
    id: 'starter',
    label: 'AI STARTER',
    price: '€995',
    period: 'éénmalig',
    tagline: 'Jouw eerste automatisering live in 2 weken.',
    features: [
      'Alles uit de Quickscan',
      'Implementatie van 1–2 automatiseringen',
      'Training van jouw team',
      '30 dagen nazorg',
    ],
    cta: 'Start met AI Starter',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: true,
    badge: '⭐ Meest gekozen',
  },
  {
    id: 'partnership',
    label: 'AI PARTNERSHIP',
    price: '€495',
    period: '/maand',
    tagline: 'Continue AI-begeleiding terwijl je bedrijf groeit.',
    features: [
      'Doorlopende implementatie & optimalisatie',
      'Maandelijkse voortgangssessie',
      'Team-trainingen op aanvraag',
      'Prioriteits-support',
    ],
    cta: 'Bespreek Partnership',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: false,
    badge: null,
  },
] as const;

const FAQ_ITEMS = [
  {
    q: 'Moet ik al Microsoft 365 of andere tools hebben?',
    a: 'Nee. René bekijkt samen met je welke tools het beste passen bij jouw situatie. Soms zijn bestaande tools al voldoende — en soms is een eenvoudige oplossing beter dan een duur pakket.',
  },
  {
    q: 'Wat als de automatisering niet oplevert wat ik verwacht?',
    a: 'We starten altijd met een scan. Als de kansen er niet zijn, zeggen we dat eerlijk — zonder verdere verplichting. Geen resultaat = geen doorgang.',
  },
  {
    q: 'Kan ik stoppen wanneer ik wil?',
    a: 'Ja. Het Partnership is maandelijks opzegbaar. De Quickscan en AI Starter zijn éénmalige trajecten zonder doorlopende verplichting.',
  },
];

export const DienstenPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* 01 — Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
            Diensten & Prijzen
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
            Van scan naar automatisering in 3 stappen.
          </h1>
          <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto">
            Geen langlopende trajecten. Geen vage rapporten. Jouw eerste AI-automatisering is live binnen 2 weken.
          </p>
        </div>
      </section>

      {/* 02 — Pricing */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                  s.highlight
                    ? 'border-2 border-emerald-500 scale-[1.03] shadow-xl'
                    : 'border border-slate-200 shadow-md'
                }`}
              >
                {s.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    {s.badge}
                  </div>
                )}
                <p className="text-xs font-bold tracking-[0.08em] uppercase text-slate-400 mb-3">
                  {s.label}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black tracking-[-0.04em] text-[#0d0d0d]">
                    {s.price}
                  </span>
                  <span className="text-slate-400 text-sm">{s.period}</span>
                </div>
                <p className="font-bold text-[#0d0d0d] mb-6">{s.tagline}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#555]">
                      <svg
                        className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-[10px] font-bold text-sm transition-all ${
                    s.highlight
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-[0_4px_18px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)]'
                      : 'border border-slate-200 text-[#0d0d0d] hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Mogelijk deels vergoed via subsidie. Vraag René ernaar.
          </p>
        </div>
      </section>

      {/* 03 — Process */}
      <ProcessSection />

      {/* 04 — FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black tracking-[-0.04em] text-[#0d0d0d] mb-8">
            Veelgestelde vragen
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#0d0d0d] text-sm hover:bg-slate-50 transition-colors"
                >
                  {item.q}
                  <span className="text-slate-400 ml-4 flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-[#555] text-sm leading-[1.7]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — CTA */}
      <CTASection />

    </div>
  );
};
```

- [ ] **Stap 4: Run test — verwacht PASS**

```bash
npm test -- --run src/pages/DienstenPage.test.tsx
```

Verwacht: 7 tests passing

- [ ] **Stap 5: Commit**

```bash
git add src/pages/DienstenPage.tsx src/pages/DienstenPage.test.tsx
git commit -m "feat: rewrite DienstenPage with emerald design, result-first copy and FAQ"
```

---

## Task 3: UseCasesPage

**Files:**
- Create: `src/pages/UseCasesPage.test.tsx`
- Modify: `src/pages/UseCasesPage.tsx`

- [ ] **Stap 1: Schrijf de failing test**

Maak `src/pages/UseCasesPage.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UseCasesPage } from './UseCasesPage';

describe('UseCasesPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><UseCasesPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Wat wij voor jouw team automatiseren/i)
    ).toBeInTheDocument();
  });

  it('shows vier taaktype-secties', () => {
    renderPage();
    expect(screen.getByText('Communicatie automatiseren')).toBeInTheDocument();
    expect(screen.getByText('Data & rapportage')).toBeInTheDocument();
    expect(screen.getByText('Documenten & content')).toBeInTheDocument();
    expect(screen.getByText('Processen verbinden')).toBeInTheDocument();
  });

  it('shows use case kaarten met tijdsbesparing', () => {
    renderPage();
    expect(screen.getByText('E-mail drafting')).toBeInTheDocument();
    expect(screen.getByText('Vergadernotities')).toBeInTheDocument();
    expect(screen.getByText('CRM-koppelingen')).toBeInTheDocument();
  });

  it('shows callout met link naar scan', () => {
    renderPage();
    expect(
      screen.getByText(/Niet gevonden wat je zoekt/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /Plan een gratis scan/i })
    ).toBeInTheDocument();
  });

  it('bevat geen industrie-indeling meer', () => {
    renderPage();
    expect(screen.queryByText('Sales & Marketing')).not.toBeInTheDocument();
    expect(screen.queryByText('Customer Service')).not.toBeInTheDocument();
    expect(screen.queryByText('HR & Recruitment')).not.toBeInTheDocument();
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
```

- [ ] **Stap 2: Run test — verwacht FAIL**

```bash
npm test -- --run src/pages/UseCasesPage.test.tsx
```

Verwacht: FAIL (nieuwe headlines niet gevonden, industrie-check faalt)

- [ ] **Stap 3: Herschrijf UseCasesPage.tsx**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/sections/CTASection';

const TASK_TYPES = [
  {
    id: 'communicatie',
    title: 'Communicatie automatiseren',
    subtitle: 'Stop met handmatig schrijven — laat AI de concepten maken.',
    colorBg: 'bg-emerald-50',
    colorBorder: 'border-emerald-200',
    colorBadge: 'bg-emerald-100 text-emerald-700',
    colorHeading: 'text-emerald-700',
    useCases: [
      {
        name: 'E-mail drafting',
        tool: 'Microsoft Copilot',
        saving: '−3u/week',
        description:
          'Automatisch concept-e-mails in Outlook op basis van een korte briefing. In jouw schrijfstijl, direct verstuurbaar.',
      },
      {
        name: 'Vergadernotities',
        tool: 'Teams Copilot',
        saving: '−2u/week',
        description:
          'Vergaderingen automatisch samenvatten met actiepunten, besluiten en follow-ups — direct na afloop klaar.',
      },
      {
        name: 'Klantcommunicatie',
        tool: 'ChatGPT / Claude',
        saving: '−2u/week',
        description:
          'Standaard klantberichten, offertebevestigingen en follow-ups automatisch opstellen op basis van jouw inputs.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data & rapportage',
    subtitle: 'Van ruwe data naar bruikbaar inzicht, zonder formule-kennis.',
    colorBg: 'bg-blue-50',
    colorBorder: 'border-blue-200',
    colorBadge: 'bg-blue-100 text-blue-700',
    colorHeading: 'text-blue-700',
    useCases: [
      {
        name: 'Excel-analyses',
        tool: 'Copilot + Excel',
        saving: '−1.5u/week',
        description:
          'Stel vragen in gewoon Nederlands aan je spreadsheet. Draaitabellen, grafieken en inzichten zonder formules.',
      },
      {
        name: 'Voortgangsrapportages',
        tool: 'Copilot + Word',
        saving: '−1u/week',
        description:
          'Wekelijkse of maandelijkse rapportages automatisch genereren op basis van bestaande data.',
      },
      {
        name: 'Klantinzichten',
        tool: 'Claude / ChatGPT',
        saving: '−1.5u/week',
        description:
          'Analyseer klantfeedback, reviews en enquêtes op schaal. Ontdek trends en verbeterpunten in minuten.',
      },
    ],
  },
  {
    id: 'documenten',
    title: 'Documenten & content',
    subtitle: 'Professionele documenten in minuten, in jouw eigen stijl.',
    colorBg: 'bg-violet-50',
    colorBorder: 'border-violet-200',
    colorBadge: 'bg-violet-100 text-violet-700',
    colorHeading: 'text-violet-700',
    useCases: [
      {
        name: 'Presentaties',
        tool: 'PowerPoint + AI',
        saving: '−2u/week',
        description:
          'Professionele slides op basis van een briefing of bestaand document. Visueel opgemaakt, direct bruikbaar.',
      },
      {
        name: 'Offertes & voorstellen',
        tool: 'Word + AI',
        saving: '−1.5u/week',
        description:
          'Gepersonaliseerde offertes en projectvoorstellen in minuten — consistent, professioneel en in jouw tone.',
      },
      {
        name: 'Handleidingen & procedures',
        tool: 'ChatGPT / Copilot',
        saving: '−1u/week',
        description:
          'Interne documentatie, handleidingen en procedures snel opstellen of updaten.',
      },
    ],
  },
  {
    id: 'processen',
    title: 'Processen verbinden',
    subtitle: 'Zet repetitief werk op de automatische piloot.',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
    colorBadge: 'bg-amber-100 text-amber-700',
    colorHeading: 'text-amber-700',
    useCases: [
      {
        name: 'CRM-koppelingen',
        tool: 'n8n + AI',
        saving: '−3u/week',
        description:
          'Verbind je CRM, e-mail en boekhouding automatisch. Nieuwe leads worden direct verwerkt zonder handmatig werk.',
      },
      {
        name: 'Automatische triggers',
        tool: 'n8n + Make',
        saving: '−2u/week',
        description:
          'Stel workflows in die automatisch starten bij specifieke events — nieuwe order, ingevuld formulier, ontvangen e-mail.',
      },
      {
        name: 'Factuurverwerking',
        tool: 'n8n + AI',
        saving: '−1.5u/week',
        description:
          'Inkomende facturen automatisch herkennen, categoriseren en doorsturen naar de juiste persoon of systeem.',
      },
    ],
  },
];

export const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* 01 — Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
            Use Cases
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
            Wat wij voor jouw team automatiseren.
          </h1>
          <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto">
            Concrete toepassingen met meetbare tijdsbesparing — geen theorie, maar resultaten die je morgen al kunt inzetten.
          </p>
        </div>
      </section>

      {/* 02 — Taaktype-secties */}
      <div className="divide-y divide-slate-100">
        {TASK_TYPES.map((type) => (
          <section key={type.id} className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className={`text-2xl font-black tracking-[-0.04em] mb-2 ${type.colorHeading}`}>
                  {type.title}
                </h2>
                <p className="text-[#555]">{type.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {type.useCases.map((uc) => (
                  <div
                    key={uc.name}
                    className={`rounded-2xl p-6 border ${type.colorBg} ${type.colorBorder}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-[#0d0d0d] text-base">{uc.name}</h3>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ml-2 ${type.colorBadge}`}
                      >
                        {uc.saving}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-3">{uc.tool}</p>
                    <p className="text-[#555] text-sm leading-[1.7]">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 03 — Callout */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#0d0d0d] mb-1">
                Niet gevonden wat je zoekt?
              </p>
              <p className="text-[#555] text-sm">
                Elke organisatie heeft unieke processen. René kijkt graag mee wat er bij jou mogelijk is.
              </p>
            </div>
            <Link
              to="/scan"
              className="flex-shrink-0 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-[10px] font-bold text-sm shadow-[0_4px_18px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)] transition-shadow whitespace-nowrap"
            >
              Plan een gratis scan →
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — CTA */}
      <CTASection />

    </div>
  );
};
```

- [ ] **Stap 4: Run test — verwacht PASS**

```bash
npm test -- --run src/pages/UseCasesPage.test.tsx
```

Verwacht: 7 tests passing

- [ ] **Stap 5: Commit**

```bash
git add src/pages/UseCasesPage.tsx src/pages/UseCasesPage.test.tsx
git commit -m "feat: rewrite UseCasesPage with task-type structure (replaces industry sections)"
```

---

## Task 4: ScanPage

**Files:**
- Create: `src/pages/ScanPage.test.tsx`
- Modify: `src/pages/ScanPage.tsx`

- [ ] **Stap 1: Schrijf de failing test**

Maak `src/pages/ScanPage.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ScanPage } from './ScanPage';

describe('ScanPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><ScanPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Ontdek in 10 minuten wat AI voor jouw bedrijf kan doen/i)
    ).toBeInTheDocument();
  });

  it('shows drie benefit-boxen', () => {
    renderPage();
    expect(screen.getByText('AI Readiness Score')).toBeInTheDocument();
    expect(screen.getByText('Top 3 kansen')).toBeInTheDocument();
    expect(screen.getByText('Indicatieve ROI')).toBeInTheDocument();
  });

  it('bevat geen sky gradient achtergrond', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/from-sky-/);
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
```

- [ ] **Stap 2: Run test — verwacht FAIL**

```bash
npm test -- --run src/pages/ScanPage.test.tsx
```

Verwacht: FAIL

- [ ] **Stap 3: Herschrijf ScanPage.tsx**

```tsx
import React from 'react';
import { ScanForm } from '../components/forms/ScanForm';

const BENEFITS = [
  {
    label: 'AI Readiness Score',
    sub: '0–100 met niveau-indicatie',
  },
  {
    label: 'Top 3 kansen',
    sub: 'Concrete aanbevelingen op maat',
  },
  {
    label: 'Indicatieve ROI',
    sub: 'Maandelijkse & jaarlijkse besparing',
  },
];

export const ScanPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
            Gratis & vrijblijvend
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
            Ontdek in 10 minuten wat AI voor jouw bedrijf kan doen.
          </h1>
          <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto mb-10">
            Je krijgt direct je score, top 3 kansen en een indicatieve ROI-berekening. René neemt het daarna persoonlijk met je door.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {BENEFITS.map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-[#0d0d0d] text-sm">{item.label}</p>
                <p className="text-[#555] text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section className="pb-24 px-6">
        <ScanForm />
      </section>

    </div>
  );
};
```

- [ ] **Stap 4: Run test — verwacht PASS**

```bash
npm test -- --run src/pages/ScanPage.test.tsx
```

Verwacht: 5 tests passing

- [ ] **Stap 5: Commit**

```bash
git add src/pages/ScanPage.tsx src/pages/ScanPage.test.tsx
git commit -m "feat: update ScanPage with emerald design and clearer headline"
```

---

## Task 5: ContactPage

**Files:**
- Create: `src/pages/ContactPage.test.tsx`
- Modify: `src/pages/ContactPage.tsx`

- [ ] **Stap 1: Schrijf de failing test**

Maak `src/pages/ContactPage.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ContactPage } from './ContactPage';

describe('ContactPage', () => {
  const renderPage = () =>
    render(<MemoryRouter><ContactPage /></MemoryRouter>);

  it('renders without crashing', () => {
    renderPage();
  });

  it('shows nieuwe hero headline', () => {
    renderPage();
    expect(
      screen.getByText(/Plan een gratis gesprek met René/i)
    ).toBeInTheDocument();
  });

  it('shows drie stats', () => {
    renderPage();
    expect(screen.getByText('24u')).toBeInTheDocument();
    expect(screen.getByText('Gratis')).toBeInTheDocument();
    expect(screen.getByText('Op locatie')).toBeInTheDocument();
  });

  it('shows directe contact links', () => {
    renderPage();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Telefoon')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('bevat geen sky gradient achtergrond', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/from-sky-/);
  });

  it('bevat geen teal kleurklassen meer', () => {
    const { container } = renderPage();
    expect(container.innerHTML).not.toMatch(/text-teal-|bg-teal-|border-teal-/);
  });
});
```

- [ ] **Stap 2: Run test — verwacht FAIL**

```bash
npm test -- --run src/pages/ContactPage.test.tsx
```

Verwacht: FAIL

- [ ] **Stap 3: Herschrijf ContactPage.tsx**

```tsx
import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';

const STATS = [
  { value: '24u', label: 'Reactietijd' },
  { value: 'Gratis', label: 'Altijd vrijblijvend' },
  { value: 'Op locatie', label: 'Noord-Nederland' },
];

const CONTACT_ITEMS = [
  {
    href: 'mailto:info@enableflow.nl',
    label: 'E-mail',
    value: 'info@enableflow.nl',
    external: false,
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    href: 'tel:+31630534740',
    label: 'Telefoon',
    value: '06 30 53 47 40',
    external: false,
    icon: (
      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/renedeboer97/',
    label: 'LinkedIn',
    value: 'Volg ons voor AI-tips',
    external: true,
    icon: (
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
              Plan een gratis gesprek met René.
            </h1>
            <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto">
              30 minuten die direct waarde opleveren. Op locatie of online — geen verkooppraatje, maar een eerlijk gesprek over wat AI voor jóuw bedrijf kan doen.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100"
              >
                <p className="text-xl font-black tracking-[-0.04em] text-emerald-600">
                  {stat.value}
                </p>
                <p className="text-xs text-[#555] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier */}
      <ContactForm defaultTab="consult" showContactHeader={false} />

      {/* Direct contact */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black tracking-[-0.04em] text-white mb-8 text-center">
            Liever direct contact?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-1">{item.label}</h3>
                <p className="text-emerald-300 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-sm text-center mt-10">
            Maandag t/m vrijdag, 09:00 – 17:00
          </p>
        </div>
      </section>

    </div>
  );
};
```

- [ ] **Stap 4: Run test — verwacht PASS**

```bash
npm test -- --run src/pages/ContactPage.test.tsx
```

Verwacht: 6 tests passing

- [ ] **Stap 5: Commit**

```bash
git add src/pages/ContactPage.tsx src/pages/ContactPage.test.tsx
git commit -m "feat: update ContactPage with emerald design and clearer headline"
```

---

## Task 6: Build & volledige verificatie

**Files:** geen wijzigingen

- [ ] **Stap 1: Run alle tests**

```bash
npm test -- --run
```

Verwacht: alle bestaande 213 tests + 5 nieuwe test-suites (25+ tests) passing

- [ ] **Stap 2: Build verificatie**

```bash
npm run build
```

Verwacht: geen TypeScript errors, build succesvol

- [ ] **Stap 3: Visuele verificatie via dev server**

```bash
npm run dev
```

Controleer elke pagina op:
- `/over-mij` — René foto + emerald styling + persoonlijk verhaal
- `/diensten` — pricing kaarten + FAQ accordion + emerald highlight
- `/use-cases` — 4 taaktype-secties, geen industrie-indeling
- `/scan` — clean white hero + emerald iconen
- `/contact` — clean white hero + emerald stats

Controleer per pagina op 375px (mobiel) en 1280px (desktop).

- [ ] **Stap 4: Final commit (als nog wijzigingen nodig na visuele check)**

```bash
git add -p
git commit -m "fix: visual review corrections sub-pages"
```
