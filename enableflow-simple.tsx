import React, { useState } from 'react';

// EnableFlow AI - Simple One-Pager
const EnableFlowSimple = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'consult' | 'scan'>('consult');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
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
    doelen: [] as string[],
  });

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 via-cyan-400 to-purple-500 rounded-lg"></div>
              <span className="text-xl font-bold">
                <span className="text-slate-800">Enable</span>
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Flow</span>
                <span className="text-slate-500 text-lg"> AI</span>
              </span>
            </div>

            <a
              href="#contact"
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Gratis AI Consult
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 via-pink-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Supercharge the way you work
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            AI Consultancy voor MKB in Noord-Nederland. We helpen je slimmer werken met Microsoft Copilot 365, Claude en Gemini.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
                // Set active tab to 'consult' when clicking this CTA
                setTimeout(() => {
                  const consultTab = document.querySelector('[data-tab="consult"]');
                  if (consultTab) (consultTab as HTMLElement).click();
                }, 500);
              }}
              className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Gratis AI Consult →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
                // Set active tab to 'scan' when clicking this CTA
                setTimeout(() => {
                  const scanTab = document.querySelector('[data-tab="scan"]');
                  if (scanTab) (scanTab as HTMLElement).click();
                }, 500);
              }}
              className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-purple-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all duration-200"
            >
              AI Readiness Scan →
            </a>
          </div>
        </div>
      </section>

      {/* Partners Section - Logo Bar */}
      <section className="py-12 px-4 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-slate-600 mb-8">
            Wij implementeren en trainen in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
            {/* Microsoft Logo */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg className="h-8" viewBox="0 0 108 23" fill="currentColor">
                <path d="M10.85 0H0v10.85h10.85V0zm12.15 0H12.15v10.85H23V0zM10.85 12.15H0V23h10.85V12.15zm12.15 0H12.15V23H23V12.15z" fill="#5E5E5E"/>
              </svg>
            </div>

            {/* Claude (Anthropic) Logo */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg className="h-8" viewBox="0 0 120 30" fill="none">
                <rect width="24" height="24" rx="6" fill="#CC9B7A"/>
                <text x="32" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" fill="#1a1a1a">Claude</text>
              </svg>
            </div>

            {/* Google Gemini Logo */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg className="h-8" viewBox="0 0 120 30" fill="none">
                <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                <circle cx="12" cy="12" r="6" fill="#EA4335"/>
                <text x="28" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" fill="#1a1a1a">Gemini</text>
              </svg>
            </div>

            {/* OpenAI Logo */}
            <div className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <svg className="h-8" viewBox="0 0 120 30" fill="none">
                <circle cx="12" cy="12" r="10" fill="#10A37F"/>
                <text x="28" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontSize="16" fontWeight="600" fill="#1a1a1a">OpenAI</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* AI Benefits Section - SEO Rich Content */}
      <section className="py-16 px-4 bg-gradient-to-br from-white via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Waarom AI implementeren in jouw bedrijf?
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                AI-tools zoals Microsoft Copilot 365, Claude en Gemini transformeren de manier waarop MKB-bedrijven werken. Van automatisering van repetitieve taken tot intelligente data-analyse - AI helpt je team productiever en slimmer te werken.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">30-40% tijdsbesparing</h3>
                    <p className="text-slate-600 text-sm">Automatiseer repetitieve taken zoals e-mail drafting, rapportages en data-entry met AI-assistentie.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">💡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Betere beslissingen</h3>
                    <p className="text-slate-600 text-sm">AI analyseert grote hoeveelheden data en geeft actionable insights voor strategische besluitvorming.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">🚀</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Concurrentievoordeel</h3>
                    <p className="text-slate-600 text-sm">Bedrijven die nu AI adopteren, zijn klaar voor de toekomst en blijven hun concurrenten voor.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    AI-tools die wij implementeren
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">M</span>
                        </div>
                        <h4 className="font-bold text-white">Microsoft Copilot 365</h4>
                      </div>
                      <p className="text-slate-300 text-sm">AI-assistent geïntegreerd in Word, Excel, PowerPoint, Outlook en Teams.</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">C</span>
                        </div>
                        <h4 className="font-bold text-white">Claude (Anthropic)</h4>
                      </div>
                      <p className="text-slate-300 text-sm">Geavanceerde AI voor complexe analyse, strategie en content creatie.</p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">G</span>
                        </div>
                        <h4 className="font-bold text-white">Gemini (Google)</h4>
                      </div>
                      <p className="text-slate-300 text-sm">Multimodale AI voor tekst, beeld en data-analyse binnen Google Workspace.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Waarom kiezen voor ons?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Lokaal, persoonlijk en resultaatgericht - AI-implementatie zoals het hoort.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* USP 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Lokaal & Persoonlijk</h3>
              <p className="text-slate-600 text-sm">Noord-Nederland, wij komen langs</p>
            </div>

            {/* USP 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Hands-on</h3>
              <p className="text-slate-600 text-sm">Niet alleen advies, ook implementatie</p>
            </div>

            {/* USP 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Geen AI-hype</h3>
              <p className="text-slate-600 text-sm">Nuchter, eerlijk over wat AI wel/niet kan</p>
            </div>

            {/* USP 4 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Betaalbaar</h3>
              <p className="text-slate-600 text-sm">Flexibele tarieven voor MKB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Van strategie tot implementatie - we begeleiden je volledige AI-transformatie met hands-on ondersteuning en praktische oplossingen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Service 1: Consultancy */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Consultancy</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Gratis AI Readiness Scan</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>AI Strategie Workshop</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Business case ontwikkeling</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-slate-500">Prijs op aanvraag</p>
              </div>
            </div>

            {/* Service 2: Implementation (Popular) */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-purple-400 transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl z-20 animate-pulse">
                ⭐ Populair
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative z-10 mt-2">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Implementatie</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-purple-500 mr-2 font-bold">✓</span>
                    <span>Microsoft Copilot 365 uitrol</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-purple-500 mr-2 font-bold">✓</span>
                    <span>Procesautomatisering</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-purple-500 mr-2 font-bold">✓</span>
                    <span>Custom AI-oplossingen</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-slate-500">Prijs op aanvraag</p>
              </div>
            </div>

            {/* Service 3: Training */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Training</h3>
                <ul className="space-y-2 mb-6">
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-pink-500 mr-2 font-bold">✓</span>
                    <span>Prompt Engineering Basics</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-pink-500 mr-2 font-bold">✓</span>
                    <span>AI voor Management</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-pink-500 mr-2 font-bold">✓</span>
                    <span>Copilot voor teams</span>
                  </li>
                </ul>
                <p className="text-sm font-medium text-slate-500">Prijs op aanvraag</p>
              </div>
            </div>
          </div>

          {/* Additional SEO Content - How we work */}
          <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
              Hoe werken wij?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  1
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Analyse & Advies</h4>
                <p className="text-slate-600 text-sm">
                  We starten met een gratis AI Readiness Scan om jouw huidige situatie, processen en kansen in kaart te brengen.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  2
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Strategie & Plan</h4>
                <p className="text-slate-600 text-sm">
                  Op basis van de scan ontwikkelen we samen een concrete AI-strategie met haalbare doelen en verwachte ROI.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 via-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  3
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Implementatie & Training</h4>
                <p className="text-slate-600 text-sm">
                  We rollen AI-tools uit, trainen jouw team en zorgen voor succesvolle adoptie met doorlopende ondersteuning.
                </p>
              </div>
            </div>

            <div className="mt-10 bg-gradient-to-r from-teal-50 via-purple-50 to-pink-50 rounded-xl p-6 border-2 border-teal-200">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Waarom EnableFlow AI?
              </h4>
              <p className="text-slate-700 mb-4">
                Als lokaal AI-consultancy bureau in Noord-Nederland kennen we de uitdagingen van MKB-bedrijven. We spreken jouw taal, geen corporate jargon. We komen bij je langs, denken mee en implementeren hands-on. Geen langdradige adviezen, maar concrete resultaten.
              </p>
              <div className="grid sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-teal-500 font-bold">✓</span>
                  <span className="text-slate-700">Specialisatie in Microsoft 365 omgevingen</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-500 font-bold">✓</span>
                  <span className="text-slate-700">Ervaring met Claude & Gemini integraties</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-500 font-bold">✓</span>
                  <span className="text-slate-700">Praktische workshops & hands-on training</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-500 font-bold">✓</span>
                  <span className="text-slate-700">Lokaal in Noord-Nederland (persoonlijke service)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Welke start past bij jou?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kies tussen een vrijblijvend consult of een grondige AI Readiness Scan met persoonlijk rapport.
            </p>
          </div>

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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-lg text-slate-600">
              Alles wat je wilt weten over ons gratis consult en AI Readiness Scan.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Wat kost het gratis consult/scan?',
                a: 'Echt gratis, geen verborgen kosten. We bieden dit aan om kennismakingen laagdrempelig te maken en bedrijven te helpen hun AI-potentieel te ontdekken.'
              },
              {
                q: 'Hoe lang duurt een consult/scan?',
                a: 'Het consult duurt 30 minuten. Voor de scan vul je een vragenlijst in (5-10 minuten), waarna je binnen 48 uur een persoonlijk rapport ontvangt. Daarna plannen we een gesprek van 30 minuten in om het rapport door te nemen.'
              },
              {
                q: 'Moet ik iets voorbereiden?',
                a: 'Nee, kom zoals je bent. Het kan wel handig zijn om een lijst te maken van concrete uitdagingen of processen waar je AI zou willen inzetten.'
              },
              {
                q: 'Komen jullie ook bij ons langs?',
                a: 'Ja! We dekken heel Noord-Nederland en komen graag bij je langs voor een persoonlijk gesprek. Online sparren via Teams/Zoom kan natuurlijk ook.'
              },
              {
                q: 'Wat gebeurt er na het gesprek?',
                a: 'Na het gesprek bespreken we vrijblijvend een mogelijk vervolgtraject. Geen druk of verplichtingen - je bepaalt zelf of en wanneer je verder wilt.'
              },
              {
                q: 'Ik heb nog geen Microsoft 365, kan dat?',
                a: 'Zeker! We helpen je ook graag met de business case voor aanschaf en kunnen adviseren over alternatieven zoals Google Workspace met Gemini.'
              }
            ].map((faq, index) => (
              <div key={index} className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-teal-300 transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-6 h-6 text-teal-500 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-slate-50 border-t-2 border-slate-200">
                    <p className="text-slate-700">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center bg-gradient-to-r from-teal-50 via-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-teal-200">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Nog een andere vraag?
            </h3>
            <p className="text-slate-600 mb-4">
              Neem gerust contact met ons op. We helpen je graag verder!
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-block bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Stel je vraag →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-400 via-cyan-400 to-purple-500 rounded-lg"></div>
                <span className="text-lg font-bold text-white">
                  Enable<span className="text-teal-400">Flow</span> <span className="text-slate-500">AI</span>
                </span>
              </div>
              <p className="text-sm">
                AI Consultancy voor MKB in Noord-Nederland. Slimmer werken met AI.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm mb-2">📍 Noord-Nederland</p>
              <p className="text-sm mb-2">📧 info@enableflow.ai</p>
              <p className="text-sm">📞 Op aanvraag</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Regio</h4>
              <p className="text-sm">
                Groningen • Leeuwarden • Drachten • Assen • Heerenveen
              </p>
              <p className="text-sm mt-2 text-slate-500">
                Noord-Nederland
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>© 2024 EnableFlow AI. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnableFlowSimple;
