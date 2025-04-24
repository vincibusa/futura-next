
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

// Importo le immagini della galleria
import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';
import img4 from '../../assets/images/4.jpeg';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';
import img7 from '../../assets/images/7.jpeg';
import img8 from '../../assets/images/8.jpeg';
import img9 from '../../assets/images/9.jpeg';
import food from '../../assets/images/food.png';

const ComfortZoneSection = () => {
  // Immagini per la galleria
  const galleryImages = [
    {
      src: img1,
      alt: 'Vista panoramica di un villaggio costiero con montagna vulcanica',
    },
    {
      src: img3,
      alt: 'Sfincione siciliano, specialità gastronomica',
    },
    {
      src: img2,
      alt: 'Vigneti siciliani con Etna sullo sfondo',
    },
    {
      src: img4,
      alt: 'Porto con barche e case sulla costa',
    },
    {
      src: img5,
      alt: 'Donne in costume tradizionale siciliano',
    },
    {
      src: img6,
      alt: 'Villa Palagonia, architettura storica',
    },
    {
      src: img7,
      alt: 'Villa Palagonia, architettura storica',
    },
    {
      src: img8,
      alt: 'Cannolo siciliano, dolce tipico',
    },
    {
      src: img9,
      alt: 'Piana',
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.7,
        ease: "easeOut"
      },
    }),
  };

  return (
    <section id="comfort-zone" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-red-50 opacity-20"></div>
      
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
              La nostra terra
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            La nostra <span className="text-red-600">Comfort Zone</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
            Siamo amanti della nostra terra e delle sue tradizioni. Tutto ciò che facciamo è per lasciare un credito di fiducia alle nuove generazioni.
          </motion.p>
        </div>

        {/* Galleria di immagini migliorata */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-24 relative"
        >
          {/* Elementi decorativi */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-red-200 rounded-lg z-0 opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-red-200 rounded-lg z-0 opacity-50"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 relative z-10">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInVariants}
                whileHover={{ scale: 1.02 }}
                className={`
                  ${index === 0 ? "col-span-2 row-span-2 relative h-64 md:h-96" : "relative h-40 md:h-52"}
                  overflow-hidden rounded-lg shadow-lg
                `}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  priority={index <= 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-3 md:p-4">
                  {index === 0 && (
                    <span className="text-white font-medium text-sm md:text-base drop-shadow-md">Sicilia</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Food Concept Section migliorata */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-80 bg-red-50/30 rounded-3xl blur-3xl"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 relative z-10"
          >
            <div className="mb-4">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full uppercase tracking-wider font-semibold">Dal 2013</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Food Concept</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ci occupiamo di progetti di animazione territoriale scoprendo e valorizzando i prodotti tipici che caratterizzano le comunità come Bagheria e Piana degli Albanesi. Per le istituzioni creiamo e produciamo format di live marketing, comunicazione e tutto ciò che serve per realizzare eventi di successo.
            </p>
            <Link href="/servizi/event">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 8px 20px -5px rgba(220, 38, 38, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 flex items-center"
              >
                Scopri i nostri eventi
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 relative"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-full h-64 md:h-96"
              >
                <Image
                  src={food}
                  alt="Food Concept - Sfincione siciliano"
                  className="rounded-xl shadow-2xl w-full h-full object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 rounded-xl border-2 border-red-100 transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-50 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-50 rounded-full hidden md:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ComfortZoneSection;