import Link from "next/link";
import { navItems, site } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Kaique Alves home">
        {site.name}
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="mail-link" href={`mailto:${site.email}`}>
        Email
      </a>
    </header>
  );
}
