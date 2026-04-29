import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>Plant disease epidemiology, risk assessment, and data-driven agriculture.</p>
      <a href={`mailto:${site.email}`}>{site.email}</a>
    </footer>
  );
}
