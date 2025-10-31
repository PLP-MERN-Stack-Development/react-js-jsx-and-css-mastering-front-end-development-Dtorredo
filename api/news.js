export default async function handler(req, res) {
  try {
    const { q = 'Formula 1', page = '1', pageSize = '12' } = req.query || {};
    const apiKey = process.env.VITE_NEWS_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ status: 'error', message: 'Missing VITE_NEWS_API_KEY' });
    }

    const url = new URL('https://newsapi.org/v2/everything');
    url.searchParams.set('q', q);
    url.searchParams.set('language', 'en');
    url.searchParams.set('sortBy', 'publishedAt');
    url.searchParams.set('page', String(page));
    url.searchParams.set('pageSize', String(pageSize));
    url.searchParams.set('apiKey', apiKey);

    const upstream = await fetch(url.toString());
    const text = await upstream.text();
    res.setHeader('Content-Type', 'application/json');
    res.status(upstream.status).send(text);
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message || 'Unknown error' });
  }
}


