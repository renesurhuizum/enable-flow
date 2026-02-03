# n8n Workflows - Import Instructies

## Quick Start: Simplified Test Workflow (Zonder KvK)

Start met **`00_simplified_test.json`** - dit is een versimpelde workflow die meteen werkt zonder KvK API.

### Wat doet deze workflow?

1. ✅ Zoekt bedrijven binnen 5km van Surhuisterveen via Google Places
2. ✅ Filtert irrelevante types (scholen, benzinestations, etc.)
3. ✅ Haalt details op (adres, telefoon, website)
4. ✅ Schat bedrijfsgrootte op basis van aantal reviews
5. ✅ Genereert email adressen (info@bedrijf.nl pattern)
6. ✅ Schrijft naar Google Sheets `EnableFlow_Leads_Raw` tab

---

## Stap 1: Import in n8n

1. **Login bij n8n** (jouw bestaande account)
2. **Klik op workflows** → **Import from File**
3. **Selecteer:** `00_simplified_test.json`
4. **Klik Import**

---

## Stap 2: Configureer Credentials

### A. Google OAuth (voor Google Sheets)

1. In de workflow, klik op de **"Write to Google Sheets"** node
2. Klik op **"Select Credential"** → **"Create New"**
3. Kies **"Google Sheets OAuth2 API"**
4. Volg de OAuth flow:
   - Authorize met je Google account (renedeboer97@gmail.com)
   - Geef permissie om Sheets te bewerken
   - Credentials worden automatisch opgeslagen

### B. Google Places API

De API key zit al in de workflow (`AIzaSyC692OQYXF_11T5mbYOkksItASFkCjVc2s`), maar voor productie is het beter om deze als credential op te slaan:

**Optioneel - Credential aanmaken:**
1. Ga naar **Settings** → **Credentials** → **Add Credential**
2. Kies **"Header Auth"** of maak een custom credential type
3. Naam: `Google Places API`
4. Key: `AIzaSyC692OQYXF_11T5mbYOkksItASFkCjVc2s`

---

## Stap 3: Test de Workflow

### Manual Test Run

1. **Klik op "Execute Workflow"** (groene knop rechtsboven)
2. **Wacht ~20-30 seconden** (Google API calls nemen tijd)
3. **Check de output:**
   - Klik op elke node om de data te zien
   - Je zou 10-20 bedrijven moeten zien

### Check Google Sheets

1. Open: https://docs.google.com/spreadsheets/d/1oz6sTWX4pFCBU60u6leJzZvg3bZEHSYn0vWZtNc0KCU/edit
2. Ga naar tab: **EnableFlow_Leads_Raw**
3. Je zou nieuwe rijen moeten zien met bedrijfsdata

---

## Stap 4: Headers Toevoegen aan Google Sheet (Eenmalig)

Als de sheet nog leeg is, voeg handmatig de headers toe in rij 1:

```
bedrijfsnaam | adres | telefoon | website | email | google_rating | review_count | estimated_size | data_source | collected_date
```

Of laat de workflow 1x draaien, dan worden de kolommen automatisch aangemaakt.

---

## Troubleshooting

### Error: "Google Sheets OAuth not authorized"
**Fix:** Klik op de "Write to Google Sheets" node → Re-authorize OAuth

### Error: "Google Places API quota exceeded"
**Fix:** Wacht 24 uur of upgrade Google Cloud billing

### Error: "No results found"
**Fix:**
- Verander `keyword` parameter naar `bedrijf` of `kantoor`
- Vergroot `radius` naar `10000` (10km)

### Geen emails gevonden
**Verwacht:** Email discovery is basic (info@domain pattern). Later verbeteren met website scraping.

---

## Volgende Stappen

Na succesvolle test:

### 1. **AI Scoring Workflow** (optioneel)
Import `02_ai_scoring.json` om Claude AI scoring toe te voegen

### 2. **Schedule Trigger**
Verander "Manual Trigger" naar "Schedule Trigger" voor automatische runs:
- Elke maandag 9:00: Cron `0 9 * * 1`
- Dagelijks: Cron `0 9 * * *`

### 3. **Email Generation**
Import `03_email_generation.json` voor gepersonaliseerde emails

---

## Workflow Overzicht

```
┌─────────────────┐
│ Manual Trigger  │
└────────┬────────┘
         │
         ▼
┌──────────────────────┐
│ Google Places Search │ ← 5km radius, "kantoor" keyword
└──────────┬───────────┘
           │
           ▼
┌───────────────────────┐
│ Process & Filter      │ ← Remove scholen, horeca, etc.
└───────────┬───────────┘
            │
            ▼
┌─────────────────────┐
│ Get Place Details   │ ← Phone, website, address
└──────────┬──────────┘
           │
           ▼
┌────────────────────────┐
│ Enrich + Email Discovery│ ← Estimate size, generate email
└──────────┬─────────────┘
           │
           ▼
┌──────────────────────┐
│ Write to Google Sheets│ ← EnableFlow_Leads_Raw tab
└───────────────────────┘
```

---

## API Keys in gebruik

✅ **Google Places API:** `AIzaSyC692OQYXF_11T5mbYOkksItASFkCjVc2s`
✅ **Google Sheets:** Via OAuth (geen key nodig)
✅ **Spreadsheet ID:** `1oz6sTWX4pFCBU60u6leJzZvg3bZEHSYn0vWZtNc0KCU`

---

## Kosten per Run

- **Google Places Nearby Search:** ~$0.032 (1 request)
- **Google Places Details:** ~$0.017 × aantal resultaten (bijv. 20 = $0.34)
- **Total per run:** ~$0.40 voor 20 bedrijven

**Budget:** Stel Google Cloud budget alert in op €20/maand

---

## Support

**Issues?** Check:
1. n8n execution logs (klik op "Executions" tab)
2. Google Cloud Console → API usage
3. Google Sheets permissies

**Vragen?** Zie `docs/workflow_sop.md` voor detailed troubleshooting
