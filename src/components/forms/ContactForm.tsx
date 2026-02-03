import React, { useState } from 'react';
import { FormData } from './types';
import { isValidEmail } from '../../utils/validation';

interface ContactFormProps {
  defaultTab?: 'consult' | 'scan';
  showContactHeader?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultTab = 'consult',
  showContactHeader = true,
}) => {
  const [activeTab, setActiveTab] = useState<'consult' | 'scan'>(defaultTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState<FormData>({
    naam: '',
    bedrijf: '',
    email: '',
    telefoon: '',
    bedrijfsgrootte: '',
    sector: '',
    hasMicrosoft365: '',
    uitdaging: '',
    timeline: '',
    // Scan-only fields
    aiUsage: '',
    doelen: [],
  });

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent, formType: 'consult' | 'scan') => {
    e.preventDefault();
    setSubmitError('');

    // Validate email
    if (!isValidEmail(formData.email)) {
      setSubmitError('Voer een geldig e-mailadres in');
      return;
    }

    // Validate required fields for scan
    if (formType === 'scan') {
      if (!formData.aiUsage) {
        setSubmitError('Beantwoord alle verplichte vragen');
        return;
      }
      if (formData.doelen.length === 0) {
        setSubmitError('Selecteer minimaal één doel');
        return;
      }
    }

    setIsSubmitting(true);

    try {
      // Placeholder: In production this would send to Convex
      console.log('Form submission:', { formType, formData });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitSuccess(true);

      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          naam: '',
          bedrijf: '',
          email: '',
          telefoon: '',
          bedrijfsgrootte: '',
          sector: '',
          hasMicrosoft365: '',
          uitdaging: '',
          timeline: '',
          aiUsage: '',
          doelen: [],
        });
      }, 3000);
    } catch (error) {
      setSubmitError('Er ging iets mis. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        {showContactHeader && (
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Welke start past bij jou?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kies tussen een vrijblijvend consult of een grondige AI Readiness Scan met persoonlijk rapport.
            </p>
          </div>
        )}

        {/* Tab Interface */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-lg border-2 border-slate-200">
            <button
              data-tab="consult"
              onClick={() => setActiveTab('consult')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'consult'
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              💬 Gratis Consult
            </button>
            <button
              data-tab="scan"
              onClick={() => setActiveTab('scan')}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                activeTab === 'scan'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              📊 AI Readiness Scan
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left sidebar - Waarom EnableFlow */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-lg border-2 border-slate-200 sticky top-24">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Waarom EnableFlow?
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-teal-500 font-bold flex-shrink-0">🏠</span>
                  <span className="text-slate-700">Lokaal in Noord-Nederland - wij komen bij je langs</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold flex-shrink-0">🔧</span>
                  <span className="text-slate-700">Hands-on implementatie, niet alleen adviezen</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold flex-shrink-0">💬</span>
                  <span className="text-slate-700">Geen corporate jargon, we spreken jouw taal</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-500 font-bold flex-shrink-0">⚡</span>
                  <span className="text-slate-700">Snel schakelen, geen langdradige trajecten</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold flex-shrink-0">🎯</span>
                  <span className="text-slate-700">Specialisatie in Microsoft 365 omgevingen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Form */}
          <div className="lg:col-span-2">
            {/* Trust Badges - Prominent */}
            <div className="bg-gradient-to-r from-teal-50 via-purple-50 to-pink-50 rounded-2xl p-6 mb-6 border-2 border-teal-200">
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <span className="font-bold text-slate-900 block">100% Gratis & Vrijblijvend</span>
                    <span className="text-slate-600">Geen verborgen kosten</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Persoonlijk Advies</span>
                    <span className="text-slate-600">Geen sjablonen</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Response binnen 24 uur</span>
                    <span className="text-slate-600">Snel antwoord</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✓</span>
                  <div>
                    <span className="font-bold text-slate-900 block">Lokaal in Noord-Nederland</span>
                    <span className="text-slate-600">Of online</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'consult' && (
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-teal-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Gratis AI Consult</h3>
                  <p className="text-slate-600">
                    30 minuten sparren over jouw AI-kansen. Direct praktische tips en inzichten.
                  </p>
                </div>

                {/* Success/Error Messages */}
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

                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, 'consult')}>
                  {/* Basic Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Naam <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.naam}
                        onChange={(e) => setFormData({...formData, naam: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                        placeholder="Je naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Bedrijf <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.bedrijf}
                        onChange={(e) => setFormData({...formData, bedrijf: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                        placeholder="Bedrijfsnaam"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 outline-none transition-all ${
                          formData.email && !isValidEmail(formData.email)
                            ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                            : 'border-slate-200 focus:border-teal-400 focus:ring-teal-100'
                        }`}
                        placeholder="je@email.nl"
                      />
                      {formData.email && !isValidEmail(formData.email) && (
                        <p className="text-red-600 text-sm mt-1">Voer een geldig e-mailadres in</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefoon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefoon}
                        onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                        placeholder="06-12345678"
                      />
                    </div>
                  </div>

                  {/* Context Fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Bedrijfsgrootte <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.bedrijfsgrootte}
                        onChange={(e) => setFormData({...formData, bedrijfsgrootte: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                      >
                        <option value="">Selecteer...</option>
                        <option value="1-10">1-10 medewerkers</option>
                        <option value="11-50">11-50 medewerkers</option>
                        <option value="51-100">51-100 medewerkers</option>
                        <option value="100+">100+ medewerkers</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Sector <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                      >
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
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="microsoft365"
                          value="ja"
                          checked={formData.hasMicrosoft365 === 'ja'}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})}
                          className="mr-2"
                        />
                        Ja
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="microsoft365"
                          value="nee"
                          checked={formData.hasMicrosoft365 === 'nee'}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})}
                          className="mr-2"
                        />
                        Nee
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="microsoft365"
                          value="weet-niet"
                          checked={formData.hasMicrosoft365 === 'weet-niet'}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})}
                          className="mr-2"
                        />
                        Weet ik niet
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Wanneer wil je starten? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline"
                          value="zo-snel-mogelijk"
                          checked={formData.timeline === 'zo-snel-mogelijk'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Zo snel mogelijk
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline"
                          value="1-3-maanden"
                          checked={formData.timeline === '1-3-maanden'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Binnen 1-3 maanden
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline"
                          value="3-6-maanden"
                          checked={formData.timeline === '3-6-maanden'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Binnen 3-6 maanden
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline"
                          value="geen-planning"
                          checked={formData.timeline === 'geen-planning'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Nog geen concrete planning
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Wat is je grootste uitdaging? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.uitdaging}
                      onChange={(e) => setFormData({...formData, uitdaging: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all"
                      placeholder="Bijvoorbeeld: tijdgebrek, handmatig werk, data-analyse..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Versturen...' : 'Plan gratis consult in →'}
                  </button>

                  {/* How it works - Consult */}
                  <div className="mt-6 bg-slate-50 rounded-xl p-4 text-sm text-slate-600">
                    <p className="font-semibold text-slate-900 mb-2">Hoe werkt het?</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Vul formulier in (2 min)</li>
                      <li>We nemen binnen 24u contact op</li>
                      <li>Plan gesprek in (online of bij jou)</li>
                      <li>30 min sparren + direct tips</li>
                      <li>Daarna vrijblijvend vervolgtraject bespreken</li>
                    </ol>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'scan' && (
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-purple-200">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">AI Readiness Scan</h3>
                  <p className="text-slate-600 mb-4">
                    Ontdek jouw AI-potentieel met een persoonlijk rapport inclusief readiness score (0-100).
                  </p>
                  <div className="bg-purple-50 rounded-xl p-4 text-sm">
                    <p className="font-semibold text-purple-900 mb-2">Je ontvangt:</p>
                    <ul className="space-y-1 text-purple-800">
                      <li>• Je AI Readiness Score (0-100)</li>
                      <li>• Top 3 kansen specifiek voor jouw bedrijf</li>
                      <li>• Concrete aanbevelingen voor de volgende stappen</li>
                      <li>• Indicatieve ROI-schatting</li>
                      <li>• 30 min persoonlijk gesprek om rapport door te nemen</li>
                    </ul>
                  </div>
                </div>

                {/* Success/Error Messages */}
                {submitSuccess && (
                  <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-4">
                    <p className="text-green-800 font-semibold">✓ Bedankt! Je ontvangt binnen 48 uur je persoonlijke AI Readiness rapport.</p>
                  </div>
                )}
                {submitError && (
                  <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-4">
                    <p className="text-red-800 font-semibold">⚠ {submitError}</p>
                  </div>
                )}

                <form className="space-y-4" onSubmit={(e) => handleSubmit(e, 'scan')}>
                  {/* All Consult fields + Scan-specific fields */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Naam <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.naam}
                        onChange={(e) => setFormData({...formData, naam: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                        placeholder="Je naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Bedrijf <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.bedrijf}
                        onChange={(e) => setFormData({...formData, bedrijf: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                        placeholder="Bedrijfsnaam"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        E-mail <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 outline-none transition-all ${
                          formData.email && !isValidEmail(formData.email)
                            ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
                            : 'border-slate-200 focus:border-purple-400 focus:ring-purple-100'
                        }`}
                        placeholder="je@email.nl"
                      />
                      {formData.email && !isValidEmail(formData.email) && (
                        <p className="text-red-600 text-sm mt-1">Voer een geldig e-mailadres in</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Telefoon <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.telefoon}
                        onChange={(e) => setFormData({...formData, telefoon: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                        placeholder="06-12345678"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Bedrijfsgrootte <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.bedrijfsgrootte}
                        onChange={(e) => setFormData({...formData, bedrijfsgrootte: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      >
                        <option value="">Selecteer...</option>
                        <option value="1-10">1-10 medewerkers</option>
                        <option value="11-50">11-50 medewerkers</option>
                        <option value="51-100">51-100 medewerkers</option>
                        <option value="100+">100+ medewerkers</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Sector <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={formData.sector}
                        onChange={(e) => setFormData({...formData, sector: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      >
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
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="microsoft365-scan"
                          value="ja"
                          checked={formData.hasMicrosoft365 === 'ja'}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})}
                          className="mr-2"
                        />
                        Ja
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="microsoft365-scan"
                          value="nee"
                          checked={formData.hasMicrosoft365 === 'nee'}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})}
                          className="mr-2"
                        />
                        Nee
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="microsoft365-scan"
                          value="weet-niet"
                          checked={formData.hasMicrosoft365 === 'weet-niet'}
                          onChange={(e) => setFormData({...formData, hasMicrosoft365: e.target.value})}
                          className="mr-2"
                        />
                        Weet ik niet
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Wanneer wil je starten? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid sm:grid-cols-2 gap-3">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline-scan"
                          value="zo-snel-mogelijk"
                          checked={formData.timeline === 'zo-snel-mogelijk'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Zo snel mogelijk
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline-scan"
                          value="1-3-maanden"
                          checked={formData.timeline === '1-3-maanden'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Binnen 1-3 maanden
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline-scan"
                          value="3-6-maanden"
                          checked={formData.timeline === '3-6-maanden'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Binnen 3-6 maanden
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="timeline-scan"
                          value="geen-planning"
                          checked={formData.timeline === 'geen-planning'}
                          onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                          className="mr-2"
                        />
                        Nog geen concrete planning
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Wat is je grootste uitdaging? <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.uitdaging}
                      onChange={(e) => setFormData({...formData, uitdaging: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="Bijvoorbeeld: tijdgebrek, handmatig werk, data-analyse..."
                    ></textarea>
                  </div>

                  {/* SCAN-SPECIFIC FIELDS */}
                  <div className="border-t-2 border-purple-200 pt-6">
                    <p className="font-semibold text-purple-900 mb-4">📊 Extra vragen voor jouw AI Readiness Score</p>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Gebruikt je team al AI-tools? <span className="text-red-500">*</span>
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="aiUsage"
                            value="nee-nog-niet"
                            checked={formData.aiUsage === 'nee-nog-niet'}
                            onChange={(e) => setFormData({...formData, aiUsage: e.target.value})}
                            className="mr-2"
                          />
                          Nee, nog niet
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="aiUsage"
                            value="ja-incidenteel"
                            checked={formData.aiUsage === 'ja-incidenteel'}
                            onChange={(e) => setFormData({...formData, aiUsage: e.target.value})}
                            className="mr-2"
                          />
                          Ja, incidenteel (ChatGPT e.d.)
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="aiUsage"
                            value="ja-structureel"
                            checked={formData.aiUsage === 'ja-structureel'}
                            onChange={(e) => setFormData({...formData, aiUsage: e.target.value})}
                            className="mr-2"
                          />
                          Ja, structureel voor specifieke taken
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="aiUsage"
                            value="ja-geintegreerd"
                            checked={formData.aiUsage === 'ja-geintegreerd'}
                            onChange={(e) => setFormData({...formData, aiUsage: e.target.value})}
                            className="mr-2"
                          />
                          Ja, volledig geïntegreerd in werkprocessen
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Wat wil je bereiken met AI? <span className="text-red-500">*</span> <span className="text-slate-500 text-xs">(meerdere mogelijk)</span>
                      </label>
                      <div className="space-y-2">
                        {['Tijdsbesparing / efficiëntie', 'Betere besluitvorming / data-analyse', 'Klantenservice verbeteren', 'Nieuwe producten/diensten', 'Kostenreductie', 'Anders'].map((doel) => (
                          <label key={doel} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={formData.doelen.includes(doel)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setFormData({...formData, doelen: [...formData.doelen, doel]});
                                } else {
                                  setFormData({...formData, doelen: formData.doelen.filter(d => d !== doel)});
                                }
                              }}
                              className="mr-2"
                            />
                            {doel}
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Versturen...' : 'Vraag gratis AI Scan aan →'}
                  </button>

                  {/* How it works - Scan */}
                  <div className="mt-6 bg-purple-50 rounded-xl p-4 text-sm text-purple-800">
                    <p className="font-semibold text-purple-900 mb-2">Hoe werkt het?</p>
                    <ol className="list-decimal list-inside space-y-1">
                      <li>Vul uitgebreide scan in (5-10 min)</li>
                      <li>We analyseren je antwoorden</li>
                      <li>Je ontvangt persoonlijk rapport (binnen 48u)</li>
                      <li>Plan gesprek in om rapport door te nemen (30 min)</li>
                      <li>Daarna vrijblijvend vervolgtraject bespreken</li>
                    </ol>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
