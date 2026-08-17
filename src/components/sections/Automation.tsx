"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ArrowRight } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

const ghlFlow = [
  "Form Submission",
  "CRM Entry",
  "Segmentation",
  "Tagging",
  "Notification",
  "Email Nurturing",
];

const makeFlow = [
  "Meta Lead Ad",
  "Make.com Trigger",
  "Kit Subscriber",
  "Email Sequence",
  "Follow-up Automation",
];

const tools = [
  {
    name: "GoHighLevel",
    description: "All-in-one CRM, pipeline, and automation platform for lead management and nurturing.",
  },
  {
    name: "Make.com",
    description: "No-code automation that connects Meta Ads, email tools, and CRMs in real time.",
  },
  {
    name: "Kit (ConvertKit)",
    description: "Email marketing automation for nurturing lead sequences and subscriber journeys.",
  },
  {
    name: "Zapier",
    description: "Connecting apps and automating workflows between platforms without developer resources.",
  },
  {
    name: "ManyChat",
    description: "Messenger and Instagram DM automation for instant lead qualification and follow-up.",
  },
];

export function Automation() {
  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="border-t"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Automation"
            title="CRM & Marketing Automation"
            description="Getting a lead is only the beginning. I build automated workflows that nurture leads, deliver timely communications, and move contacts through the funnel without manual intervention."
            className="mb-12"
          />
        </FadeIn>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* GoHighLevel Workflow */}
          <FadeIn direction="up">
            <HoverCard
              className="rounded-xl border p-6 h-full"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                GoHighLevel Lead Workflow
              </p>
              <StaggerContainer staggerChildren={0.06} className="flex flex-col gap-3">
                {ghlFlow.map((step, index) => (
                  <StaggerItem key={step} className="flex items-center gap-3">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        background: index === 0 ? "var(--accent)" : "var(--surface)",
                        color: index === 0 ? "var(--bg)" : "var(--text-muted)",
                        border: `1px solid ${index === 0 ? "transparent" : "var(--border)"}`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm" style={{ color: "var(--text)" }}>
                      {step}
                    </span>
                    {index < ghlFlow.length - 1 && (
                      <ArrowRight size={12} className="ml-auto shrink-0" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                    )}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </HoverCard>
          </FadeIn>

          {/* Meta → Make.com → Kit Workflow */}
          <FadeIn direction="up" delay={0.15}>
            <HoverCard
              className="rounded-xl border p-6 h-full"
              style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--accent)" }}>
                Meta → Make.com → Kit
              </p>
              <StaggerContainer staggerChildren={0.06} className="flex flex-col gap-3">
                {makeFlow.map((step, index) => (
                  <StaggerItem key={step} className="flex items-center gap-3">
                    <div
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                      style={{
                        background: index === 0 ? "var(--accent)" : "var(--surface)",
                        color: index === 0 ? "var(--bg)" : "var(--text-muted)",
                        border: `1px solid ${index === 0 ? "transparent" : "var(--border)"}`,
                      }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-sm" style={{ color: "var(--text)" }}>
                      {step}
                    </span>
                    {index < makeFlow.length - 1 && (
                      <ArrowRight size={12} className="ml-auto shrink-0" style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                    )}
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </HoverCard>
          </FadeIn>
        </div>

        {/* Tools grid */}
        <StaggerContainer staggerChildren={0.08} className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <StaggerItem key={tool.name}>
              <HoverCard
                className="rounded-xl border p-5 h-full"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
              >
                <h3 className="mb-1.5 text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {tool.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {tool.description}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
