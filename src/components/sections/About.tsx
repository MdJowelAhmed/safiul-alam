"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

const frameworkSteps = [
  { step: "01", label: "Research", description: "Understand the market, audience, and competitive landscape." },
  { step: "02", label: "Strategy", description: "Build a data-informed plan aligned with business goals." },
  { step: "03", label: "Launch", description: "Execute campaigns with precision targeting and compelling creative." },
  { step: "04", label: "Track", description: "Measure every conversion event with accurate attribution." },
  { step: "05", label: "Test", description: "Run structured experiments across audiences, creatives, and offers." },
  { step: "06", label: "Optimize", description: "Act on data to reduce costs and improve conversion rates." },
  { step: "07", label: "Scale", description: "Allocate budget to what works and grow profitably." },
];

const tools = [
  "Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads",
  "GTM", "GA4", "Conversion Tracking", "GoHighLevel",
  "Make.com", "Kit", "AI", "n8n"
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left: Bio */}
          <FadeIn direction="up">
            <div>
              <SectionHeading
                eyebrow="About Me"
                title="Performance Marketing Strategist"
                className="mb-6"
              />
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <p>
                  I&apos;m Mohammad Safiul Alam, a Performance Marketing Strategist with 2.5+ years of hands-on experience helping businesses generate qualified leads, acquire customers, increase sales, and improve marketing performance.
                </p>
                <p>
                  My work goes beyond campaign execution. I build strategies around the full customer acquisition journey, from market and audience research to campaign planning, creative testing, conversion tracking, optimization, and scaling. I work across Meta Ads, Google Ads, TikTok Ads, and LinkedIn Ads, supporting both lead generation and e-commerce growth.
                </p>
                <p>
                  I connect paid media with analytics, conversion tracking, funnel optimization, and marketing automation to create a more measurable and connected marketing process. My technical experience includes Google Tag Manager, GA4, conversion tracking, conversion API, GoHighLevel, n8n, Make, and Kit.
                </p>
                <p>
                  I also use AI within my marketing process to support research, strategy development, content and creative work, analysis, and operational efficiency. I combine these capabilities with practical marketing experience and human judgment to keep every decision aligned with the business objective.
                </p>
                <p>
                  With 300+ digital marketing projects and $1M+ in managed advertising spend, I&apos;ve worked across different industries, business models, and campaign objectives. My focus goes beyond clicks and impressions to the metrics that matter to the business, including qualified leads, customer acquisition, sales, efficiency, and scalable growth.
                </p>
              </div>

              {/* Tool/platform badges */}
              <div className="mt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>
                  Tools & Platforms
                </p>
                <StaggerContainer staggerChildren={0.05} className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <StaggerItem key={tool}>
                      <motion.span
                        whileHover={{ scale: 1.05, borderColor: "var(--accent)", color: "var(--text)" }}
                        className="inline-block rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-default"
                        style={{
                          background: "var(--surface)",
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {tool}
                      </motion.span>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              <div className="mt-8">
                <Link
                  href="#contact"
                  id="about-cta"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors group"
                  style={{ color: "var(--accent)" }}
                >
                  Let&apos;s Work Together
                  <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </FadeIn>

          {/* Right: Performance Framework */}
          <FadeIn direction="up" delay={0.2}>
            <HoverCard
              className="rounded-xl border p-8"
              style={{ background: "var(--surface)", borderColor: "var(--border)" }}
            >
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                My Performance Framework
              </p>
              <p
                className="mb-6 text-xs leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                I use this framework to build, measure, and continuously improve marketing performance, keeping every stage of the customer acquisition journey connected to a clear business objective.
              </p>
              <StaggerContainer staggerChildren={0.08} className="space-y-0">
                {frameworkSteps.map((item, index) => (
                  <StaggerItem key={item.step} className="flex gap-4">
                    {/* Step connector */}
                    <div className="flex flex-col items-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-colors"
                        style={{
                          borderColor: index === 0 ? "var(--accent)" : "var(--border)",
                          background: index === 0 ? "var(--accent-glow)" : "var(--surface-2)",
                          color: index === 0 ? "var(--accent)" : "var(--text-muted)",
                        }}
                      >
                        {item.step}
                      </motion.div>
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
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </HoverCard>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
