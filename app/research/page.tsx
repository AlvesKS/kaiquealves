import { researchThemes, selectedPublications } from "@/lib/content";

export const metadata = {
  title: "Research"
};

export default function ResearchPage() {
  return (
    <main className="content-page">
      <section className="page-intro">
        <p className="eyebrow">Research</p>
        <h1>Quantitative epidemiology for plant health decisions</h1>
        <p>
          My work focuses on disease risk, yield loss, surveillance, and analytical
          frameworks that connect plant pathology with actionable decisions.
        </p>
      </section>

      <section className="text-section">
        <h2>Focus areas</h2>
        <div className="tag-list">
          {researchThemes.map((theme) => (
            <span key={theme}>{theme}</span>
          ))}
        </div>
      </section>

      <section className="text-section">
        <h2>Selected publications</h2>
        <ol className="publication-list">
          {selectedPublications.map((publication) => (
            <li key={publication.href}>
              <a href={publication.href}>{publication.citation}</a>
              <span>{publication.venue}</span>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
