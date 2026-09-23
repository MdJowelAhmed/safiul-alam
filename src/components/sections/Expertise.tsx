"use client";

import { FileText, Cpu, Filter, Zap, BarChart2 } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { expertiseList } from "@/data/expertise";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

// Platform-specific brand SVG icons for exact visual matching
const MetaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M16.84 4.5c-2.18 0-3.95 1.15-5.04 2.72-1.09-1.57-2.86-2.72-5.04-2.72C3.13 4.5 0 7.77 0 11.8c0 4.49 3.44 8.2 7.76 8.2 2.18 0 3.95-1.15 5.04-2.72 1.09 1.57 2.86 2.72 5.04 2.72 4.32 0 7.76-3.71 7.76-8.2 0-4.03-3.13-7.3-7.76-7.3zm-10.08 14.1c-3.08 0-5.46-2.58-5.46-6.3 0-3.72 2.38-6.3 5.46-6.3 2.05 0 3.65 1.41 4.43 2.94-.88 1.53-2.48 2.54-4.43 2.54h-.5v1.8h.5c1.47 0 2.82-.72 3.62-1.89-.35 3.53-1.68 5.71-3.62 5.71zm10.08 0c-1.94 0-3.27-2.18-3.62-5.71.8 1.17 2.15 1.89 3.62 1.89h.5v-1.8h-.5c-1.95 0-3.55-1.01-4.43-2.54.78-1.53 2.38-2.94 4.43-2.94 3.08 0 5.46 2.58 5.46 6.3 0 3.72-2.38 6.3-5.46 6.3z"
      fill="url(#metaGrad)"
    />
    <defs>
      <linearGradient id="metaGrad" x1="0" y1="4.5" x2="24" y2="19.5" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#0081FB" />
        <stop offset="100%" stopColor="#0064E0" />
      </linearGradient>
    </defs>
  </svg>
);

const GoogleIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
  </svg>
);

const TikTokIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FE2C55" aria-hidden="true">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.3 2.56.02 1.18.72 2.26 1.8 2.71 1.07.46 2.35.24 3.2-.53.77-.69 1.16-1.74 1.14-2.77-.01-4.68-.01-9.36-.01-14.04z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#F9AB00" aria-hidden="true">
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
