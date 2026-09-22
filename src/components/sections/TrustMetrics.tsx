"use client";

import { Container } from "@/components/shared/Container";
import { AnimatedNumber } from "@/components/shared/AnimatedNumber";
import { siteConfig } from "@/data/site";
import { StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

export function TrustMetrics() {
  return (
    <section
      id="trust"
      aria-label="Key metrics and credibility"
      className="border-y"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <Container>
        <StaggerContainer
          staggerChildren={0.1}
          className="grid grid-cols-2 divide-x divide-y md:grid-cols-4 md:divide-y-0"
          style={{ borderColor: "var(--border)" }}
        >
          {siteConfig.metrics.map(({ label, value, suffix }) => (
            <StaggerItem key={label}>
              <HoverCard className="flex flex-col items-center justify-center gap-2 px-6 py-10 text-center">
                <AnimatedNumber
                  value={value}
                  suffix={suffix}
                  className="text-4xl font-bold tabular-nums tracking-tight"
                />
                <p
                  className="text-xs font-medium uppercase tracking-widest"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
