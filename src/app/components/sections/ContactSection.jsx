'use client';
import Link from 'next/link';
import { useState } from 'react';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import FormConsent from '../gdpr/FormConsent';

const ContactSection = () => {
  const [consent, setConsent] = useState({
    contact: false,
    newsletter: false,
    events: false,
    marketing: false
  });

  const [formErrors, setFormErrors] = useState({});
  const services = [
    'Branding',
    'Event',
    'Marketing',
    'Web e Multimedia',
    'Social Media',
    'Content Creation',
  ]; 
  
  // Array di social media
  const socialMedia = [
    { name: 'facebook', url: 'https://facebook.com/futuracompany' },
    { name: 'instagram', url: 'https://instagram.com/futuracompany' },
    { name: 'linkedin', url: 'https://linkedin.com/company/futuracompany' },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Futura Company",
    "url": "https://futuracompany.it",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Via Papa Giovanni XXIII, 26",
      "addressLocality": "Bagheria",
      "postalCode": "90011",
      "addressRegion": "PA",
      "addressCountry": "IT"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+39-091-201852",
      "contactType": "customer service",
      "email": "info@futuracompany.it",
      "areaServed": "IT"
    },
    "sameAs": socialMedia.map(s => s.url)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-blue-600">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 11.072l-3.2-6.4a1 1 0 00-1.78-.22l-1.4 4.2-4.2-1.4a1 1 0 00-1.22.54l-3.2 6.4a1 1 0 001.22 1.22l4.2-1.4 1.4 4.2a1 1 0 001.78.22l3.2-6.4a1 1 0 00-.22-1.22z" />
            </svg>
          </span>
        </div>
      </div>
      <section id="contatti" className="py-24 bg-white relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-50 opacity-40"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-50 opacity-30"></div>
        <div className="absolute top-1/4 left-0 w-16 h-32 bg-blue-50/50 rounded-r-full blur-sm"></div>
        <div className="absolute bottom-1/3 right-0 w-16 h-32 bg-blue-50/50 rounded-l-full blur-sm"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll delay={200}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Contattaci
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Informazioni di contatto */}
            <AnimateOnScroll delay={400} className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
                {/* Elemento decorativo */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>

                <h3 className="text-2xl font-bold text-gray-900 mb-8 relative">Informazioni di Contatto</h3>

                <div className="space-y-8 relative">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Sede Legale</h4>
                      <p className="text-gray-600 mt-2 leading-relaxed">Via Messina Montagna,6,<br /> 90121 Palermo (PA), Italia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Sede Operativa</h4>
                      <p className="text-gray-600 mt-2 leading-relaxed">Via Massimo D'Azelio,50,<br /> 90011 Bagheria (PA), Italia</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Telefono</h4>
                      <p className="text-gray-600 mt-2">+39 091 201852</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-3 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-6">
                      <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600 mt-2">info@futuracompany.it</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Modulo di contatto */}
            <AnimateOnScroll delay={600} className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un messaggio</h3>

                <form action="/api/contact" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                        Nome e cognome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Il tuo nome" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="La tua email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                        Telefono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="Il tuo numero di telefono" />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                        Azienda
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                        placeholder="La tua azienda" />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2">
                      Servizi di interesse
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div key={service} className="flex items-center">
                          <input
                            type="checkbox"
                            id={service}
                            name="services"
                            value={service}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                          <label htmlFor={service} className="ml-2 text-gray-700">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                      Messaggio *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                      placeholder="Descrivi il tuo progetto o la tua richiesta..."
                    ></textarea>
                  </div>

                  <FormConsent
                    onConsentChange={setConsent}
                    required={true}
                    showNewsletter={true}
                    showEvents={true}
                    className="mb-6"
                  />

                  <input type="hidden" name="consent" value={JSON.stringify(consent)} />

                  <button
                    type="submit"
                    disabled={!consent.contact}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100"
                  >
                    Invia messaggio
                  </button>
                </form>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Mappa */}
          <AnimateOnScroll delay={800}>
            <div className="mt-20">
              <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.032025408837!2d13.509453075808764!3d38.0823894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e61dddfb3f87%3A0x33f010dd4ecd8a92!2sVia%20Papa%20Giovanni%20XXIII%2C%2026%2C%2090011%20Bagheria%20PA!5e0!3m2!1sit!2sit!4v1715279644068!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Mappa della sede di Futura Company a Bagheria"
                ></iframe>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
};

export default ContactSection;