const RU_COUNTRIES = new Set([
  'RU', 'BY', 'KZ', 'UZ', 'KG', 'TJ', 'AM', 'AZ', 'GE', 'MD', 'UA',
]);

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const country = request.cf?.country || '';

  // Skip bots so both domains get indexed
  const ua = request.headers.get('user-agent') || '';
  if (/bot|crawl|spider|google|yandex|bing|facebook|twitter/i.test(ua)) {
    return context.next();
  }

  // Russian/CIS users on .dev → redirect to .ru (GitHub Pages)
  if (RU_COUNTRIES.has(country)) {
    url.hostname = 'monroe-tech.ru';
    return Response.redirect(url.toString(), 302);
  }

  return context.next();
}
