"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import logo from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isHomePage, setIsHomePage] = useState(false);
  
  useEffect(() => {
    setIsHomePage(window.location.pathname === '/');
  }, []);

  // Function to scroll to a specific section from home
  const scrollToSection = (sectionId) => {
    if (!isHomePage) {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-blue-950 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Colonna 1 - Informazioni sull'agenzia */}
          <div className='flex flex-col items-center justify-center'>
            <div className="mb-4 flex items-center justify-center"> 
              <Image 
                src={logo} 
                alt="Catanzaro & Partners" 
                className="h-24 mb-4 w-auto"
                width={240}
                height={96}
                priority
              />
            </div>
            <p className="text-gray-300 mb-4 text-center">
              Agenzia di marketing innovativa specializzata in strategie digitali 
              per aiutare le aziende a crescere nel mercato competitivo di oggi.
            </p>
          </div>

          {/* Colonna 2 - Link Utili */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Utili</h3>
            <div className="w-12 h-1 bg-blue-500 mb-4"></div>
            <ul className="space-y-2">
              {[
                { name: 'Home', id: 'hero' },
                { name: 'Chi Siamo', id: 'chi-siamo' },
                { name: 'Servizi', id: 'servizi' },
                { name: 'Comfort Zone', id: 'comfort-zone' },
                { name: 'Portfolio', id: 'portfolio' },
                { name: 'Team', id: 'team' },
                { name: 'Contatti', id: 'contatti' }
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 3 - Servizi */}
          <div>
            <h3 className="text-xl font-bold mb-4">I Nostri Servizi</h3>
            <div className="w-12 h-1 bg-blue-500 mb-4"></div>
            <ul className="space-y-2">
              {[
                { name: 'Branding', path: '/servizi/branding' },
                { name: 'Event', path: '/servizi/event' },
                { name: 'Marketing', path: '/servizi/marketing' },
                { name: 'Web e Multimedia', path: '/servizi/web-multimedia' },
                { name: 'Food Concept', id: 'comfort-zone' },
                { name: 'Talent Partner', id: 'comfort-zone' }
              ].map((service) => (
                <li key={service.name}>
                  {service.path ? (
                    <Link
                      href={service.path}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {service.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(service.id)}
                      className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                    >
                      {service.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna 4 - Contatti */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contattaci</h3>
            <div className="w-12 h-1 bg-blue-500 mb-4"></div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-300">
                Via Papa Giovanni XXIII, 26 90011 BAGHERIA (PA), Italia
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-gray-300">catanzaroepartners@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-blue-500 mr-2 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-300">+39 091 201852</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-900 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Catanzaro & Partners. Tutti i diritti riservati.
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;