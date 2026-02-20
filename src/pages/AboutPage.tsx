import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">

      {/* Hero sectie */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Foto kolom */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHeo-N8tWKdzQ/profile-displayphoto-crop_800_800/B4EZwJKiB8GcAI-/0/1769680284699?e=1772668800&v=beta&t=2cI_Rd47kfuxD_gUJJgt27gi6fro6rjm2DK3ZYwlj7s"
                alt="René de Boer - Oprichter EnableFlow AI"
                className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl mb-6 ring-4 ring-teal-100"
              />

              {/* Naamkaartje */}
              <div className="bg-white rounded-xl shadow-md px-6 py-4 border border-slate-100 w-full max-w-xs">
                <p className="font-bold text-slate-900 text-lg">René de Boer</p>
                <p className="text-teal-600 text-sm font-medium">Oprichter EnableFlow AI</p>
                <p className="text-slate-500 text-sm mt-1">AI Consultant & Trainer · Noord-Nederland</p>
                <div className="mt-3 flex gap-3">
                  <a
                    href="tel:+31630534740"
                    className="text-xs text-slate-600 hover:text-teal-600 transition-colors flex items-center gap-1"
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
                    className="text-xs text-slate-600 hover:text-violet-600 transition-colors flex items-center gap-1"
                  >
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Intro tekst kolom */}
            <div>
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
                Over mij
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Hallo, ik ben René
              </h1>
              <p className="text-lg text-slate-700 mb-4 leading-relaxed">
                Ik help Noord-Nederlandse ondernemers concreet resultaat halen uit AI. Niet via een theoretisch adviesrapport, maar gewoon langs komen, meedenken en samen aan de slag gaan.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Of je nu wil starten met Microsoft Copilot 365, een slim klantenservice-proces wil bouwen, of simpelweg wil weten wat AI voor jóuw bedrijf kan doen — ik zorg dat het werkt. Praktisch, eerlijk en zonder hype.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verhaal sectie */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Links: verhaal */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Waarom EnableFlow?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  EnableFlow is opgericht vanuit een eenvoudige overtuiging: AI moet ook beschikbaar zijn voor het MKB. Niet alleen voor grote bedrijven met een eigen IT-afdeling, maar ook voor de accountant, de aannemer of het marketingbureau in de regio.
                </p>
                <p>
                  Wat ik heb geleerd: technologie werkt alleen als mensen er ook echt mee werken. Niet via een dik rapport, maar door naast je te staan, mee te denken en het samen te proberen.
                </p>
                <p>
                  Dat is ook hoe ik werk bij EnableFlow: praktisch, persoonlijk en zonder hype. Ik kom gewoon bij je langs in Groningen, Friesland of Drenthe, en we kijken samen wat AI voor jóuw bedrijf kan betekenen.
                </p>
              </div>
            </div>

            {/* Rechts: kernwaarden */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mijn aanpak in het kort</h3>

              <div className="flex items-start gap-4 p-5 bg-gradient-to-b from-teal-50 to-white rounded-xl border-l-4 border-teal-400 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Eerlijk & nuchter</h4>
                  <p className="text-slate-600 text-sm mt-1">Ik vertel je wat AI wél kan doen, maar ook wat niet. Geen beloftes die ik niet waar kan maken.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gradient-to-b from-slate-50 to-white rounded-xl border-l-4 border-teal-400 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Lokaal & persoonlijk</h4>
                  <p className="text-slate-600 text-sm mt-1">Ik kom gewoon bij je langs. Noord-Nederland is mijn werkgebied — geen gezichtsloze consultancy uit de Randstad.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gradient-to-b from-violet-50 to-white rounded-xl border-l-4 border-violet-400 shadow-sm">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Hands-on & praktisch</h4>
                  <p className="text-slate-600 text-sm mt-1">Niet alleen advies, maar ook echt implementeren. Van installatie tot training — ik help van A tot Z.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competentie kaarten */}
      <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Wat ik voor je doe</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Van analyse tot implementatie en training — ik begeleid je bij elke stap.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            {/* Kaart 1: Werkprocessen */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Werkprocessen doorgronden</h3>
              <p className="text-teal-600 text-sm font-medium mb-3">Analyse & optimalisatie</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Snel zien waar tijd verloren gaat. Van offertestroom tot klantcommunicatie — ik breng het in kaart en maak het slimmer.
              </p>
            </div>

            {/* Kaart 2: AI-tools */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-teal-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">AI-tools implementeren</h3>
              <p className="text-teal-600 text-sm font-medium mb-3">Microsoft Copilot · Claude · Gemini</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Van oriëntatie tot volledig werkende oplossing. Ik regel de setup, configuratie en koppeling met jouw werkwijze.
              </p>
            </div>

            {/* Kaart 3: Teams */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-xl hover:border-violet-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Teams begeleiden & trainen</h3>
              <p className="text-violet-600 text-sm font-medium mb-3">Adoptie & gedragsverandering</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Nieuwe tools werken alleen als je team ze ook echt gebruikt. Ik train, ondersteun en zorg dat de verandering beklijft.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Benieuwd wat AI voor jou kan doen?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Plan een gratis kennismakingsgesprek. Ik kom bij je langs of we spreken af via Teams — geheel vrijblijvend.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Plan een gesprek →
            </Link>
            <a
              href="tel:+31630534740"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-200 backdrop-blur-sm"
            >
              📞 06 30 53 47 40
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
