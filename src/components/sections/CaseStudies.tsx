"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, Target, Award, Layers } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { caseStudies } from "@/data/case-studies";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";

const categories = [
  { id: "all", label: "All Case Studies" },
  { id: "ecommerce", label: "eCommerce & Sales" },
  { id: "lead-gen", label: "Lead Generation" },
  { id: "high-roas", label: "High ROAS (5x+)" },
];

export function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredStudies = caseStudies.filter((cs) => {
    if (activeFilter === "ecommerce") return cs.category.includes("ecommerce");
    if (activeFilter === "lead-gen") return cs.category.includes("lead-gen");
    if (activeFilter === "high-roas") {
      const roasMetric = cs.metrics.find((m) => m.label.toLowerCase().includes("roas") || m.label.toLowerCase().includes("roi"));
      if (!roasMetric) return false;
      const num = parseFloat(roasMetric.value);
      return !isNaN(num) && num >= 5.0;
    }
    return true;
  });

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="border-t"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--bg)",
      }}
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Strategic Breakdowns"
            title="Case Studies"
            description="Deep dives into performance strategy, execution methodology, and measurable business outcomes across global markets."
            className="mb-8"
          />
        </FadeIn>

        {/* Category Filter Tabs */}
        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 border cursor-pointer"
                style={{
                  background: activeFilter === cat.id ? "var(--accent)" : "var(--surface)",
                  color: activeFilter === cat.id ? "var(--bg)" : "var(--text-muted)",
                  borderColor: activeFilter === cat.id ? "var(--accent)" : "var(--border)",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Case Studies Grid */}
        <StaggerContainer staggerChildren={0.08} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredStudies.slice(0, 6).map((cs) => {
            const mainMetric = cs.metrics.find((m) => m.highlight) || cs.metrics[0];
            return (
              <StaggerItem key={cs.slug}>
                <HoverCard
                  className="group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden h-full shadow-lg"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* Image & Main Highlight Badge */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-2)]">
                    {cs.image && (
                      <Image
                        src={cs.image}
                        alt={cs.niche}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Top Badge */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border shadow-sm"
                        style={{
                          background: "rgba(10, 10, 11, 0.85)",
                          borderColor: "var(--border)",
                          color: "var(--accent)",
                        }}
                      >
                        {cs.platform.toUpperCase()}
                      </span>
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[10px] font-medium border shadow-sm"
                        style={{
                          background: "rgba(10, 10, 11, 0.85)",
                          borderColor: "var(--border)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {cs.market}
                      </span>
                    </div>

                    {/* Bottom Main Metric Highlight */}
                    {mainMetric && (
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] uppercase font-semibold tracking-wider text-gray-300">
                            {mainMetric.label}
                          </p>
                          <p className="text-xl font-extrabold text-white leading-none mt-0.5">
                            {mainMetric.value}
                          </p>
                        </div>
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full border bg-black/60 text-white transition-transform group-hover:scale-110 group-hover:bg-[var(--accent)] group-hover:text-[var(--bg)]"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <ArrowUpRight size={16} />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="mb-2 text-base font-bold leading-snug group-hover:text-[var(--accent)] transition-colors" style={{ color: "var(--text)" }}>
                      {cs.niche}
                    </h3>

                    <p className="text-xs leading-relaxed flex-1 mb-5 line-clamp-3" style={{ color: "var(--text-muted)" }}>
                      {cs.summary}
                    </p>

                    {/* Metrics Grid inside card */}
                    <div className="grid grid-cols-3 gap-2 py-3 px-3 rounded-xl border mb-5" style={{ background: "var(--surface-2)", borderColor: "var(--border)" }}>
                      {cs.metrics.slice(0, 3).map((m, idx) => (
                        <div key={idx} className="text-center">
                          <p className="text-[10px] font-medium truncate" style={{ color: "var(--text-dim)" }}>
                            {m.label}
                          </p>
                          <p className="text-xs font-bold mt-0.5" style={{ color: m.highlight ? "var(--accent)" : "var(--text)" }}>
                            {m.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* CTA Link */}
                    <Link
                      href={`/case-studies/${cs.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 rounded-xl border text-xs font-semibold transition-all hover:border-[var(--accent)] hover:bg-[var(--surface-2)]"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text)",
                      }}
                    >
                      <span>Read Full Case Study</span>
                      <ArrowUpRight size={14} style={{ color: "var(--accent)" }} />
                    </Link>
                  </div>
                </HoverCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* View All Case Studies Button */}
        <FadeIn className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold border transition-all hover:scale-105"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--accent)",
            }}
          >
            <Layers size={16} />
            <span>Explore All 21 Detailed Case Studies</span>
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
