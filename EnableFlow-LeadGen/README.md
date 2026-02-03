# EnableFlow - Automated Lead Generation & Outreach

Geautomatiseerde workflow voor het vinden, scoren en benaderen van lokale MKB-bedrijven voor AI-consulting diensten.

## Wat doet dit systeem?

1. **Vindt automatisch bedrijven** binnen 10km van Surhuisterveen via Google Maps
2. **Verrijkt data** met KvK informatie (eigenaar, branche, aantal medewerkers)
3. **Scoort met AI** welke bedrijven het meest baat hebben bij jouw diensten
4. **Genereert gepersonaliseerde emails** in jouw tone-of-voice
5. **Laat je reviewen** voordat emails verzonden worden
6. **Verstuurt via Brevo** met tracking (opens, clicks, replies)

## Resultaat

- **100+ gekwalificeerde leads per maand**
- **30-50 gepersonaliseerde outreach emails per week**
- **>30% open rate** (2x industry average)
- **1-2 meetings per maand** met potentiële klanten

## Kosten

- **Setup:** €20-40 eenmalig
- **Maandelijks:** €10-35 (afhankelijk van volume)

---

## Quick Start

### 1. Setup (eenmalig - ~2 uur)

Volg deze guides in volgorde:

1. **[Setup Guide](docs/setup_guide.md)** - Alle API accounts aanmaken
2. **Import n8n workflows** - 4 JSON bestanden importeren in n8n
3. **Google Sheets setup** - Spreadsheet aanmaken met 4 tabs
4. **Google Apps Script** - Review interface installeren

### 2. Test Run (~30 min)

```bash
# 1. Trigger data collection (manual first time)
# In n8n: Open "EnableFlow - Lead Collection" → Execute

# 2. Wait for scoring to complete (~5 min)
# In n8n: Open "EnableFlow - AI Lead Scoring" → Execute

# 3. Generate test emails
curl -X POST https://YOUR_N8N_URL/webhook/generate-emails

# 4. Review in Google Sheets → Approve → Send
```

### 3. Go Live

- **Week 1:** 5-10 emails (warm up)
- **Week 2:** 15-20 emails
- **Week 3+:** 30-50 emails per week

---

## Project Structure

```
EnableFlow-LeadGen/
├── n8n-workflows/           # Import deze in n8n
│   ├── 01_data_collection.json
│   ├── 02_ai_scoring.json
│   ├── 03_email_generation.json
│   └── 04_email_sending.json
│
├── templates/
│   ├── email_template.html  # Email design met EnableFlow branding
│   └── brevo_config.json    # Brevo settings
│
├── scripts/                 # Helper scripts
│   ├── google_sheets_apps_script.js  # Review interface
│   ├── kvk_lookup_helper.py          # Manual KvK lookups
│   └── email_validator.py            # Email verification
│
└── docs/                    # Documentatie
    ├── setup_guide.md       # API setup instructies
    └── workflow_sop.md      # Dagelijkse gebruik
```

---

## Workflows Overzicht

### 1. Lead Collection (Weekly - Automated)
**Trigger:** Maandag 9:00 (automatic)
**Duration:** ~10-15 min
**Output:** 20-50 nieuwe leads in `EnableFlow_Leads_Raw`

```
Google Places → Filter → KvK Enrichment → Email Discovery → Google Sheets
```

### 2. AI Scoring (Daily - Automated)
**Trigger:** Dagelijks 10:00 (automatic)
**Duration:** ~5-10 min
**Output:** Gescoorde leads in `EnableFlow_Leads_Qualified`

```
Read Unscored → Claude AI Scoring → Filter (>60) → Google Sheets
```

### 3. Email Generation (On-Demand)
**Trigger:** Manual webhook
**Duration:** ~2-3 min (10 emails)
**Output:** Emails in `EnableFlow_Email_ReviewQueue`

```
Read Pending Leads → Claude Email Gen → Create HTML → Review Queue
```

