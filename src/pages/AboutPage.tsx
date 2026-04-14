import CTASection from '../components/sections/CTASection';

const values = [
  {
    title: 'Eerlijk & nuchter',
    body: 'Ik vertel wat AI wél kan doen, maar ook wat niet. Geen beloftes die ik niet waar kan maken.',
  },
  {
    title: 'Lokaal & persoonlijk',
    body: 'Ik kom gewoon bij je langs. Noord-Nederland is mijn werkgebied — geen gezichtsloze consultancy uit de Randstad.',
  },
  {
    title: 'Hands-on & praktisch',
    body: 'Niet alleen advies, maar ook echt implementeren. Van installatie tot training — van A tot Z.',
  },
];

const competencies = [
  {
    title: 'Werkprocessen doorgronden',
    sub: 'Analyse & optimalisatie',
    body: 'Snel zien waar tijd verloren gaat. Van offertestroom tot klantcommunicatie — ik breng het in kaart en maak het slimmer.',
  },
  {
    title: 'AI-tools implementeren',
    sub: 'Microsoft Copilot · Claude · n8n',
    body: 'Van oriëntatie tot volledig werkende oplossing. Ik regel de setup, configuratie en koppeling met jouw werkwijze.',
  },
  {
    title: 'Teams begeleiden & trainen',
    sub: 'Adoptie & gedragsverandering',
    body: 'Nieuwe tools werken alleen als je team ze ook echt gebruikt. Ik train, ondersteun en zorg dat de verandering beklijft.',
  },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* 01 — Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Foto */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="/images/rene-profile.jpeg"
                alt="René de Boer - Oprichter Enable Flow"
                className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl mb-6 ring-4 ring-emerald-100"
              />
              <div className="bg-white rounded-xl shadow-md px-6 py-4 border border-slate-100 w-full max-w-xs">
                <p className="font-bold text-[#0d0d0d] text-lg">René de Boer</p>
                <p className="text-emerald-600 text-sm font-medium">Oprichter Enable Flow</p>
                <p className="text-[#555] text-sm mt-1">AI Consultant · Noord-Nederland</p>
                <div className="mt-3 flex gap-4">
                  <a
                    href="tel:+31630534740"
                    className="text-xs text-[#555] hover:text-emerald-600 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    06 30 53 47 40
                  </a>
                  <a
                    href="https://www.linkedin.com/in/renedeboer97/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#555] hover:text-emerald-600 transition-colors"
                  >
                    LinkedIn →
                  </a>
                </div>
              </div>
            </div>

            {/* Intro tekst */}
            <div>
              <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
                Over mij
              </p>
              <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
                Ik help Noord-Nederlandse bedrijven de AI-slag maken.
              </h1>
              <p className="text-lg text-[#555] leading-[1.7] mb-4">
                AI-ontwikkelingen gaan sneller dan ooit. Bedrijven die dat nu omarmen, krijgen een voorsprong die tot voor kort simpelweg niet mogelijk was. Ik zag die kans — en besloot Noord-Nederlandse bedrijven te helpen hem concreet te pakken.
              </p>
              <p className="text-lg text-[#555] leading-[1.7]">
                Of je nu wil starten met Microsoft Copilot 365, een slim klantproces wil automatiseren via n8n, of gewoon wil weten wat AI voor jóuw bedrijf kan doen — ik zorg dat het écht werkt. Hands-on, persoonlijk, zonder gedoe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Werkwijze */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0d0d0d] mb-10">
            Mijn aanpak
          </h2>
          <div className="space-y-4">
            {values.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border-l-4 border-emerald-400 shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg aria-hidden="true" className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#0d0d0d] mb-1">{item.title}</h3>
                  <p className="text-[#555] text-sm leading-[1.7]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Competenties */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black tracking-[-0.04em] text-[#0d0d0d] mb-3">
            Wat ik voor je doe
          </h2>
          <p className="text-[#555] mb-10">Van analyse tot implementatie en training.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {competencies.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center mb-4">
                  <svg aria-hidden="true" className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0d0d0d] mb-1">{card.title}</h3>
                <p className="text-emerald-600 text-sm font-medium mb-3">{card.sub}</p>
                <p className="text-[#555] text-sm leading-[1.7]">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — CTA */}
      <CTASection />

    </div>
  );
};
