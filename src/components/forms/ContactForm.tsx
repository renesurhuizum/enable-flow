import React, { useState } from 'react';
import { isValidEmail } from '../../utils/validation';

interface ConsultFormData {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
  hasMicrosoft365: string;
  uitdaging: string;
  timeline: string;
}

interface ContactFormProps {
  showContactHeader?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  showContactHeader = true,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState<ConsultFormData>({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    bedrijfsgrootte: '',
    sector: '',
    hasMicrosoft365: '',
    uitdaging: '',
    timeline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!isValidEmail(formData.email)) {
      setSubmitError('Voer een geldig e-mailadres in');
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://renedeboer.app.n8n.cloud/webhook/enableflow-contact';

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'consult',
          submittedAt: new Date().toISOString(),
          ...formData,
        }),
      });

      if (!response.ok) throw new Error('Webhook request failed');

      setSubmitSuccess(true);
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({ naam: '', bedrijf: '', email: '', telefoon: '', bedrijfsgrootte: '', sector: '', hasMicrosoft365: '', uitdaging: '', timeline: '' });
      }, 3000);
    } catch {
      setSubmitError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all';

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-200 to-cyan-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-violet-200 to-violet-100 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {showContactHeader && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Plan een gratis gesprek in
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              30 minuten sparren over jouw AI-kansen. Direct praktische tips en inzichten — vrijblijvend.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg border-2 border-slate-200 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Waarom EnableFlow?
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-500 flex-shrink-0">🏠</span>
                  <span className="text-slate-700">Lokaal in Noord-Nederland — wij komen bij je langs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-violet-500 flex-shrink-0">🔧</span>
                  <span className="text-slate-700">Hands-on implementatie, niet alleen adviezen</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-500 flex-shrink-0">💬</span>
                  <span className="text-slate-700">Geen corporate jargon, we spreken jouw taal</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-teal-500 flex-shrink-0">⚡</span>
                  <span className="text-slate-700">Eerste resultaten binnen 2 weken na start</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-xs text-slate-500 text-center">100% gratis & vrijblijvend</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Gratis AI Consult</h3>
                <p className="text-slate-600">30 minuten sparren over jouw AI-kansen. Direct praktische tips en inzichten.</p>
              </div>

              {submitSuccess && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4">
                  <p className="text-green-800 font-semibold">✓ Bedankt! We nemen binnen 24 uur contact met je op.</p>
                </div>
              )}
              {submitError && (
                <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-4">
                  <p className="text-red-800 font-semibold">⚠ {submitError}</p>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="naam" className="block text-sm font-medium text-slate-700 mb-2">
                      Naam <span className="text-red-500">*</span>
                    </label>
                    <input id="naam" type="text" required value={formData.naam}
                      onChange={(e) => setFormData({...formData, naam: e.target.value})}
                      className={inputClass} placeholder="Je naam" />
                  </div>
                  <div>
                    <label htmlFor="bedrijf" className="block text-sm font-medium text-slate-700 mb-2">
                      Bedrijf <span className="text-red-500">*</span>
                    </label>
                    <input id="bedrijf" type="text" required value={formData.bedrijf}
                      onChange={(e) => setFormData({...formData, bedrijf: e.target.value})}
                      className={inputClass} placeholder="Bedrijfsnaam" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      E-mailadres <span className="text-red-500">*</span>
                    </label>
                    <input id="email" type="email" required value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 outline-none transition-all ${
                        formData.email && !isValidEmail(formData.email)
                          ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                          : 'border-slate-200 focus:border-teal-400 focus:ring-teal-100'
                      }`}
                      placeholder="je@email.nl" />
                    {formData.email && !isValidEmail(formData.email) && (
                      <p className="text-red-600 text-sm mt-1">Voer een geldig e-mailadres in</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="telefoon" className="block text-sm font-medium text-slate-700 mb-2">
                      Telefoonnummer <span className="text-red-500">*</span>
                    </label>
                    <input id="telefoon" type="tel" required value={formData.telefoon}
                      onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                      className={inputClass} placeholder="06-12345678" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bedrijfsgrootte" className="block text-sm font-medium text-slate-700 mb-2">
                      Bedrijfsgrootte <span className="text-red-500">*</span>
                    </label>
                    <select id="bedrijfsgrootte" required value={formData.bedrijfsgrootte}
                      onChange={(e) => setFormData({...formData, bedrijfsgrootte: e.target.value})}
                      className={inputClass}>
                      <option value="">Selecteer...</option>
                      <option value="1-10">1-10 medewerkers</option>
                      <option value="11-50">11-50 medewerkers</option>
                      <option value="51-100">51-100 medewerkers</option>
                      <option value="100+">100+ medewerkers</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="sector" className="block text-sm font-medium text-slate-700 mb-2">
                      Sector <span className="text-red-500">*</span>
                    </label>
                    <select id="sector" required value={formData.sector}
                      onChange={(e) => setFormData({...formData, sector: e.target.value})}
                      className={inputClass}>
                      <option value="">Selecteer...</option>
                      <option value="zakelijke-dienstverlening">Zakelijke dienstverlening</option>
                      <option value="productie-industrie">Productie/industrie</option>
                      <option value="retail-ecommerce">Retail/e-commerce</option>
                      <option value="zorg-welzijn">Zorg & welzijn</option>
                      <option value="overheid-publiek">Overheid/publieke sector</option>
                      <option value="anders">Anders</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Heeft jullie organisatie Microsoft 365? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-6">
                    {[['ja', 'Ja'], ['nee', 'Nee'], ['weet-niet', 'Weet ik niet']].map(([val, label]) => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="microsoft365" value={val}
                          checked={formData.hasMicrosoft365 === val}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Wanneer wil je starten? <span className="text-red-500">*</span>
                  </label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      ['zo-snel-mogelijk', 'Zo snel mogelijk'],
                      ['1-3-maanden', 'Binnen 1-3 maanden'],
                      ['3-6-maanden', 'Binnen 3-6 maanden'],
                      ['geen-planning', 'Nog geen concrete planning'],
                    ].map(([val, label]) => (
                      <label key={val} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="timeline" value={val}
                          checked={formData.timeline === val}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})} />
                        {label}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Wat is je grootste uitdaging? <span className="text-red-500">*</span>
                  </label>
                  <textarea required value={formData.uitdaging}
                    onChange={(e) => setFormData({...formData, uitdaging: e.target.value})}
                    rows={4} className={inputClass}
                    placeholder="Bijvoorbeeld: tijdgebrek, handmatig werk, data-analyse..." />
                </div>

                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                  {isSubmitting ? 'Versturen...' : 'Plan gratis consult in →'}
                </button>

                <div className="mt-4 bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900 mb-2">Hoe werkt het?</p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Vul formulier in (2 min)</li>
                    <li>We nemen binnen 24u contact op</li>
                    <li>Plan gesprek in (online of bij jou langs)</li>
                    <li>30 min sparren + direct tips</li>
                    <li>Daarna vrijblijvend vervolgtraject bespreken</li>
                  </ol>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
