'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    services: [],
  });

  const services = [
    'Branding',
    'Event',
    'Marketing',
    'Web e Multimedia',
    'Social Media',
    'Content Creation',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      if (checked) {
        return {
          ...prev,
          services: [...prev.services, value],
        };
      } else {
        return {
          ...prev,
          services: prev.services.filter((service) => service !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Grazie per averci contattato! Ti risponderemo al più presto.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      services: [],
    });
  };

  const inputClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg bg-white bg-opacity-80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  // Array di social media
  const socialMedia = [
    { name: 'facebook', url: 'https://facebook.com/' },
    { name: 'instagram', url: 'https://instagram.com/' },
    { name: 'linkedin', url: 'https://linkedin.com/' },
    { name: 'twitter', url: 'https://twitter.com/' }
  ];

  return (
    <section id="contatti" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-red-50 opacity-40"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute top-1/4 left-0 w-16 h-32 bg-red-50/50 rounded-r-full blur-sm"></div>
      <div className="absolute bottom-1/3 right-0 w-16 h-32 bg-red-50/50 rounded-l-full blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full font-medium text-sm uppercase tracking-wider">
              Parliamo insieme
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            <span className="text-red-600">Contattaci</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Pronto a far crescere il tuo business? Contattaci oggi per una consulenza gratuita 
            e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Informazioni di contatto */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 h-full relative overflow-hidden">
              {/* Elemento decorativo */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-red-100 rounded-full opacity-30"></div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-8 relative">Informazioni di Contatto</h3>
              
              <div className="space-y-8 relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900">Indirizzo</h4>
                    <p className="text-gray-600 mt-2 leading-relaxed">Via Litterio 54,<br/>90011 Bagheria (PA), Italia</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900">Telefono</h4>
                    <p className="text-gray-600 mt-2">+39 327 1677871</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-3 shadow-md">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600 mt-2">catanzaroepartners@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Modulo di contatto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un messaggio</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Nome e cognome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Il tuo nome"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="La tua email"
                    />
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="Il tuo numero di telefono"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Azienda
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      placeholder="La tua azienda"
                    />
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
                          checked={formData.services.includes(service)}
                          onChange={handleCheckboxChange}
                          className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                        />
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
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent resize-none"
                    placeholder="Descrivi il tuo progetto o la tua richiesta..."
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-center">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 text-gray-700 text-sm">
                      Acconsento al trattamento dei dati personali secondo la{' '}
                      <Link href="/privacy-policy" className="text-red-600 hover:underline">
                        Privacy Policy
                      </Link>
                      . *
                    </label>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300"
                >
                  Invia messaggio
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
        
        {/* Mappa */}
        <div className="mt-20">
          <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.032025408837!2d13.490707075808764!3d38.0823894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1319e61dddfb3f87%3A0x33f010dd4ecd8a92!2sVia%20Litterio%2C%2054%2C%2090011%20Bagheria%20PA!5e0!3m2!1sit!2sit!4v1715279644068!5m2!1sit!2sit"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mappa sede Catanzaro & Partners"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;