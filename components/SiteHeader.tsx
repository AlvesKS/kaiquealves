import Link from "next/link";
import { navItems, site } from "@/lib/content";

const socialLinks = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="m5 7 7 5.2L19 7" />
      </svg>
    )
  },
  {
    label: "LinkedIn",
    href: site.links.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.8 9.5v8" />
        <path d="M6.8 6.5v.1" />
        <path d="M11 17.5v-8" />
        <path d="M11 13.1c0-2.2 1.2-3.8 3.2-3.8 1.9 0 3 1.2 3 3.6v4.6" />
      </svg>
    )
  },
  {
    label: "X",
    href: site.links.x,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m6 5 12 14" />
        <path d="M18 5 6 19" />
      </svg>
    )
  },
  {
    label: "GitHub",
    href: site.links.github,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3.5a8.4 8.4 0 0 0-2.7 16.4c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-.9-2.7-.9-.4-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.3.9 1.3.9.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2 2.9 2.9 0 0 1 .1-2.2s.7-.2 2.3.8a7.6 7.6 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.4.9.2 1.7.1 2.2a3.1 3.1 0 0 1 .8 2.2c0 3.1-1.9 3.8-3.6 4 .3.3.5.8.5 1.5v2.2c0 .2.1.5.5.4A8.4 8.4 0 0 0 12 3.5Z" />
      </svg>
    )
  },
  {
    label: "Google Scholar",
    href: site.links.scholar,
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 4 4.5 9l7.5 5 7.5-5L12 4Z" />
        <path d="M7.2 11.1v4.1c1.4 1.7 3 2.6 4.8 2.6s3.4-.9 4.8-2.6v-4.1" />
      </svg>
    )
  }
];

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
      <div className="header-tools" aria-label="Social links and search">
        <div className="social-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} aria-label={link.label}>
              {link.icon}
            </a>
          ))}
        </div>
        <form className="site-search" action="/search/" method="get">
          <label>
            <span>Search</span>
            <input name="q" type="search" placeholder="Search" />
          </label>
        </form>
      </div>
    </header>
  );
}
