"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CheckCircle2, ArrowRight, Workflow, Cpu, Layers } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";
import { ImageZoom } from "@/components/case-studies/ImageZoom";

export interface AutomationWorkflow {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  steps: string[];
}

const workflows: AutomationWorkflow[] = [
  {
    id: "ghl-workflow",
    title: "GoHighLevel Lead Workflow Automation",
    description:
      "Automated the complete lead workflow, from form submission and CRM capture to lead segmentation, tagging, notifications, and personalized email nurturing.",
    image: "/assets/marketing-automotion/Image code 125.jpg",
    tags: ["GoHighLevel", "Lead Nurturing", "CRM Capture", "Email Automation"],
    steps: ["Form Submission", "CRM Capture", "Lead Segmentation", "Tagging & Alerts", "Email Nurture"],
  },
  {
    id: "make-kit-workflow",
    title: "Meta Lead Automation | Make.com + Kit",
    description:
      "Built and tested an automated Meta → Make.com → Kit workflow that sends new leads to Kit and automatically enrolls them in an email sequence.",
    image: "/assets/marketing-automotion/Image code 126.jpg",
    tags: ["Meta Lead Ads", "Make.com", "Kit (ConvertKit)", "Auto-Enrollment"],
    steps: ["Meta Lead Ad", "Make.com Trigger", "Kit Subscriber Sync", "Email Sequence"],
  },
  {
    id: "hubspot-capi-workflow",
    title: "Meta Lead Qualification System Setup with HubSpot CRM",
    description:
      "I built a lead management and qualification system connecting Meta Lead Ads with HubSpot. The system automatically brings leads into HubSpot, organizes them as Not Reviewed, Qualified, Potential, or Unqualified based on treatment interest and travel timeline, and sends Sales Qualified Lead signals back to Meta through the Conversions API to support better lead optimization.",
    image: "/assets/marketing-automotion/Image code 133.jpg",
    tags: ["Meta Lead Ads", "HubSpot CRM", "Lead Qualification", "Server-Side CAPI"],
    steps: ["Meta Lead Capture", "HubSpot Auto Sync", "Qualification Logic", "Meta CAPI Feedback"],
  },
];

const tools = [
  {
    name: "GoHighLevel",
    description: "All-in-one CRM, pipeline, and automation platform for lead management and nurturing.",
  },
  {
    name: "Make.com",
    description: "No-code automation connecting Meta Ads, email tools, and CRMs in real time.",
  },
  {
    name: "HubSpot CRM",
    description: "Advanced lead management, pipeline stage tracking, and qualification systems.",
  },
  {
    name: "Kit (ConvertKit)",
    description: "Email marketing automation for nurturing lead sequences and subscriber journeys.",
  },
  {
    name: "n8n & Zapier",
    description: "Workflow automation and app integration engines for seamless business operations.",
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
            eyebrow="Automation & Workflows"
            title="Marketing Automation & Lead Workflows"
            // description="Getting a lead is only the beginning. I build automated workflows that nurture leads, deliver timely communications, and move contacts through the funnel without manual intervention."
            className="mb-12"
          />
        </FadeIn>

        {/* 3 Featured Workflows Grid */}
        <StaggerContainer staggerChildren={0.12} className="grid gap-8 lg:grid-cols-3">
          {workflows.map((item) => (
            <StaggerItem key={item.id}>
              <HoverCard
                className="group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden h-full shadow-lg"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Image Zoom Proof Container */}
                <div className="p-2 bg-[var(--surface-2)] border-b border-[var(--border)]">
                  <ImageZoom
                    src={item.image}
                    alt={`${item.title} workflow diagram`}
                    title=""
                    zoomLevel={1.5}
                    lensSize={220}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                        style={{
                          background: "var(--surface-2)",
                          color: "var(--accent)",
                          border: "1px solid var(--border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-2.5 text-lg font-bold leading-snug" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed flex-1 mb-5" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>

                  {/* Workflow Steps Pill Flow */}
                  <div className="pt-4 border-t border-[var(--border)] mb-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider mb-2.5 flex items-center gap-1.5" style={{ color: "var(--text-dim)" }}>
                      <Workflow size={13} style={{ color: "var(--accent)" }} />
                      <span>Workflow Flow</span>
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5">
                      {item.steps.map((step, idx) => (
                        <div key={step} className="flex items-center gap-1 text-[11px]">
                          <span
                            className="rounded-md px-2 py-0.5 font-medium"
                            style={{
                              background: "var(--surface-2)",
                              color: "var(--text)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {step}
                          </span>
                          {idx < item.steps.length - 1 && (
                            <ArrowRight size={10} style={{ color: "var(--text-dim)" }} aria-hidden="true" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t flex items-center gap-1.5 text-[11px] font-medium" style={{ borderColor: "var(--border)", color: "var(--accent)" }}>
                    <CheckCircle2 size={13} />
                    <span>Verified Automation System</span>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Automation Stack & Tools Grid */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-2">
            <Cpu size={18} style={{ color: "var(--accent)" }} />
            <h3 className="text-base font-semibold" style={{ color: "var(--text)" }}>
              Automation & CRM Platforms
            </h3>
          </div>
          <StaggerContainer staggerChildren={0.06} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <StaggerItem key={tool.name}>
                <HoverCard
                  className="rounded-xl border p-5 h-full"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <h4 className="mb-1.5 text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {tool.name}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {tool.description}
                  </p>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
