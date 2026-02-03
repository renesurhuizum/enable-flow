# EnableFlow Lead Generation - Standard Operating Procedure (SOP)

## Overzicht

Deze SOP beschrijft hoe je de geautomatiseerde lead generatie workflow gebruikt voor EnableFlow AI.

---

## Workflow Overzicht

```
Weekly:     Data Collection → AI Scoring → Qualified Leads
Daily:      Email Generation → Manual Review → Send Approved Emails
Continuous: Track Opens/Clicks → Follow-up
```

---

## 1. Weekly: Lead Collection (Automatisch)

### Wanneer
Elke maandag om 9:00 (geautomatiseerd via n8n schedule)

### Wat gebeurt er
1. Google Places API zoekt bedrijven binnen 10km van Surhuisterveen
2. KvK API verrijkt data met bedrijfsinfo (eigenaar, employees, branche)
3. Filtering: alleen MKB (3-50 medewerkers) + kantoorwerk branches
4. Email discovery via patronen
5. Nieuwe leads worden toegevoegd aan `EnableFlow_Leads_Raw` sheet

### Handmatige acties
**Geen** - volledig geautomatiseerd

### Monitoring
- Check Google Sheet `EnableFlow_Leads_Raw` om 10:00 op maandag
- Verwacht resultaat: 20-50 nieuwe leads per week
- Als < 10 leads: check Google Places API quota

---

## 2. Daily: AI Scoring (Automatisch)

### Wanneer
Elke dag om 10:00 (geautomatiseerd via n8n schedule)

### Wat gebeurt er
1. Leest ongescoorde leads uit `EnableFlow_Leads_Raw`
2. Claude AI scoort elk bedrijf (0-100) op:
   - Bedrijfsgrootte (sweet spot: 11-25 medewerkers)
   - Branche (kantoorwerk scores higher)
   - Tech readiness (website, rating)
3. Identificeert top 3 pijnpunten per bedrijf
4. Leads met score ≥ 60 → `EnableFlow_Leads_Qualified` sheet

### Handmatige acties
**Eens per week (vrijdag):**
- Review `EnableFlow_Leads_Qualified` sheet
- Sorteer op AI Score (hoogste eerst)
- Markeer top 10 leads voor deze week als "Ready for Email"

### Monitoring
- Check gemiddelde score (target: > 65)
- Validate AI-gegenereerde pijnpunten maken sense

---

## 3. Email Generation (On-Demand)

### Wanneer
Wanneer je nieuwe emails wilt genereren (bijv. 2x per week: dinsdag & donderdag)

### Hoe te triggeren

**Optie A: Via n8n UI**
1. Open n8n workflow "EnableFlow - Email Generation"
2. Klik "Execute Workflow"
3. Wacht ~2-3 minuten
4. Check `EnableFlow_Email_ReviewQueue` sheet

**Optie B: Via Webhook (als je dit hebt ingesteld)**
```bash
curl -X POST https://YOUR_N8N_URL/webhook/generate-emails
```

### Wat gebeurt er
1. Leest top 10 leads met status "Pending" uit `EnableFlow_Leads_Qualified`
2. Voor elk lead:
   - Claude AI genereert gepersonaliseerde email
   - Gebruikt EnableFlow tone-of-voice
   - Focust op specifiek pijnpunt van dat bedrijf
3. Emails worden toegevoegd aan `EnableFlow_Email_ReviewQueue`

### Verwacht resultaat
- 10 nieuwe emails in review queue
- Elk email is uniek en gepersonaliseerd

---

## 4. Email Review & Approval (Handmatig)

### Wanneer
Direct na email generatie, of dagelijks om 11:00

### Stappen

1. **Open Google Sheet**
   - Ga naar `EnableFlow_Email_ReviewQueue` tab

2. **Review emails**
   Voor elke email:
   - ✅ Check: Is bedrijfsnaam correct?
   - ✅ Check: Is email adres geldig?
   - ✅ Check: Is subject line pakkend en relevant?
   - ✅ Check: Past de body bij dit bedrijf/branche?
   - ✅ Check: Is de tone-of-voice EnableFlow (niet te corporate)?
   - ✅ Check: Is CTA duidelijk?

