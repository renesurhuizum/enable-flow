# EnableFlow Lead Generation - API Credentials

**⚠️ BELANGRIJK: Dit bestand bevat gevoelige API keys. Deel deze NOOIT publiekelijk!**

---

## Google Cloud Platform

### Project Information
- **Project Name:** EnableFlow-LeadGen
- **Project ID:** enableflow-leadgen
- **Project Number:** 887422803902

### Places API Key
```
AIzaSyC692OQYXF_11T5mbYOkksItASFkCjVc2s
```

**Status:** ✅ Active (Unrestricted)
**Created:** 2026-02-03
**APIs Enabled:**
- Places API (New)

**⚠️ Security Note:** Deze key is momenteel unrestricted. Voor productie gebruik, voeg API restrictions toe:
1. Ga naar Google Cloud Console → APIs & Services → Credentials
2. Click op "EnableFlow-Places-API" key
3. Onder "API restrictions" → selecteer "Restrict key"
4. Selecteer alleen "Places API (New)"
5. Save

---

## Brevo (Email Platform)

**Account:** ✅ Active (renedeboer97@gmail.com)
**API Key Name:** EnableFlow-n8n-API
**API Key:**
```
xkeysib-90e6c600700d655701122fe0a051655934fbb0a9189
```

**Status:** ✅ Active
**Created:** 2026-02-03
**Free Tier:** 300 emails/day

**Important Settings:**
- SMTP Server: smtp-relay.brevo.com
- Port: 587
- Login: a16ce6001@smtp-brevo.com

---

## Anthropic Claude API

**Account:** ✅ Active (renedeboer97@gmail.com)
**API Key Name:** EnableFlow-n8n-API
**API Key:**
```
sk-ant-api03-WQhbDta5zHBFqQS_rS3kLL4pzy6CZ3eMB_lPqlnjplgLX-yuwK70E_y4xul8lvCbtX-aMzqPNmxGucZYNWS1SQ-Ej3veQAA
```

**Status:** ✅ Active
**Created:** 2026-02-03
**Model Recommended:** Claude 3.5 Sonnet
**Workspace:** Default

**Cost Estimates:**
- AI Scoring: ~$0.001 per lead
- Email Generation: ~$0.003 per email
- Expected monthly cost (200 leads): ~$2-3

---

## KvK API

**Account:** [Te registreren]
**API Key:** [Te verkrijgen na goedkeuring]

---

## Google Sheets

**Spreadsheet Name:** EnableFlow Leads Master
**Spreadsheet ID:** 1oz6sTWX4pFCBU60u6leJzZvg3bZEHSYn0vWZtNc0KCU
**URL:** https://docs.google.com/spreadsheets/d/1oz6sTWX4pFCBU60u6leJzZvg3bZEHSYn0vWZtNc0KCU/edit

**Tabs:**
1. EnableFlow_Leads_Raw - Raw lead data from Google Places + KvK
2. EnableFlow_Leads_Qualified - AI-scored leads (score ≥ 60)
3. EnableFlow_Email_ReviewQueue - Generated emails pending review
4. Dashboard - KPI tracking and metrics

**Share with:** [n8n service account email - te configureren bij n8n setup]

---

## Usage Notes

1. **Bewaar deze file veilig:** Voeg toe aan .gitignore
2. **Rotate keys regelmatig:** Minimaal elk kwartaal
3. **Monitor usage:** Check Google Cloud Console voor API usage
4. **Set budget alerts:** Stel budget alerts in bij €20/maand

---

## Next Steps

- [ ] Configureer Brevo account
- [ ] Genereer Anthropic API key
- [ ] Registreer KvK API account
- [ ] Maak Google Sheets spreadsheet
- [ ] Add API restrictions to Google Places key
- [ ] Test alle API keys werken correct
