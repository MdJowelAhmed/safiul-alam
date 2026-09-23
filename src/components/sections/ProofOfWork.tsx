import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CaseStudyGrid } from "@/components/case-studies/CaseStudyGrid";

export function ProofOfWork() {
  return (
    <section
      id="proof-of-work"
      aria-labelledby="proof-of-work-heading"
      className="border-t"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <Container>
        <SectionHeading
          eyebrow="Selected Work Sample"
          title="Proof of Work"
          description="Real campaigns. Real budgets. Real results. Explore measurable outcomes across Meta, Google, and TikTok advertising."
          className="mb-10"
        />
        <CaseStudyGrid />
      </Container>
    </section>
  );
}
