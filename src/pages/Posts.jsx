import React, { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { fetchF1News } from "../api/newsApi";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError("");
    fetchF1News({ page, pageSize: limit, signal: controller.signal })
      .then((articles) => setPosts(articles))
      .catch((e) => {
        if (e.name !== "AbortError")
          setError(e.message || "Error fetching posts");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [page, limit]);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter((p) => {
      const title = (p.title || "").toLowerCase();
      const desc = (p.description || "").toLowerCase();
      return title.includes(term) || desc.includes(term);
    });
  }, [posts, search]);

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-2xl font-bold">Latest Formula 1 News</h2>
          <div className="flex items-center gap-2">
            <Button
              size="sm"
              variant="secondary"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </Button>
            <span className="text-sm">Page {page}</span>
            <Button
              size="sm"
              variant="secondary"
              disabled={loading}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        </div>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts..."
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
        />
        {loading && (
          <p className="text-gray-700 dark:text-gray-300">Loading...</p>
        )}
        {error && <p className="text-red-600">{error}</p>}
        {!loading && !error && (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <li
                key={post.id}
                className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                {post.urlToImage && (
                  <img
                    src={post.urlToImage}
                    alt=""
                    className="w-full h-40 object-cover rounded-lg mb-3"
                  />
                )}
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  {post.description || ""}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{post.source?.name || ""}</span>
                  {post.publishedAt && (
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm underline"
                >
                  Read more
                </a>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

export default Posts;
