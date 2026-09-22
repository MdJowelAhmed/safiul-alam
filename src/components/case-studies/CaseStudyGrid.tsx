"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { caseStudies } from "@/data/case-studies";
import { cn } from "@/lib/utils";

type FilterKey = "meta-sales" | "meta-leads" | "google" | "tiktok" | "ecommerce" | "lead-gen";

const filters: { key: FilterKey; label: string }[] = [
  { key: "meta-sales", label: "Meta Sales Ads" },
  { key: "meta-leads", label: "Meta Lead Ads" },
  { key: "google", label: "Google Ads" },
  { key: "tiktok", label: "TikTok Ads" },
  // { key: "ecommerce", label: "eCommerce" },
  // { key: "lead-gen", label: "Lead Generation" },
];

const INITIAL_COUNT = 6;

export function CaseStudyGrid() {
  const [active, setActive] = useState<FilterKey>("meta-sales");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_COUNT);

  const handleFilterChange = (key: FilterKey) => {
    setActive(key);
    setVisibleCount(INITIAL_COUNT);
  };

  const filtered = caseStudies.filter((study) => {
    if (active === "meta-sales") return study.platform === "meta-sales" || study.platform === "meta";
    if (active === "meta-leads") return study.platform === "meta-leads";
    if (active === "google" || active === "tiktok")
      return study.platform === active;
    return study.category.includes(active as any);
  });

  const visibleStudies = filtered.slice(0, visibleCount);

  return (
    <div>
      {/* Filter pills */}
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter case studies by platform or category"
      >
        {filters.map(({ key, label }) => (
          <motion.button
            key={key}
            id={`filter-${key}`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => handleFilterChange(key)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-semibold transition-colors duration-150 border cursor-pointer",
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
                    background: "var(--surface-2)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }
            }
            aria-pressed={active === key}
          >
            {label}
          </motion.button>
        ))}
      </div>

      {/* Count */}
      <p className="mb-6 text-xs" style={{ color: "var(--text-dim)" }}>
        Showing {visibleStudies.length} of {filtered.length} case studies
      </p>

      {/* Grid with smooth Framer Motion layout animation */}
      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibleStudies.map((study) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <CaseStudyCard study={study} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-16 text-center"
          style={{ color: "var(--text-muted)" }}
        >
          No case studies found for this filter.
        </motion.div>
      )}

      {/* View More / Show Less Button */}
      {filtered.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          {visibleCount < filtered.length ? (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-xs font-semibold shadow-md transition-all cursor-pointer"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--accent-text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--text)";
              }}
            >
              <span>View More </span>
              <ChevronDown size={15} />
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setVisibleCount(INITIAL_COUNT)}
              className="inline-flex items-center gap-2 rounded-xl border px-6 py-3 text-xs font-semibold shadow-md transition-all cursor-pointer"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              <span>Show Less</span>
              <ChevronUp size={15} />
            </motion.button>
          )}
        </div>
      )}
    </div>
  );
}
