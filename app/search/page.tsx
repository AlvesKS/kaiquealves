import { Suspense } from "react";
import { SearchClient } from "@/components/SearchClient";

export const metadata = {
  title: "Search"
};

export default function SearchPage() {
  return (
    <main className="content-page">
      <section className="page-intro">
        <p className="eyebrow">Search</p>
        <h1>Search this website</h1>
        <p>
          Search across the portfolio pages, tools, selected publications, and technical
          blog posts.
        </p>
        <form className="search-form-large" action="/search/" method="get">
          <input name="q" type="search" placeholder="Try yield loss, EC50, epifitter..." />
          <button type="submit">Search</button>
        </form>
      </section>

      <Suspense fallback={<p className="search-empty">Loading search...</p>}>
        <SearchClient />
      </Suspense>
    </main>
  );
}
