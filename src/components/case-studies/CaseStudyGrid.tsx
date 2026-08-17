"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { cn } from "@/lib/utils";

type FilterKey = "all" | "meta" | "google" | "tiktok" | "ecommerce" | "lead-gen";

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  { key: "meta", label: "Meta Ads" },
  { key: "google", label: "Google Ads" },
  { key: "tiktok", label: "TikTok Ads" },
  { key: "ecommerce", label: "eCommerce" },
  { key: "lead-gen", label: "Lead Generation" },
];

export function CaseStudyGrid() {
  const [active, setActive] = useState<FilterKey>("all");

  const filtered = caseStudies.filter((study) => {
    if (active === "all") return true;
    if (active === "meta" || active === "google" || active === "tiktok")
      return study.platform === active;
    return study.category.includes(active);
  });

  return (
    <div>
      {/* Filter pills */}
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter case studies by platform or category"
      >
        {filters.map(({ key, label }) => (
          <button
            key={key}
            id={`filter-${key}`}
            onClick={() => setActive(key)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-150 border",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            )}
            style={
              active === key
                ? {
                    background: "var(--accent)",
                    borderColor: "var(--accent)",
                    color: "var(--bg)",
                  }
                : {
                    background: "transparent",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }
            }
            aria-pressed={active === key}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Count */}
      <p className="mb-6 text-xs" style={{ color: "var(--text-dim)" }}>
        Showing {filtered.length} of {caseStudies.length} case studies
      </p>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((study) => (
          <CaseStudyCard key={study.slug} study={study} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center" style={{ color: "var(--text-muted)" }}>
          No case studies found for this filter.
        </div>
      )}
    </div>
  );
}
