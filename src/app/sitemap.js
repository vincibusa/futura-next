// Configurazione per export statico
export const dynamic = 'force-static';

export default async function sitemap() {
  const baseUrl = 'https://futuracompany.it';
  const currentDate = new Date().toISOString();

  // Definisci le route principali del sito
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#chi-siamo`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#servizi`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#adv`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#progetti`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#portfolio`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#team`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contatti`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Testate giornalistiche - assumendo che abbiano pagine dedicate
  const testateRoutes = [
    'all-food-sicily',
    'sicilia-mag', 
    'fermento-pizza',
    'travel-notizie',
    'vinup'
  ].map((testata) => ({
    url: `${baseUrl}/testate/${testata}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Servizi - assumendo che abbiano pagine dedicate
  const serviziRoutes = [
    'branding',
    'event',
    'marketing', 
    'web-multimedia',
    'food-concept',
    'talent-partner'
  ].map((servizio) => ({
    url: `${baseUrl}/servizi/${servizio}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...testateRoutes, ...serviziRoutes];
} 