3. **Goedkeuren of afwijzen**

   **Via Google Sheets menu:**
   - Selecteer de rij van de email
   - Klik `EnableFlow` menu → `✅ Approve Selected Email`
   - Confirmeer in popup

   **Of via status kolom:**
   - Verander status naar "Approved" (handmatig)
   - Dan trigger je workflow 4 via webhook

4. **Eventueel aanpassen**
   - Edit direct in de `body_plain` kolom
   - Pas subject aan indien nodig
   - Sla op

### Dagelijkse targets
- **Target:** 5-10 emails reviewen en goedkeuren per dag
- **Maximum:** 20 emails per dag (email warm-up)

### Quality checklist per email
- [ ] Bedrijfsnaam is exact correct (geen typo's)
- [ ] Email adres ziet er legitiem uit (niet "info@info.nl")
- [ ] Subject is < 50 karakters
- [ ] Body is 100-150 woorden
- [ ] Tone is informeel maar professioneel
- [ ] Geen grammaticale fouten
- [ ] CTA linkt naar juiste Calendly page
- [ ] Unsubscribe link werkt

---

## 5. Email Sending (Semi-automatisch)

### Wanneer
Direct na approval in review interface

### Wat gebeurt er (automatisch)
1. n8n workflow 4 wordt getriggerd
2. Email wordt verstuurd via Brevo API
3. Status in `EnableFlow_Email_ReviewQueue` → "Sent"
4. Lead status in `EnableFlow_Leads_Qualified` → "Sent"
5. Brevo tracking wordt geactiveerd (opens, clicks)

### Handmatige monitoring
**Dagelijks (einde dag):**
- Check Brevo dashboard: [https://app.brevo.com](https://app.brevo.com)
- Metrics:
  - Delivered rate (target: >95%)
  - Open rate (target: >30%)
  - Click rate (target: >5%)
  - Bounce rate (target: <5%)

**Als bounce rate >5%:**
- Check email validation
- Review email discovery strategie

---

## 6. Tracking & Follow-up

### Reply handling
**Wanneer iemand replied:**
1. Email komt binnen in je inbox (rene@enableflow.ai)
2. **Handmatige actie:** Reply binnen 24 uur
3. Update Google Sheet:
   - `EnableFlow_Leads_Qualified` status → "Replied"
   - Add note in "Notes" kolom

### Follow-up strategie
**Na 5 werkdagen (no reply):**
1. Check `EnableFlow_Email_ReviewQueue` voor emails "Sent" > 5 dagen geleden
2. Genereer follow-up email (optioneel, kan later geautomatiseerd)
3. Follow-up template:

```
Hoi [naam],

Ik stuurde je vorige week een mail over [pijnpunt].

Misschien kwam mijn mail op een druk moment binnen. Heb je 15 minuten voor een vrijblijvend gesprek over hoe AI [specifiek voordeel] kan bieden?

Anders helemaal geen probleem - laat me weten als je liever niet gecontacteerd wilt worden.

Groet,
René
```

**Maximum follow-ups:** 1x per lead (totaal 2 touches)

---

## Weekly Review Routine

### Elke vrijdag 14:00 - 30 min

1. **Review metrics** (Google Sheets Dashboard tab)
   - Total leads collected deze week
   - Avg AI score
   - Emails sent
   - Open rate
   - Reply rate
   - Meetings booked

2. **Identify issues**
   - Bounce rate hoog? → Email validation verbeteren
   - Open rate laag? → Subject lines aanpassen
   - Reply rate laag? → Email content/CTA verbeteren

3. **Plan volgende week**
   - Hoeveel emails sturen? (start: 10-15/week, opschalen naar 30-50/week)
   - Welke branches focussen?
   - Nieuwe pijnpunten om te testen?

---

## Troubleshooting Guide

### "Geen nieuwe leads deze week"
**Mogelijke oorzaken:**
1. Google Places API quota exceeded
   - Check Google Cloud Console billing
   - Verify API key is active

2. KvK API rate limit
   - Gratis tier: 100 requests/dag
   - Upgrade naar betaald plan

3. Filtering te strict
   - Temporarily lower minimum employees to 2
   - Expand SBI codes to more industries

**Fix:**
- Manually run workflow in n8n
- Check error logs in n8n execution history

---

### "AI scores zijn te laag (< 60)"
**Mogelijke oorzaken:**
1. Verkeerde bedrijfstypes worden verzameld
2. Incomplete KvK data

**Fix:**
- Review Google Places search parameters
- Add more specific keywords: "marketing", "administratie", "consultancy"

---

### "Emails naar spam"
**Mogelijke oorzaken:**
1. Email niet gewarmd-up
2. SPF/DKIM records niet goed
3. Teveel emails tegelijk

**Fix:**
1. Test email via [mail-tester.com](https://www.mail-tester.com)
2. Verify DNS records (zie setup_guide.md)
3. Reduce sending to 5-10/dag voor 2 weken
4. Avoid spam trigger words:
   - "Gratis" → "Kosteloos" of "Vrijblijvend"
   - "Klik hier" → "Bekijk hier"
   - Te veel !!!

---

### "Lage open rate (< 20%)"
**Mogelijke oorzaken:**
1. Slechte subject lines
2. Emails naar spam
3. Email adressen niet accuraat

**Fix:**
1. A/B test subject lines:
   - Huidige: "AI voor [branche] in [plaats]"
   - Test: "[Voornaam], 30% minder tijd aan [pijnpunt]?"
   - Test: "Vraag over [bedrijfsnaam]"
2. Review email validation
3. Use personalization in subject (naam of bedrijf)

---

### "n8n workflow errors"
**Common errors:**

**Error: "Credential not found"**
- Fix: Re-add API credentials in n8n

**Error: "Google Sheets permission denied"**
- Fix: Re-authenticate Google Sheets OAuth

**Error: "Claude API rate limit"**
- Fix: Add delay between requests (Workflow settings → Execution delay: 2000ms)

**Error: "Brevo API 400 Bad Request"**
- Fix: Check email template HTML is valid
- Remove special characters from subject

---

## Monthly Maintenance

### Elke eerste maandag van de maand

1. **Review costs**
   - Google Places API: target < €15/maand
   - Claude API: target < €5/maand
   - Brevo: within free tier?

2. **Clean up data**
   - Archive old leads (>3 maanden, geen response)
   - Delete rejected emails from review queue

3. **Update email templates**
   - Refresh seasonal references
   - Update use cases based on responses

4. **Optimize workflows**
   - Review AI scoring prompt (zijn scores accuraat?)
   - Review email generation prompt (zijn emails conversational genoeg?)

---

## Key Metrics to Track

### Lead Generation
- **Target:** 100+ qualified leads/maand
- **Quality:** >70% accurate email addresses

### Email Performance
- **Send volume:** Week 1-2: 10-15 emails, Week 3-4: 20-30 emails, Week 5+: 30-50 emails
- **Open rate:** >30% (industry benchmark B2B: 20-25%)
- **Click rate:** >5%
- **Reply rate:** >3% (industry avg: 1-2%)

### Business Outcomes
- **Meetings booked:** >1% of emails sent (1 meeting per 100 emails)
- **Cost per meeting:** <€50
- **Conversion:** 20% of meetings → paid project

---

## Quick Reference Commands

### Manually trigger workflows

**Data Collection:**
```bash
# Via n8n UI: Open workflow 1 → Execute
```

**AI Scoring:**
```bash
# Via n8n UI: Open workflow 2 → Execute
```

**Email Generation:**
```bash
curl -X POST https://YOUR_N8N_URL/webhook/generate-emails
```

**Send Email (after approval):**
```bash
curl -X POST https://YOUR_N8N_URL/webhook/send-email \
  -H "Content-Type: application/json" \
  -d '{"lead_id": "12345678"}'
```

---

## Support & Help

### n8n Community
- [community.n8n.io](https://community.n8n.io/)

### API Documentation
- [Google Places API](https://developers.google.com/maps/documentation/places/web-service)
- [KvK API](https://developers.kvk.nl/documentation)
- [Brevo API](https://developers.brevo.com/)
- [Anthropic Claude API](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)

### EnableFlow Internal
- Workflow bugs: check n8n execution logs
- Email issues: rene@enableflow.ai
- Strategy questions: review with team weekly

---

## Changelog

**v1.0 - 2026-02-03**
- Initial SOP created
- 4 workflows implemented
- Google Sheets review interface

**Future Improvements:**
- [ ] Automated follow-up sequence
- [ ] A/B testing for subject lines
- [ ] LinkedIn integration
- [ ] CRM sync (HubSpot/Pipedrive)
