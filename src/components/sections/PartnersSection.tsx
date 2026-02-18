import React from 'react';

const partners = [
  {
    name: 'OpenAI / ChatGPT',
    description: 'De populairste AI-assistent ter wereld, voor tekst, beeld en code generatie.',
    gradient: 'from-emerald-400 to-teal-500',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    ),
  },
  {
    name: 'Claude / Anthropic',
    description: 'Geavanceerde AI voor complexe analyse, strategie en veilige content creatie.',
    gradient: 'from-orange-400 to-amber-500',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M17.303 3.834c-.237-.391-.59-.726-1.032-.726H7.729c-.442 0-.795.335-1.032.726L1.156 13.5c-.237.391-.237.865 0 1.256l5.541 9.392c.237.391.59.726 1.032.726h8.542c.442 0 .795-.335 1.032-.726l5.541-9.392c.237-.391.237-.865 0-1.256L17.303 3.834zM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
      </svg>
    ),
  },
  {
    name: 'Gemini / Google',
    description: 'Multimodale AI voor tekst, beeld en data-analyse binnen Google Workspace.',
    gradient: 'from-blue-400 to-indigo-500',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm-.182 5.357c1.462 0 2.692.498 3.69 1.342l-1.586 1.544c-.648-.548-1.36-.823-2.104-.823-1.809 0-3.286 1.404-3.286 3.274 0 1.87 1.477 3.274 3.286 3.274.995 0 1.703-.298 2.21-.705.494-.396.82-.975.94-1.691H11.82V9.274h5.53c.066.355.1.72.1 1.1 0 1.57-.513 2.882-1.407 3.786-1.004 1.015-2.388 1.583-4.224 1.583-3.31 0-6.096-2.727-6.096-6.04 0-3.313 2.786-6.04 6.096-6.04z" />
      </svg>
    ),
  },
  {
    name: 'n8n',
    description: 'Workflow automatisering die al jouw tools en AI-systemen naadloos verbindt.',
    gradient: 'from-rose-400 to-rose-500',
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.74 3.194L18.5 7.09c.395.267.638.72.638 1.204v7.412c0 .484-.243.937-.638 1.204l-5.76 3.896a1.396 1.396 0 0 1-1.48 0l-5.76-3.896A1.448 1.448 0 0 1 4.862 15.706V8.294c0-.484.243-.937.638-1.204l5.76-3.896a1.396 1.396 0 0 1 1.48 0zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
      </svg>
    ),
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 px-4 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
            Onze Technology Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Powered by de beste AI-platforms
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We werken met de krachtigste AI-tools en automatiseringsplatforms om jouw bedrijf future-proof te maken
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Logo icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${partner.gradient} rounded-xl flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {partner.logo}
              </div>

              {/* Partner name */}
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <p className="text-sm text-slate-500 font-medium">Gecertificeerd & ervaren met:</p>
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-sm font-medium">
            <span>Microsoft 365</span>
            <span className="hidden sm:inline">|</span>
            <span>Google Workspace</span>
            <span className="hidden sm:inline">|</span>
            <span>Zapier</span>
            <span className="hidden sm:inline">|</span>
            <span>Make</span>
          </div>
        </div>
      </div>
    </section>
  );
};
