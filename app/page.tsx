import Image from "next/image";
import Link from "next/link";
import { recentPublications, site } from "@/lib/content";

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="portrait-wrap">
          <Image
            src="/images/kaique-alves.jpg"
            alt="Kaique Alves"
            width={900}
            height={1125}
            priority
            className="portrait"
          />
        </div>
        <div className="home-statement">
          <p className="eyebrow">Plant Disease Epidemiologist</p>
          <h1 id="home-title">Kaique Alves</h1>
          <p className="lede">
            I study plant disease risk, yield loss, and quantitative tools for better
            decisions in plant health.
          </p>
          <a className="email-line" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <div className="text-links" aria-label="Primary pages">
            <Link href="/research">Research</Link>
            <Link href="/tools">Tools</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      </section>

      <section className="home-notes" aria-label="Recent scientific work">
        <p>
          Recent work connects epidemiology, climate variability, statistical modeling,
          and reproducible software for plant pathology.
        </p>
        <ul>
          {recentPublications.map((publication) => (
            <li key={publication.href}>
              <a href={publication.href}>{publication.venue}</a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
