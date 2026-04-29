import { education, experience, site } from "@/lib/content";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <main className="content-page">
      <section className="page-intro">
        <p className="eyebrow">About</p>
        <h1>Plant disease epidemiology, from research questions to field decisions</h1>
        <p>
          I am a Plant Disease Epidemiologist and Agronomist with advanced training in
          Plant Pathology. My work brings together epidemiology, predictive modeling,
          data science, and decision-support systems for practical plant health problems.
        </p>
        <a className="email-line" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </section>

      <section className="timeline-section">
        <h2>Experience</h2>
        {experience.map((item) => (
          <article key={`${item.title}-${item.period}`} className="timeline-item">
            <p>{item.period}</p>
            <h3>{item.title}</h3>
            <strong>{item.place}</strong>
            <span>{item.details}</span>
          </article>
        ))}
      </section>

      <section className="text-section">
        <h2>Education</h2>
        <ul className="simple-list">
          {education.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
