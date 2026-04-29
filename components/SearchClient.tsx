"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { searchItems } from "@/lib/content";

function scoreItem(item: (typeof searchItems)[number], query: string) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);

  const title = item.title.toLowerCase();
  const summary = item.summary.toLowerCase();
  const type = item.type.toLowerCase();
  const keywords = item.keywords.join(" ").toLowerCase();
  const haystack = `${title} ${summary} ${type} ${keywords}`;

  if (terms.length === 0) return 0;

  return terms.reduce((score, term) => {
    if (title.includes(term)) return score + 5;
    if (keywords.includes(term)) return score + 3;
    if (haystack.includes(term)) return score + 1;
    return score;
  }, 0);
}

export function SearchClient() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim();
  const results = query
    ? searchItems
        .map((item) => ({ item, score: scoreItem(item, query) }))
        .filter((result) => result.score > 0)
        .sort((a, b) => b.score - a.score || a.item.title.localeCompare(b.item.title))
    : [];

  return (
    <section className="text-section" aria-live="polite">
      {query ? (
        <>
          <h2>
            {results.length} result{results.length === 1 ? "" : "s"} for "{query}"
          </h2>
          {results.length > 0 ? (
            <ul className="search-results">
              {results.map(({ item }) => (
                <li key={`${item.type}-${item.href}`} className="search-result">
                  <span>{item.type}</span>
                  <h3>
                    <Link href={item.href}>{item.title}</Link>
                  </h3>
                  <p>{item.summary}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="search-empty">
              No matching results yet. Try broader terms such as disease, yield,
              fungicide, EC50, modeling, or epidemiology.
            </p>
          )}
        </>
      ) : (
        <>
          <h2>Start with a term</h2>
          <p className="search-empty">
            This is a local site search, not a Google redirect. It searches the curated
            content index used by this static website.
          </p>
        </>
      )}
    </section>
  );
}
