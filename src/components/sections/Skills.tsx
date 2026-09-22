"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { skillCategories } from "@/data/skills";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
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
            eyebrow="Capabilities"
            title="Skills & Competencies"
            // description="A cross-functional skill set spanning paid media, analytics, automation, and strategic thinking — built through real campaign experience."
            className="mb-12"
          />
        </FadeIn>

        <StaggerContainer staggerChildren={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.id}>
              <HoverCard
                className="rounded-xl border p-6 h-full"
                style={{
                  background: "var(--surface-2)",
                  borderColor: "var(--border)",
                }}
              >
                <h3
                  className="mb-4 text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, borderColor: "var(--accent)", color: "var(--text)" }}
                      className="rounded-full border px-3 py-1 text-xs font-medium transition-colors cursor-default"
                      style={{
                        background: "var(--surface)",
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
