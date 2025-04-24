export default async function sitemap() {
  const baseUrl = 'https://catanzaroepartners.it';
  const currentDate = new Date().toISOString();

  // Definisci le route del tuo sito
  const routes = [
    '',
    '/servizi',
    '/about',
    '/portfolio',
    '/contatti',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
} 