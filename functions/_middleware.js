const RU_COUNTRIES = new Set([
  'RU', 'BY', 'KZ', 'UZ', 'KG', 'TJ', 'AM', 'AZ', 'GE', 'MD', 'UA',
]);

const EN_META = {
  title: 'Monroe Tech — Business Automation, AI & Analytics',
  description:
    'Telegram bots, AI agents, dashboards and web apps. I turn manual chaos into systems that work without you.',
  url: 'https://monroe-tech.dev',
  image: 'https://monroe-tech.dev/og-image-en.png',
};

class MetaRewriter {
  element(el) {
    const prop = el.getAttribute('property') || el.getAttribute('name') || '';
    const rel = el.getAttribute('rel') || '';

    if (prop === 'og:title' || prop === 'twitter:title') {
      el.setAttribute('content', EN_META.title);
    } else if (
      prop === 'og:description' ||
      prop === 'twitter:description' ||
      el.getAttribute('name') === 'description'
    ) {
      el.setAttribute('content', EN_META.description);
    } else if (prop === 'og:url') {
      el.setAttribute('content', EN_META.url);
    } else if (
      prop === 'og:image' ||
      prop === 'twitter:image' ||
      el.getAttribute('name') === 'twitter:image'
    ) {
      el.setAttribute('content', EN_META.image);
    }
  }
}

class TitleRewriter {
  element(el) {
    el.setInnerContent(EN_META.title);
  }
}

class HtmlLangRewriter {
  element(el) {
    el.setAttribute('lang', 'en');
  }
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const country = request.cf?.country || '';

  const ua = request.headers.get('user-agent') || '';
  const isBot = /bot|crawl|spider|google|yandex|bing|facebook|twitter|telegram|slack|discord|whatsapp|linkedin/i.test(ua);

  // Bots on .dev → rewrite OG tags to English
  if (isBot) {
    const response = await context.next();
    return new HTMLRewriter()
      .on('html', new HtmlLangRewriter())
      .on('title', new TitleRewriter())
      .on('meta', new MetaRewriter())
      .transform(response);
  }

  // Russian/CIS users on .dev → redirect to .ru
  if (RU_COUNTRIES.has(country)) {
    url.hostname = 'monroe-tech.ru';
    return Response.redirect(url.toString(), 302);
  }

  return context.next();
}
