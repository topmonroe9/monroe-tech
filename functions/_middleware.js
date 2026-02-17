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
    const prop = el.getAttribute('property') || '';
    const name = el.getAttribute('name') || '';

    if (prop === 'og:title' || name === 'twitter:title') {
      el.setAttribute('content', EN_META.title);
    } else if (prop === 'og:description' || name === 'twitter:description' || name === 'description') {
      el.setAttribute('content', EN_META.description);
    } else if (prop === 'og:url') {
      el.setAttribute('content', EN_META.url);
    } else if (prop === 'og:image' || name === 'twitter:image') {
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

  // Russian/CIS users on .dev → redirect to .ru (GitHub Pages)
  if (RU_COUNTRIES.has(country)) {
    url.hostname = 'monroe-tech.ru';
    return Response.redirect(url.toString(), 302);
  }

  // All other requests: rewrite OG tags to English
  const response = await context.next();
  return new HTMLRewriter()
    .on('html', new HtmlLangRewriter())
    .on('title', new TitleRewriter())
    .on('meta', new MetaRewriter())
    .transform(response);
}
