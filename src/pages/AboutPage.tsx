import React from 'react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">

      {/* Hero sectie */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Foto kolom */}
            <div className="flex flex-col items-center md:items-start">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQHeo-N8tWKdzQ/profile-displayphoto-crop_800_800/B4EZwJKiB8GcAI-/0/1769680284699?e=1772668800&v=beta&t=2cI_Rd47kfuxD_gUJJgt27gi6fro6rjm2DK3ZYwlj7s"
                alt="René de Boer - Oprichter EnableFlow AI"
                className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-lg mb-6"
              />

              {/* Naamkaartje */}
              <div className="bg-white rounded-xl shadow-md px-6 py-4 border border-stone-100 w-full max-w-xs">
                <p className="font-bold text-slate-900 text-lg">René de Boer</p>
                <p className="text-teal-600 text-sm font-medium">Oprichter EnableFlow AI</p>
                <p className="text-slate-500 text-sm mt-1">Business Analist · Noord-Nederland</p>
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
                    className="text-xs text-slate-600 hover:text-blue-600 transition-colors flex items-center gap-1"
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
                Als Business Analist bij de Provincie Groningen werk ik dagelijks met processen, mensen en technologie. Ik zie van binnenuit hoe organisaties wrstelen met efficiëntie — en hoe groot het verschil is als je de juiste tools op de juiste manier inzet.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Toen AI-tools als Microsoft Copilot, Claude en Gemini steeds krachtiger werden, zag ik direct de kansen voor Noord-Nederlandse ondernemers. Niet als hype, maar als een praktisch hulpmiddel dat écht werkt.
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
                  Wat ik in mijn werk als analist geleerd heb, is dat technologie alleen werkt als mensen er ook echt mee aan de slag gaan. Niet via een dik rapport, maar door naast je te staan, mee te denken en het samen te proberen.
                </p>
                <p>
                  Dat is ook hoe ik werk bij EnableFlow: praktisch, persoonlijk en zonder hype. Ik kom gewoon bij je langs in Groningen, Friesland of Drenthe, en we kijken samen wat AI voor jóuw bedrijf kan betekenen.
                </p>
              </div>
            </div>

            {/* Rechts: kernwaarden */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mijn aanpak in het kort</h3>

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Eerlijk & nuchter</h4>
                  <p className="text-slate-600 text-sm mt-1">Ik vertel je wat AI wél kan doen, maar ook wat niet. Geen beloftes die ik niet waar kan maken.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
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

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
                <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0">
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

      {/* Achtergrond kaarten */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Achtergrond & ervaring</h2>
            <p className="text-slate-600 max-w-xl mx-auto">
              Jaren van werken met processen en technologie, nu ingezet voor Noord-Nederlandse ondernemers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-teal-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Provincie Groningen</h3>
              <p className="text-teal-600 text-sm font-medium mb-2">Business Analist</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Ervaring in procesoptimalisatie, stakeholdermanagement en het verbinden van mensen en technologie binnen complexe organisaties.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Procesoptimalisatie</h3>
              <p className="text-amber-600 text-sm font-medium mb-2">Analyse & verbetering</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Jarenlange ervaring met het in kaart brengen van werkprocessen en het vinden van slimme oplossingen die échte tijdsbesparing opleveren.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <h3 className="font-bold text-slate-900 mb-2">AI-implementatie</h3>
              <p className="text-slate-500 text-sm font-medium mb-2">Praktisch & resultaatgericht</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Microsoft Copilot 365, Claude en Gemini: van orientatie tot volledige implementatie en training van je team.
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
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-200"
            >
              Plan een gesprek →
            </Link>
            <a
              href="tel:+31630534740"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/30 hover:border-white/50 transition-all duration-200"
            >
              📞 06 30 53 47 40
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
