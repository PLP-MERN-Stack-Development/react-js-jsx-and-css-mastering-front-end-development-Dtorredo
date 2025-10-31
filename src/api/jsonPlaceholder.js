export async function fetchPosts({ page = 1, limit = 10, signal } = {}) {
  const start = (page - 1) * limit;
  const url = `https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`;
  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error("Failed to fetch posts");
  const data = await res.json();
  return data;
}