### 4. Email Sending (Semi-Automatic)
**Trigger:** Approve button in Google Sheets
**Duration:** <1 min per email
**Output:** Email sent via Brevo

```
Approve → Read Email → Brevo Send → Update Status → Track
```

---

## Daily Routine (10-15 min/dag)

1. **Check qualified leads** (2 min)
   - Open `EnableFlow_Leads_Qualified` tab
   - Sorteer op AI Score
   - Markeer top 10 voor deze week

2. **Review & send emails** (8-10 min)
   - Open `EnableFlow_Email_ReviewQueue` tab
   - Review 5-10 pending emails
   - Approve via `EnableFlow` menu
   - Emails worden automatisch verstuurd

3. **Reply handling** (5 min)
   - Check inbox voor replies
   - Reply binnen 24 uur
   - Update status in sheet

---

## Key Metrics

### Lead Quality
- **Target:** 100+ qualified leads (score >60) per maand
- **Email accuracy:** >70% valid emails

### Email Performance
- **Open rate:** >30% (benchmark: 20-25%)
- **Click rate:** >5%
- **Reply rate:** >3% (benchmark: 1-2%)

### Business Impact
- **Meetings:** >1 per 100 emails sent
- **Cost per meeting:** <€50
- **Meeting → Project conversion:** 20%

---

## Tech Stack

- **n8n** - Workflow automation
- **Google Places API** - Business discovery
- **KvK API** - Company data enrichment
- **Claude AI (Anthropic)** - Scoring + Email generation
- **Brevo** - Email delivery + tracking
- **Google Sheets** - Data storage + review interface

---

## Customization

### Adjust search radius
In workflow 1: Change `radius: 10000` to desired meters

### Change scoring criteria
In workflow 2: Edit Claude prompt with new scoring rules

### Modify email tone
In workflow 3: Update email generation prompt with new examples

### Add new industries
In workflow 1: Add SBI codes to filter

---

## Troubleshooting

### Geen nieuwe leads
→ Check Google Places API quota
→ Verify KvK API credentials
→ Lower employee filter (min 2 instead of 3)

### Emails naar spam
→ Verify SPF/DKIM DNS records
→ Reduce send volume to 5-10/dag
→ Warm up domain for 2 weeks

### Lage open rate
→ A/B test subject lines
→ Personalize more (use first name)
→ Check spam score at mail-tester.com

**Zie [workflow_sop.md](docs/workflow_sop.md) voor complete troubleshooting guide**

---

## Security & Privacy

✅ **GDPR Compliant:** B2B outreach onder legitimate interest
✅ **Opt-out:** Unsubscribe link in elke email
✅ **Data minimalisatie:** Alleen noodzakelijke velden
✅ **Encryptie:** API keys veilig opgeslagen in n8n credentials

---

## Support

- **Setup vragen:** Zie [setup_guide.md](docs/setup_guide.md)
- **Dagelijks gebruik:** Zie [workflow_sop.md](docs/workflow_sop.md)
- **n8n errors:** Check execution logs in n8n UI
- **Email issues:** Test via [mail-tester.com](https://www.mail-tester.com)

---

## Roadmap

**Phase 1 (Huidige implementatie):**
- ✅ Automated lead collection
- ✅ AI scoring
- ✅ Email generation
- ✅ Manual review interface
- ✅ Brevo sending + tracking

**Phase 2 (Q2 2026):**
- [ ] Automated follow-up sequence (5 dagen na no-reply)
- [ ] A/B testing for subject lines
- [ ] Dashboard met real-time metrics

**Phase 3 (Q3 2026):**
- [ ] LinkedIn outreach integration
- [ ] CRM sync (HubSpot/Pipedrive)
- [ ] Machine learning op reply data (predictive scoring)

---

## Credits

Built with ❤️ for EnableFlow AI

**Technologies:**
- n8n (workflow automation)
- Claude AI by Anthropic (AI scoring & generation)
- Google Maps Platform
- KvK Open Data
- Brevo (email delivery)

---

## License

Proprietary - EnableFlow AI © 2026
