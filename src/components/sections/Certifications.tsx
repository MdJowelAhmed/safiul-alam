"use client";

import { GraduationCap, Award } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { certifications } from "@/data/certifications";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

export function Certifications() {
  const certs = certifications.filter((c) => c.type === "certification");
  const education = certifications.filter((c) => c.type === "education");

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Credentials"
            title="Certifications & Education"
            className="mb-12"
          />
        </FadeIn>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Certifications */}
          <FadeIn direction="up">
            <div className="mb-5 flex items-center gap-2">
              <Award size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Certifications
              </h3>
            </div>
            <StaggerContainer staggerChildren={0.08} className="space-y-4">
              {certs.map((cert) => (
                <StaggerItem key={cert.id}>
                  <HoverCard
                    className="rounded-xl border p-5"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <p className="text-base font-semibold" style={{ color: "var(--text)" }}>
                      {cert.title}
                    </p>
                    <p className="mt-0.5 text-sm font-medium" style={{ color: "var(--accent)" }}>
                      {cert.issuer}
                    </p>
                    <div className="mt-3 space-y-1">
                      {cert.duration && (
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          📅 {cert.duration}
                        </p>
                      )}
                      {cert.date && (
                        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                          🏅 Issued: {cert.date}
                        </p>
                      )}
                      {cert.credentialId && (
                        <p className="text-xs font-mono" style={{ color: "var(--text-dim)" }}>
                          ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          {/* Education */}
          <FadeIn direction="up" delay={0.2}>
            <div className="mb-5 flex items-center gap-2">
              <GraduationCap size={16} style={{ color: "var(--accent)" }} aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Education
              </h3>
            </div>
            <StaggerContainer staggerChildren={0.08} className="space-y-4">
              {education.map((edu) => (
                <StaggerItem key={edu.id}>
                  <HoverCard
                    className="rounded-xl border p-5"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <p className="text-base font-semibold" style={{ color: "var(--text)" }}>
                      {edu.title}
                    </p>
                    <p className="mt-0.5 text-sm" style={{ color: "var(--text-muted)" }}>
                      {edu.issuer}
                    </p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
