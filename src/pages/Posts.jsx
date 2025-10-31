import React, { useMemo, useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { f1Posts } from "../data/f1Posts";

const Posts = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const posts = useMemo(() => f1Posts, []);

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return posts;
    return posts.filter(
      (p) =>
        p.title.toLowerCase().includes(term) ||
        p.body.toLowerCase().includes(term)
    );
  }, [posts, search]);

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex items-center justify-between gap-4 mb-5">
          <h2 className="text-2xl font-bold">Formula 1: Moments Across The Years</h2>
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
              disabled={page * limit >= filtered.length}
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
        {error && <p className="text-red-600">{error}</p>}
        {!error && (
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered
              .slice((page - 1) * limit, page * limit)
              .map((post) => (
              <li
                key={post.id}
                className="rounded-xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-gray-100">{post.title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {post.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
};

export default Posts;
