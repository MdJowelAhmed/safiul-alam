import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

const frameworkSteps = [
  { step: "01", label: "Research", description: "Understand the market, audience, and competitive landscape." },
  { step: "02", label: "Strategy", description: "Build a data-informed plan aligned with business goals." },
  { step: "03", label: "Launch", description: "Execute campaigns with precision targeting and compelling creative." },
  { step: "04", label: "Track", description: "Measure every conversion event with accurate attribution." },
  { step: "05", label: "Test", description: "Run structured experiments across audiences, creatives, and offers." },
  { step: "06", label: "Optimise", description: "Act on data to reduce costs and improve conversion rates." },
  { step: "07", label: "Scale", description: "Allocate budget to what works and grow profitably." },
];

const tools = [
  "Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads",
  "GTM", "GA4", "Conversion Tracking", "GoHighLevel",
  "Make.com", "Kit", "AI",
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left: Bio */}
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="Performance Marketing Strategist"
              className="mb-6"
            />
            <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              <p>
                I&apos;m Mohammad Safiul Alam — a performance marketing strategist with 2.5+ years of hands-on experience helping businesses across the UK, USA, UAE, Netherlands, Australia, Canada and beyond grow through paid advertising and data-driven marketing.
              </p>
              <p>
                I&apos;ve managed over $500K in advertising spend across 300+ digital marketing projects on Meta, Google, TikTok and LinkedIn. My work sits at the intersection of strategy, data, and execution — I don&apos;t just run ads, I build acquisition systems.
              </p>
              <p>
                My approach is built on accurate measurement. I use GTM, GA4, Meta Pixel with Conversion API, and server-side tracking to ensure every decision is based on clean, reliable data. I also build out marketing automation workflows using GoHighLevel, Make.com and Kit to ensure leads are nurtured and converted efficiently after the first click.
              </p>
              <p>
                If a campaign isn&apos;t performing, I want to know exactly why — and I want data to show me. That mindset is what separates sustainable growth from guesswork.
              </p>
            </div>

            {/* Tool/platform badges */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
                Tools & Platforms
              </p>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border px-3 py-1 text-xs font-medium"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="#contact"
                id="about-cta"
                className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                style={{ color: "var(--accent)" }}
              >
                Let&apos;s Work Together
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right: Performance Framework */}
          <div>
            <div
              className="rounded-xl border p-8"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p
                className="mb-6 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                My Performance Framework
              </p>
              <div className="space-y-0">
                {frameworkSteps.map((item, index) => (
                  <div key={item.step} className="flex gap-4">
                    {/* Step connector */}
                    <div className="flex flex-col items-center">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold"
                        style={{
                          borderColor: index === 0 ? "var(--accent)" : "var(--border)",
                          background: index === 0 ? "var(--accent-glow)" : "var(--surface-2)",
                          color: index === 0 ? "var(--accent)" : "var(--text-muted)",
                        }}
                      >
                        {item.step}
                      </div>
                      {index < frameworkSteps.length - 1 && (
                        <div
                          className="flex-1 w-px my-1"
                          style={{ background: "var(--border)" }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Step content */}
                    <div className="pb-5 pt-1">
                      <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
