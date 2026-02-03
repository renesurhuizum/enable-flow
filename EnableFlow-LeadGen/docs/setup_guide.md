# EnableFlow Lead Generation - Setup Guide

## Overzicht

Deze guide helpt je bij het opzetten van de geautomatiseerde lead generatie en outreach workflow voor EnableFlow AI.

## Benodigde Accounts & API's

### 1. Google Cloud Platform (Google Maps & Places API)

**Setup stappen:**
1. Ga naar [Google Cloud Console](https://console.cloud.google.com/)
2. Maak een nieuw project aan: "EnableFlow-LeadGen"
3. Enable de volgende APIs:
   - Places API (New)
   - Maps JavaScript API
4. Maak een API key aan:
   - Navigeer naar "Credentials" → "Create Credentials" → "API Key"
   - Restrict de key tot Places API voor security
   - Sla de key op: `GOOGLE_PLACES_API_KEY`

**Kosten:**
- Nearby Search: $32 per 1000 requests
- Place Details: $17 per 1000 requests
- Geschatte kosten: €8-12 per 200 leads/maand

**Billing setup:**
- Stel een budget alert in bij €20/maand
- Enable billing in Google Cloud Console

---

### 2. Kamer van Koophandel (KvK) API

**Setup stappen:**
1. Ga naar [KvK Developer Portal](https://developers.kvk.nl/)
2. Registreer een account
3. Vraag toegang aan tot de Zoeken API (v2)
4. Verkrijg je API key in het developer dashboard
5. Sla de key op: `KVK_API_KEY`

**Gratis tier:**
- 100 requests per dag
- Voldoende voor wekelijkse data collection

**Let op:**
- Voor productiegebruik: upgrade naar betaald plan (€99/maand voor 10.000 requests)
- Test eerst met gratis tier

---

### 3. Brevo (Email Platform)

**Setup stappen:**
1. Ga naar [Brevo.com](https://www.brevo.com/) (voorheen SendinBlue)
2. Maak een gratis account aan
3. Verify je domein (enableflow.ai):
   - Ga naar "Senders & IP" → "Domains"
   - Voeg DNS records toe (SPF, DKIM, DMARC)
4. Maak een API key aan:
   - Ga naar "SMTP & API" → "API Keys"
   - Create key met "Send emails" permissie
   - Sla de key op: `BREVO_API_KEY`

**Gratis tier:**
- 300 emails per dag
- Voldoende voor starten (10-20 emails/dag)

**Email warm-up (belangrijk!):**
- Week 1: max 5-10 emails/dag
- Week 2: max 15-20 emails/dag
- Week 3: max 30 emails/dag
- Dit voorkomt spam filtering

---

### 4. Anthropic Claude API

**Setup stappen:**
1. Ga naar [Anthropic Console](https://console.anthropic.com/)
2. Maak een account aan
3. Add credits (min €20 voor starten)
4. Maak een API key aan:
   - Ga naar "API Keys" → "Create Key"
   - Sla de key op: `ANTHROPIC_API_KEY`

**Model:**
- Gebruik: `claude-3-5-sonnet-20241022`
- Kosten: ~$3 per 1M input tokens, ~$15 per 1M output tokens

**Geschatte kosten:**
- AI Scoring: ~$0.001 per lead (€0.001)
- Email Generatie: ~$0.003 per email (€0.003)
- 200 leads/maand: ~€1-2 totaal

---

### 5. n8n (Workflow Automation)

**Optie A: Self-hosted (Gratis)**

Via Docker:
```bash
docker run -d --name n8n \
  -p 5678:5678 \
  -v ~/.n8n:/home/node/.n8n \
  n8nio/n8n
```

Access via: http://localhost:5678

**Optie B: n8n Cloud (Betaald, eenvoudiger)**

1. Ga naar [n8n.io/cloud](https://n8n.io/cloud)
2. Maak account aan
3. Start met €20/maand plan

**Aanbeveling:** Start self-hosted, upgrade naar cloud als je meer uptime wilt

---

### 6. Google Sheets

**Setup stappen:**
1. Ga naar [Google Sheets](https://sheets.google.com/)
2. Maak een nieuwe spreadsheet: "EnableFlow Leads Master"
3. Maak 4 tabs aan:
   - `EnableFlow_Leads_Raw`
   - `EnableFlow_Leads_Qualified`
   - `EnableFlow_Email_ReviewQueue`
   - `Dashboard`

**Google Sheets API voor n8n:**
1. Ga naar [Google Cloud Console](https://console.cloud.google.com/)
2. Enable Google Sheets API
3. Maak Service Account aan voor n8n
4. Download JSON credentials
5. Share je spreadsheet met service account email

---

### 7. Optioneel: Hunter.io (Email Finder)

**Setup stappen:**
1. Ga naar [Hunter.io](https://hunter.io/)
2. Maak gratis account aan
3. Verkrijg API key: `HUNTER_API_KEY`

**Gratis tier:**
- 25 searches per maand
- Gebruik alleen voor high-value leads

---

## API Keys Overzicht

Sla deze keys **veilig** op (bijv. in 1Password of LastPass):

```
GOOGLE_PLACES_API_KEY=AIzaSy...
KVK_API_KEY=...
BREVO_API_KEY=...
ANTHROPIC_API_KEY=sk-ant-...
HUNTER_API_KEY=... (optioneel)
```

**In n8n:**
- Ga naar "Credentials" → "Create New"
- Voeg elke API key toe als credential
- Gebruik deze credentials in je workflows

---

## Domain & Email Setup

### SPF Record
Voeg toe aan enableflow.ai DNS:
```
TXT @ "v=spf1 include:spf.brevo.com ~all"
```

### DKIM Record
Brevo geeft je specifieke DKIM record → voeg toe aan DNS

### DMARC Record
```
TXT _dmarc "v=DMARC1; p=none; rua=mailto:rene@enableflow.ai"
```

**Verificatie:**
- Check [MXToolbox](https://mxtoolbox.com/) voor DNS propagatie
- Test email naar [mail-tester.com](https://www.mail-tester.com/) voor spam score

---

## Kosten Samenvatting

**Eenmalig:**
- n8n setup: €0 (self-hosted) of €20 eenmalig
- Anthropic credits: €20
- **Totaal: €20-40**

**Maandelijks (200 leads):**
- Google Places API: €8-12
- KvK API: €0 (gratis tier)
- Brevo: €0 (gratis tier)
- Claude API: €1-2
- n8n: €0 (self-hosted) of €20 (cloud)
- **Totaal: €10-35/maand**

---

## Security Best Practices

1. **Nooit API keys in code committen**
   - Gebruik n8n credentials systeem
   - Gebruik environment variables voor scripts

2. **Restrict API keys**
   - Google: restrict tot Places API
   - Brevo: alleen "Send emails" permissie

3. **Google Sheets toegang**
   - Alleen delen met service account
   - Niet publiek maken

4. **Rate limiting**
   - Stel alerts in bij onverwacht hoog gebruik
   - Monitor kosten wekelijks

---

## Volgende Stappen

Na het voltooien van deze setup:
1. ✅ Alle API keys zijn aangemaakt en veilig opgeslagen
2. ✅ n8n is geïnstalleerd en draait
3. ✅ Google Sheets is aangemaakt met juiste tabs
4. ✅ Email domein is geverifieerd in Brevo

→ Ga verder met het importeren van de n8n workflows (zie `workflow_sop.md`)

---

## Troubleshooting

### Google Places API errors
- **Quota exceeded:** Check billing in Google Cloud
- **Invalid API key:** Verify key restrictions

### KvK API errors
- **Rate limit:** Wacht tot volgende dag of upgrade plan
- **No results:** Bedrijfsnaam spelling is kritiek

### Brevo delivery issues
- **Emails in spam:** Check SPF/DKIM records
- **Sending blocked:** Contacteer Brevo support (kan gebeuren bij nieuwe accounts)

### n8n workflow errors
- **Credential errors:** Verify API keys zijn correct ingevoerd
- **Execution timeout:** Verhoog timeout in workflow settings

---

## Support

- **n8n Community:** [community.n8n.io](https://community.n8n.io/)
- **Google Cloud Support:** [cloud.google.com/support](https://cloud.google.com/support)
- **Brevo Support:** [help.brevo.com](https://help.brevo.com/)

Voor workflow-specifieke vragen: zie `workflow_sop.md`
