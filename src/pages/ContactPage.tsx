import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';

const STATS = [
  { id: 'reactietijd', value: '24u', label: 'Reactietijd' },
  { id: 'vrijblijvend', value: 'Gratis', label: 'Altijd vrijblijvend' },
  { id: 'locatie', value: 'Op locatie', label: 'Noord-Nederland' },
] as const;

const CONTACT_ITEMS = [
  {
    id: 'email',
    href: 'mailto:info@enableflow.nl',
    label: 'E-mail',
    value: 'info@enableflow.nl',
    external: false,
    icon: (
      <svg aria-hidden="true" className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'telefoon',
    href: 'tel:+31630534740',
    label: 'Telefoon',
    value: '06 30 53 47 40',
    external: false,
    icon: (
      <svg aria-hidden="true" className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/renedeboer97/',
    label: 'LinkedIn',
    value: 'Volg ons voor AI-tips',
    external: true,
    icon: (
      <svg aria-hidden="true" className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
              Plan een gratis gesprek met René.
            </h1>
            <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto">
              30 minuten die direct waarde opleveren. Op locatie of online — geen verkooppraatje, maar een eerlijk gesprek over wat AI voor jóuw bedrijf kan doen.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {STATS.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-slate-100"
              >
                <p className="text-xl font-black tracking-[-0.04em] text-emerald-600">
                  {stat.value}
                </p>
                <p className="text-xs text-[#555] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier */}
      <ContactForm defaultTab="consult" showContactHeader={false} />

      {/* Direct contact */}
      <section className="py-16 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black tracking-[-0.04em] text-white mb-8 text-center">
            Liever direct contact?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white mb-1">{item.label}</h3>
                <p className="text-emerald-300 text-sm">{item.value}</p>
              </a>
            ))}
          </div>
          <p className="text-slate-400 text-sm text-center mt-10">
            Maandag t/m vrijdag, 09:00 – 17:00
          </p>
        </div>
      </section>

    </div>
  );
};
