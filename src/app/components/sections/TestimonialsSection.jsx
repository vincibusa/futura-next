import AnimateOnScroll from '../animation/AnimateOnScroll';
import Image from 'next/image';

const TestimonialsSection = () => {
  const sponsors = [
    // Istituzionali
    { id: 51, name: "Ass", image: "/assessorato.png" },
    { id: 52, name: "Ass2", image: "/ass produttive.png" },
    { id: 4, name: "Camera di Commercio", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/6%20camera%20di%20commercio-02.png?alt=media&token=7cdee289-07c8-40a4-9221-67453f070c5a" },
    { id: 29, name: "Doc Sicilia", image: "https://siciliadoc.wine/wp-content/uploads/2021/12/logo_siciliadoc_it-1.png" },
    { id: 36, name: "Taobuk", image: "https://taobuk-it.cdn-immedia.net/wp-content/uploads/2024/06/sponsor-1-500x500.jpg" },
    { id: 37, name: "Cous Cous Fest", image: "https://wallinone.tv/wp/wp-content/uploads/2017/09/logo-cous-cous-fest.png" },
    { id: 27, name: "Pomodoro di Pachino", image: "https://www.igppachino.it/wp-content/uploads/2021/09/Logo@2x-2.png" },
    { id: 41, name: "Consorzio di Bronte", image: "https://www.consorziodos.it/wp-content/uploads/2024/02/Logo-Pistacchio-di-Bronte-.webp" },
    { id: 49, name: "Vino Etna", image: "https://www.stradadelvinodelletna.it/wp-content/uploads/2024/02/logo-svse.png" },
    { id: 32, name: "Milazzo", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Milazzo-Stemma.svg/1200px-Milazzo-Stemma.svg.png" },
    { id: 33, name: "Alcantare", image: "https://upload.wikimedia.org/wikipedia/it/d/d2/Mojo_Alcantara-Stemma.png" },

    // Aziende Grosse
    { id: 28, name: "Intesa San Paolo", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Intesa_Sanpaolo_logo.svg" },
    { id: 22, name: "San Pellegrino", image: "https://us.store.sanpellegrino.com/cdn/shop/files/230428_SANPE_Logo_SPellegrino_RGB.png?v=1698796178&width=600" },
    { id: 15, name: "Giornale di Sicilia", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/giornale%20di%20sicilia-02.png?alt=media&token=3ca91d2b-b664-4b85-92df-3fd4534e3b87" },
    { id: 5, name: "Decò", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/DECO-02.png?alt=media&token=61a10b13-d473-4031-8c09-63a91516e74b"},
    { id: 6, name: "Moretti Forni", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/MORETTI%20FORNI.png?alt=media&token=241c5092-c056-40cb-874d-9592790d27f4" },
    { id: 8, name: "Sagrim Electrolux", image: "https://loghi-famosi.com/wp-content/uploads/2021/02/Electrolux-Logo.png" },
    { id: 21, name: "Donna fugata", image: "https://www.donnafugata.it/wp-content/uploads/2022/09/Logo-Completo.jpg" },
    { id: 23, name: "Duca di Salaparuta", image: "https://winearound.imgix.net/img/pictures/picture_logo_65b7c83e6a8f9964b84d4727_1709823312844.png?fit=cover&w=600&h=600&fm=png" },
    { id: 48, name: "Fiasconaro", image: "https://www.fiasconaro.com/wp-content/uploads/2024/06/Fiasconaro_logo.png" },
    { id: 35, name: "Nicosia", image: "https://www.tenutenicosia.it/wp-content/uploads/2016/08/Logo_Nicosia_istituzionale-1.png" },
    { id: 50, name: "Moak", image: "https://www.ilpost.it/wp-content/uploads/2017/07/logo_moak.jpg" },
    { id: 53, name: "Elenka", image: "https://cdn.prod.website-files.com/5c1bc9351a733274310fb234/5f688ce841ab252e8fe334f7_logo%20elenka%202018-01.png" },
    { id: 54, name: "Mangias", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-rO7ouEJPZIiP0omhQsReWCY0WDk89LnXGQ&s" },
    { id: 55, name: "Molini del ponte", image: "https://emporiosicilia.it/cdn/shop/collections/bbad828b6fd172289dc779a7fbab955d.jpg?v=1680603734" },

    // Altri
    { id: 1, name: "La Piana d'Oro", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/1%20la%20piana%20d'oro.png?alt=media&token=f8d7dcd1-bad3-438e-bab7-4906a39d9dde" },
    { id: 7, name: "Riggi", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/RIGGI.png?alt=media&token=2dbc8999-c2c9-4e8d-bc2b-4ed00ee3811b" },
    { id: 10, name: "Acqua Panna", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Acqua_Panna_logo.svg/1094px-Acqua_Panna_logo.svg.png" },
    { id: 11, name: "All Food Sicily", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/all%20food-02.png?alt=media&token=7c85fa51-20c7-45d3-95c9-11f9263bba07" },
    { id: 12, name: "Caffè Barbera", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/barbera%20logo.png?alt=media&token=b21be495-55fa-42ec-95e9-389e704f4097" },
    { id: 13, name: "Bonsignore", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/bonsignore-02.png?alt=media&token=a1648675-e5f0-47b2-ab47-0a43cb303894" },
    { id: 14, name: "Fermento Pizza", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/fermento-02.png?alt=media&token=be2e1fe3-9c23-43ed-b7af-530ac2d673cd" },
    { id: 16, name: "Granamaro", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/granamaro-02.png?alt=media&token=b41759fe-5f33-4599-abf5-a1fe4243ee26" },
    { id: 17, name: "La Siciliana", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/la%20siciliana-02.png?alt=media&token=fd167486-2ee5-4b48-b117-a022a2845666" },
    { id: 18, name: "Mariano Durante", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mariano%20durante-02.png?alt=media&token=76d4ed7f-d99d-4551-a570-f60506b3a35c" },
    { id: 19, name: "Mediacom", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mediacom-02.png?alt=media&token=c18a7458-974f-4320-93c9-fcba272a3f48" },
    { id: 24, name: "Ricocrem", image: "https://www.ricocrem.it/wp-content/uploads/2019/06/Logo_Nuovo-1.jpg" },
    { id: 25, name: "Gout", image: "https://www.goutristorazione.it/wp-content/uploads/2022/05/gout-footer.png" },
    { id: 26, name: "Ke Palle", image: "https://www.kepalle.it/wp-content/uploads/2020/09/kepalle-logo_favicon.png" },
    { id: 30, name: "Sapori dei vini", image: "https://www.winerytastingsicily.com/images/strade-del-vino/strade-del-vino-valle-dei-templi.jpg" },
    { id: 31, name: "Damir", image: "https://palermomediterranea.it/wp-content/uploads/2023/05/Raggruppa-916-e1686059419181.png" },
    { id: 34, name: "Brugnano", image: "https://www.millesuoli.it/img/m/53.jpg" },
    { id: 38, name: "Spumanti dell'Etna", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY8QFcaK3sSUHXOjGe0A2lZwRy6_QVPfVxCA&s" },
    { id: 39, name: "Val Paradiso", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFaN9tw1ZxSiyA1uYB1iPQj0h31TCEngpiiQ&s" },
    { id: 40, name: "Menu", image: "https://www.menu.it/img/logo-menu.png" },
    { id: 42, name: "Rattenuti", image: "https://interactiveanddesign.com/images/logos/thumb250x150/logo68-08092020232151.png" },
    { id: 43, name: "Villa Dafne", image: "https://www.lebontadivilladafne.it/img/cms/dafne.png" },
    { id: 44, name: "Biga", image: "https://bigageniofarina.it/wp-content/uploads/2024/01/biga-1.webp" },
    { id: 45, name: "Saccharum", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5OlJfzknX3VIxgKcRAjiNVkWPO2NG0L4pA&s" },
    { id: 46, name: "Magatama", image: "https://www.magatama.it/wp-content/uploads/2023/06/logofooter.png" },
    { id: 47, name: "Ammodo", image: "https://www.ammodopizzeria.it/wp-content/uploads/2023/01/Ammodo-di-Daniele-Vaccarella-SEO.jpg" },
  ];

  const sponsorSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Futura Company",
    "url": "https://futuracompany.it",
    "sponsor": sponsors.map(sponsor => ({
      "@type": "Organization",
      "name": sponsor.name,
      "logo": sponsor.image
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sponsorSchema) }}
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
      <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-red-50 opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-red-50 opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <AnimateOnScroll animation="fade-up" delay={500}>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
                Collaboriamo con i <strong className="font-bold text-blue-600">migliori brand e istituzioni pubblico private</strong>.
              </h2>
            </AnimateOnScroll>
          </div>

          {/* Griglia degli sponsor */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <AnimateOnScroll
                key={sponsor.id}
                animation="fade-up"
                delay={index * 50 + 200}
                className="group"
              >
                <div className="overflow-hidden transform transition-all duration-300 hover:-translate-y-2 p-6 h-32 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.image}
                      alt={`Logo di ${sponsor.name}, nostro partner.`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;