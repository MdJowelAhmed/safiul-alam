"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Tag, Globe, Activity, Code2, ShoppingCart, BookOpen } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

const trackingStack = [
  { id: "gtm", label: "Google Tag Manager", description: "Central tag management for all tracking scripts" },
  { id: "ga4", label: "Google Analytics 4", description: "Full user journey measurement and event tracking" },
  { id: "meta-pixel", label: "Meta Pixel + CAPI", description: "Browser and server-side conversion tracking" },
  { id: "server-side", label: "Server-Side Tracking", description: "Accurate data, bypassing browser limitations" },
  { id: "ecom-events", label: "eCommerce Event Tracking", description: "ViewContent, AddToCart, Purchase, InitiateCheckout" },
  { id: "lead-tracking", label: "Lead & Booking Tracking", description: "Form submissions, calls, and appointment tracking" },
];

const flowSteps = [
  { label: "Traffic", icon: Globe },
  { label: "Tracking", icon: Tag },
  { label: "Attribution", icon: Activity },
  { label: "Data", icon: Code2 },
  { label: "Optimisation", icon: ShoppingCart },
  { label: "Growth", icon: BookOpen },
];

export function Tracking() {
  return (
    <section
      id="tracking"
      aria-labelledby="tracking-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Measurement"
            title="Analytics & Conversion Tracking"
            description="Accurate attribution is the foundation of every campaign decision. I build tracking systems that capture every meaningful conversion event across the full funnel."
            className="mb-12"
          />
        </FadeIn>

        {/* Flow diagram */}
        <StaggerContainer staggerChildren={0.08} className="mb-12 flex flex-wrap items-center justify-center gap-0">
          {flowSteps.map(({ label, icon: Icon }, index) => (
            <StaggerItem key={label} className="flex items-center">
              <HoverCard className="flex flex-col items-center gap-2 px-4 py-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200"
                  style={{
                    borderColor: "var(--accent)",
                    background: "var(--accent-glow)",
                  }}
                >
                  <Icon size={18} aria-hidden="true" style={{ color: "var(--accent)" }} />
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--text)" }}>
                  {label}
                </span>
              </HoverCard>
              {index < flowSteps.length - 1 && (
                <div
                  className="h-px w-6 shrink-0"
                  style={{ background: "var(--border)" }}
                  aria-hidden="true"
                />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Tracking stack grid */}
        <StaggerContainer staggerChildren={0.08} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trackingStack.map((item) => (
            <StaggerItem key={item.id}>
              <HoverCard
                className="rounded-xl border p-5 transition-colors duration-150 h-full"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="mb-3 h-1.5 w-8 rounded-full"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />
                <h3 className="mb-1.5 text-sm font-semibold" style={{ color: "var(--text)" }}>
                  {item.label}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.description}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* TikTok tracking mention */}
        <FadeIn delay={0.2}>
          <HoverCard
            className="mt-6 rounded-xl border p-5 flex items-start gap-4"
            style={{ background: "var(--surface)", borderColor: "var(--border)" }}
          >
            <div
              className="shrink-0 mt-0.5 h-5 w-5 rounded-full border-2"
              style={{ borderColor: "var(--accent)" }}
              aria-hidden="true"
            />
            <div>
              <h3 className="mb-1 text-sm font-semibold" style={{ color: "var(--text)" }}>
                TikTok Conversion Tracking
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                TikTok Pixel setup, Events API integration, and conversion event mapping to ensure TikTok campaigns optimise against accurate purchase and lead data.
              </p>
            </div>
          </HoverCard>
        </FadeIn>
      </Container>
    </section>
  );
}
