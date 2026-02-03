import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';

export const ContactPage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-purple-50 relative overflow-hidden min-h-screen">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Neem contact met ons op
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kies tussen een vrijblijvend consult of een grondige AI Readiness Scan met persoonlijk rapport.
          </p>
        </div>

        {/* Contact Form */}
        <ContactForm defaultTab="consult" showContactHeader={false} />
      </div>
    </section>
  );
};
