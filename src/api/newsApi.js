const API_BASE = 'https://newsapi.org/v2';

export async function fetchF1News({ q = 'Formula 1', page = 1, pageSize = 12, signal } = {}) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  if (!apiKey) {
    throw new Error('Missing VITE_NEWS_API_KEY');
  }
  const url = new URL(`${API_BASE}/everything`);
  url.searchParams.set('q', q);
  url.searchParams.set('language', 'en');
  url.searchParams.set('page', String(page));
  url.searchParams.set('pageSize', String(pageSize));
  url.searchParams.set('sortBy', 'publishedAt');
  url.searchParams.set('apiKey', apiKey);

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`NewsAPI error: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.articles || [];
}


