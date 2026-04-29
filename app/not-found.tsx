import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-page">
      <section className="page-intro">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page may have moved during the site migration.</p>
        <Link className="text-button" href="/">
          Return home
        </Link>
      </section>
    </main>
  );
}
