"use client";

import Image from "next/image";
import { GraduationCap, Award, ExternalLink, CheckCircle2, BookOpen } from "lucide-react";
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
            eyebrow="Credentials & Academic Background"
            title="Certifications & Education"
            description="23+ verified industry credentials across Google, Meta, LinkedIn, TikTok, HubSpot, and Coursera."
            className="mb-12"
          />
        </FadeIn>

        {/* Certifications Grid — All 23 Certifications Displayed Together */}
        <div className="mb-16">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={18} style={{ color: "var(--accent)" }} aria-hidden="true" />
              <h3 className="text-base font-bold" style={{ color: "var(--text)" }}>
                Verified Professional Certifications
              </h3>
            </div>
            <span className="text-xs font-medium" style={{ color: "var(--text-dim)" }}>
              Click any card to verify credential in new tab
            </span>
          </div>

          <StaggerContainer staggerChildren={0.04} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {certs.map((cert) => (
              <StaggerItem key={cert.id}>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full group"
                    title={`Verify ${cert.title} credential - opens in new tab`}
                  >
                    <HoverCard
                      className="rounded-xl border p-5 h-full flex flex-col justify-between transition-all duration-300 group-hover:border-[var(--accent)] shadow-sm"
                      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                    >
                      <div>
                        {/* Header: Logo & Issuer Tag & External Link Icon */}
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            {cert.logo ? (
                              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg border bg-white p-1" style={{ borderColor: "var(--border)" }}>
                                <Image
                                  src={cert.logo}
                                  alt={`${cert.issuer} logo`}
                                  fill
                                  className="object-contain"
                                  sizes="40px"
                                />
                              </div>
                            ) : (
                              <div
                                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border"
                                style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--accent)" }}
                              >
                                <Award size={18} />
                              </div>
                            )}
                            <div>
                              <span
                                className="inline-block rounded-md px-2 py-0.5 text-[11px] font-semibold border"
                                style={{
                                  background: "var(--surface-2)",
                                  borderColor: "var(--border)",
                                  color: "var(--accent)",
                                }}
                              >
                                {cert.issuer}
                              </span>
                            </div>
                          </div>

                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" style={{ borderColor: "var(--border)", color: "var(--accent)" }}>
                            <ExternalLink size={13} aria-hidden="true" />
                          </div>
                        </div>

                        {/* Course Title */}
                        <h4 className="text-sm font-bold leading-snug group-hover:text-[var(--accent)] transition-colors duration-200" style={{ color: "var(--text)" }}>
                          {cert.title}
                        </h4>
                      </div>

                      {/* Bottom Footer: Verification Badge */}
                      {/* <div className="mt-4 pt-3 border-t flex items-center justify-between text-[11px]" style={{ borderColor: "var(--border)" }}>
                        <span className="flex items-center gap-1 font-medium" style={{ color: "var(--accent)" }}>
                          <CheckCircle2 size={12} />
                          Verified Credential
                        </span>
                        <span className="text-[10px] uppercase font-semibold tracking-wider" style={{ color: "var(--text-dim)" }}>
                          Verify Certificate ↗
                        </span>
                      </div> */}
                    </HoverCard>
                  </a>
                ) : (
                  <HoverCard
                    className="rounded-xl border p-5 h-full flex flex-col justify-between"
                    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                  >
                    <div>
                      <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                        {cert.title}
                      </p>
                      <p className="mt-1 text-xs font-medium" style={{ color: "var(--accent)" }}>
                        {cert.issuer}
                      </p>
                    </div>
                  </HoverCard>
                )}
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Education Section — Modern Design Showcase */}
        <FadeIn direction="up">
          <div className="border-t pt-12" style={{ borderColor: "var(--border)" }}>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap size={20} style={{ color: "var(--accent)" }} aria-hidden="true" />
              <h3 className="text-lg font-bold" style={{ color: "var(--text)" }}>
                Academic Background & Education
              </h3>
            </div>

            <StaggerContainer staggerChildren={0.1} className="grid gap-6 md:grid-cols-1 max-w-2xl">
              {education.map((edu) => (
                <StaggerItem key={edu.id}>
                  <HoverCard
                    className="relative rounded-2xl border p-7 overflow-hidden transition-all duration-300 shadow-md"
                    style={{
                      background: "var(--surface)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {/* Glassmorphic accent bar on left */}
                    <div
                      className="absolute top-0 left-0 w-1.5 h-full"
                      style={{ background: "var(--accent)" }}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border shadow-inner"
                          style={{
                            background: "var(--accent-glow)",
                            borderColor: "var(--border)",
                            color: "var(--accent)",
                          }}
                        >
                          <BookOpen size={24} />
                        </div>
                        <div>
                          <span
                            className="inline-block rounded-md px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider mb-1"
                            style={{
                              background: "var(--surface-2)",
                              color: "var(--accent)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            Higher Education Degree
                          </span>
                          <h4 className="text-lg font-bold leading-tight" style={{ color: "var(--text)" }}>
                            {edu.title}
                          </h4>
                          <p className="mt-1 text-sm font-medium" style={{ color: "var(--text-muted)" }}>
                            {edu.issuer}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border shrink-0" style={{ background: "var(--surface-2)", borderColor: "var(--border)", color: "var(--text)" }}>
                        <GraduationCap size={15} style={{ color: "var(--accent)" }} />
                        <span>Graduated</span>
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
