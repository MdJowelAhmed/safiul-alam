import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { workExperience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="A track record of applying performance marketing expertise across agencies, freelance projects, and media organisations."
          className="mb-12"
        />

        <div className="relative">
          {/* Vertical line — desktop only */}
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px md:block"
            style={{ background: "var(--border)" }}
            aria-hidden="true"
          />

          <ol className="space-y-8" aria-label="Work experience timeline">
            {workExperience.map((job, index) => (
              <li key={job.id} className="relative flex gap-6">
                {/* Timeline dot */}
                <div
                  className="hidden md:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 z-10"
                  style={{
                    background: "var(--bg)",
                    borderColor: job.current ? "var(--accent)" : "var(--border)",
                  }}
                  aria-hidden="true"
                >
                  {job.current && (
                    <span
                      className="h-2.5 w-2.5 rounded-full animate-pulse"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-xl border p-6 transition-colors duration-150"
                  style={{
                    background: "var(--surface)",
                    borderColor: job.current ? "var(--accent)" : "var(--border)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
                        {job.title}
                      </h3>
                      <p className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                        {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span
                          className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
                          style={{
                            background: "var(--accent-glow)",
                            color: "var(--accent)",
                          }}
                        >
                          Current
                        </span>
                      )}
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {job.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
