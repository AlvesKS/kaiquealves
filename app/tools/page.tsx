import { tools } from "@/lib/content";

export const metadata = {
  title: "Tools"
};

export default function ToolsPage() {
  return (
    <main className="content-page">
      <section className="page-intro">
        <p className="eyebrow">Tools</p>
        <h1>Software and apps for quantitative plant pathology</h1>
        <p>
          These resources support disease progress analysis, fungicide sensitivity,
          forecasting, teaching, and applied epidemiological reasoning.
        </p>
      </section>

      <section className="tool-list" aria-label="Tools and resources">
        {tools.map((tool) => (
          <article key={tool.href} className="tool-row">
            <div>
              <p>{tool.type}</p>
              <h2>{tool.name}</h2>
            </div>
            <p>{tool.description}</p>
            <a href={tool.href}>Open</a>
          </article>
        ))}
      </section>
    </main>
  );
}
