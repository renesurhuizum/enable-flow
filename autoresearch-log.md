# Autoresearch Log

**Doel:** Verbeter de test coverage zo veel mogelijk. Voeg tests toe voor ongeteste functies, fix failing tests, en verbeter de algehele codekwaliteit meetbaar via testresultaten.
**Testcommando:** `npm test`
**Gestart:** 2026-04-14 23:06
**Baseline:** 238 tests (19 test files, alle passing)
**Branch:** autoresearch/2026-04-14-23-06
**Max iteraties:** 10

## Experimenten

| # | Hypothesis | Score | Delta | Status |
|---|---|---|---|---|
| 1 | HomePage ontbreekt volledig — voeg render + hero + CTA + FAQ + slider tests toe | 249 | +11 | ✅ Commit |
| 2 | Navigation component heeft geen tests — voeg logo, links, extern Calendly, mobile toggle toe | 259 | +10 | ✅ Commit |
| 3 | FAQ component is ongetest — voeg heading, toggle open/close, mutual exclusion tests toe | 268 | +9 | ✅ Commit |
| 4 | Hero, CTASection, Services hebben geen tests — sections.test.tsx aanmaken | 285 | +17 | ✅ Commit |
| 5 | Footer, Layout, ROICard hebben geen tests — layout.test.tsx aanmaken | 302 | +17 | ✅ Commit |
| 6 | ProcessSection, PainSection, SocialProofBar, Testimonials, UseCasesPreview ongetest | 324 | +22 | ✅ Commit |
| 7 | ContactForm volledig ongetest — render, email validatie, field interacties | 340 | +16 | ✅ Commit |
| 8 | ScanForm stap 1 & navigatie ongetest — step 1 render, validatie, Terug | 350 | +10 | ✅ Commit |
| 9 | App routing ongetest — 6 routes, nav/footer aanwezig, unknown route | 359 | +9 | ✅ Commit |
| 10 | ScanForm stap 2 → stap 3 flow ongetest (radio interactie + ROI resultaten) | 365 | +6 | ✅ Commit |

## Samenvatting

**Eindscore:** 365 tests (29 test files) — baseline was 238 (19 test files)  
**Totale delta:** +127 tests (+53%) in 10 iteraties  
**Alle tests passing:** ✅

### Wat is gedaan

Alle eerder ongeteste delen van de codebase zijn gedekt:
- **Pages:** HomePage (hero, CTA, FAQ toggle, ROI slider)
- **Layout:** Navigation (logo, links, Calendly, mobile toggle), Footer, Layout wrapper, ROICard sliders
- **Sections:** Hero, CTASection, Services, ProcessSection, PainSection, SocialProofBar, TestimonialsSection, UseCasesPreview
- **Forms:** ContactForm (render, email validatie, field interacties), ScanForm (stap 1 + stap 2 → stap 3 flow met radio inputs + ROI resultaten)
- **Routing:** App.tsx — alle 6 routes, nav/footer aanwezig, unknown route levert niets op

### Technische inzichten

- `sr-only` radio inputs vereisen directe `fireEvent.click` op het `<input>` element via `container.querySelectorAll('input[name="..."]')`, niet via label-tekst klikken
- Unlabelled `<select>` elements: gebruik `getAllByRole('combobox')` en index op positie
- `MemoryRouter` is vereist voor alle componenten die `<Link>` of `useNavigate` gebruiken
- Named exports (`export const X`) vereisen `{ X }` import-syntax, niet default imports
- BrowserRouter conflict in App.tsx: gebruik `MemoryRouter + Routes` in App.test.tsx
