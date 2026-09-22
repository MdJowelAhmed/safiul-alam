"use client";

import { FileText, Cpu, Filter, Zap, BarChart2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { expertiseList } from "@/data/expertise";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

// Platform-specific brand SVG icons for exact visual matching
const MetaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M6.915 4.75C4.07 4.75 2 7.042 2 10.334c0 3.658 2.656 6.916 6.324 6.916 2.052 0 3.714-1.077 4.88-2.673 1.166 1.596 2.828 2.673 4.88 2.673 3.668 0 6.324-3.258 6.324-6.916 0-3.292-2.07-5.584-4.915-5.584-2.457 0-4.303 1.584-5.469 3.447C12.978 6.334 11.372 4.75 6.915 4.75zm.165 2.4c2.81 0 4.238 1.83 5.08 3.284-.842 1.454-2.27 3.284-5.08 3.284-2.32 0-3.92-1.92-3.92-4.084 0-2.164 1.6-3.484 3.92-3.484zm9.84 0c2.32 0 3.92 1.32 3.92 3.484 0 2.164-1.6 4.084-3.92 4.084-2.81 0-4.238-1.83-5.08-3.284.842-1.454 2.27-3.284 5.08-3.284z"
      fill="#0081FB"
    />
  </svg>
);

const GoogleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#EE1D52" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.38a6.37 6.37 0 0 0-1-.08A6.26 6.26 0 0 0 3 15.55a6.26 6.26 0 0 0 10.7 4.41V11.8a8.28 8.28 0 0 0 5.89 2.39v-3.45a4.84 4.84 0 0 1-3.59-1.63 4.8 4.8 0 0 1-1-2.42h4.59v.0z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#F9AB00" aria-hidden="true">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const customIconMap: Record<string, React.ComponentType> = {
  "meta-ads": MetaIcon,
  "google-ads": GoogleIcon,
  "tiktok-ads": TikTokIcon,
  "linkedin-ads": LinkedInIcon,
  "analytics-tracking": AnalyticsIcon,
  "content-strategy": () => <FileText size={22} style={{ color: "var(--accent)" }} />,
  "ai-strategy": () => <Cpu size={22} style={{ color: "var(--accent)" }} />,
  "funnel-optimisation": () => <Filter size={22} style={{ color: "var(--accent)" }} />,
  "crm-automation": () => <Zap size={22} style={{ color: "var(--accent)" }} />,
};

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="What I Do"
            title="Areas of Expertise"
            description="From paid advertising to analytics, automation and AI — I build complete performance marketing systems that acquire customers and scale."
            className="mb-12"
          />
        </FadeIn>

        {/* Uniform Grid: Equal width and height for all service cards */}
        <StaggerContainer staggerChildren={0.08} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {expertiseList.map((service) => {
            const Icon = customIconMap[service.id] ?? (() => <BarChart2 size={22} style={{ color: "var(--accent)" }} />);
            return (
              <StaggerItem key={service.id} className="h-full">
                <HoverCard
                  className="h-full rounded-xl border p-6 flex flex-col justify-between transition-all duration-300 shadow-md"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div>
                    <div
                      className="mb-4 inline-flex items-center justify-center rounded-lg p-2.5 border"
                      style={{
                        background: "var(--surface-2)",
                        borderColor: "var(--border)",
                      }}
                    >
                      <Icon />
                    </div>
                    <h3 className="text-lg font-bold mb-2 leading-snug" style={{ color: "var(--text)" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
                      {service.description}
                    </p>
                  </div>
                  {service.capabilities && service.capabilities.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[var(--border)] mt-auto">
                      {service.capabilities.map((cap) => (
                        <span
                          key={cap}
                          className="rounded-full px-2.5 py-0.5 text-[11px] font-medium border"
                          style={{
                            background: "var(--surface-2)",
                            borderColor: "var(--border)",
                            color: "var(--accent)",
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  )}
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
