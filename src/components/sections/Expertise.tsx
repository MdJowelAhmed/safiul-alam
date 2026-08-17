import {
  BarChart2, Search, Play, Briefcase,
  LineChart, FileText, Cpu, Filter, Zap,
} from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { expertiseList } from "@/data/expertise";

const iconMap: Record<string, React.ElementType> = {
  BarChart2, Search, Play, Briefcase, LineChart, FileText, Cpu, Filter, Zap,
};

export function Expertise() {
  const featured = expertiseList.filter((s) => s.featured);
  const rest = expertiseList.filter((s) => !s.featured);

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <style>{`
        .expertise-card { transition: border-color 150ms; }
        .expertise-card:hover { border-color: var(--accent) !important; }
      `}</style>
      <Container>
        <SectionHeading
          eyebrow="What I Do"
          title="Areas of Expertise"
          description="From paid advertising to analytics, automation and AI — I build complete performance marketing systems that acquire customers and scale."
          className="mb-12"
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {/* Featured service — spans 2 columns */}
          {featured.map((service) => {
            const Icon = iconMap[service.icon] ?? BarChart2;
            return (
              <div
                key={service.id}
                className="expertise-card relative rounded-xl border p-8 lg:col-span-2"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mb-4 inline-flex items-center justify-center rounded-lg p-3"
                  style={{ background: "var(--accent-glow)" }}
                >
                  <Icon size={24} aria-hidden="true" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="text-h3 mb-2" style={{ color: "var(--text)" }}>
                  {service.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {service.description}
                </p>
                {service.capabilities && (
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="rounded-full px-3 py-1 text-xs font-medium border"
                        style={{
                          background: "var(--surface-2)",
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Right column: first two non-featured */}
          <div className="flex flex-col gap-4">
            {rest.slice(0, 2).map((service) => {
              const Icon = iconMap[service.icon] ?? BarChart2;
              return (
                <div
                  key={service.id}
                  className="expertise-card flex-1 rounded-xl border p-6"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div
                    className="mb-3 inline-flex items-center justify-center rounded-lg p-2.5"
                    style={{ background: "var(--surface-2)" }}
                  >
                    <Icon size={20} aria-hidden="true" style={{ color: "var(--accent)" }} />
                  </div>
                  <h3 className="mb-1.5 text-base font-semibold" style={{ color: "var(--text)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom row: remaining services */}
          {rest.slice(2).map((service) => {
            const Icon = iconMap[service.icon] ?? BarChart2;
            return (
              <div
                key={service.id}
                className="expertise-card rounded-xl border p-6"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mb-3 inline-flex items-center justify-center rounded-lg p-2.5"
                  style={{ background: "var(--surface-2)" }}
                >
                  <Icon size={20} aria-hidden="true" style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="mb-1.5 text-base font-semibold" style={{ color: "var(--text)" }}>
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
