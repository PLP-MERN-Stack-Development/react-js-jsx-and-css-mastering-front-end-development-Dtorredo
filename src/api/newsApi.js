export async function fetchF1News({ q = 'Formula 1', page = 1, pageSize = 12, signal } = {}) {
  // Always call our serverless proxy to avoid CORS restrictions on NewsAPI free tier
  const url = new URL('/api/news', window.location.origin);
  url.searchParams.set('q', q);
  url.searchParams.set('page', String(page));
  url.searchParams.set('pageSize', String(pageSize));

  const res = await fetch(url.toString(), { signal });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`NewsAPI error: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.articles || [];
}


