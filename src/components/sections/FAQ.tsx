import React, { useState } from 'react';

export const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
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
  ];

  return (
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

        <div className="space-y-4" role="list">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-slate-200 rounded-xl overflow-hidden hover:border-teal-300 transition-all" role="listitem">
              <h3>
                <button
                  id={`faq-trigger-${index}`}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-panel-${index}`}
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
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </h3>
              <div
                id={`faq-panel-${index}`}
                role="region"
                aria-labelledby={`faq-trigger-${index}`}
                className={`overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-slate-50 border-t-2 border-slate-200">
                  <p className="text-slate-700">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-12 text-center bg-amber-50 rounded-2xl p-8 border-2 border-amber-100">
          <h3 className="text-xl font-bold text-slate-900 mb-2">
            Nog een andere vraag?
          </h3>
          <p className="text-slate-600 mb-4">
            Neem gerust contact met ons op. We helpen je graag verder!
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            Stel je vraag →
          </a>
        </div>
      </div>
    </section>
  );
};
