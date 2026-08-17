import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type CaseStudy } from "@/types";
import { cn } from "@/lib/utils";

const platformLabel: Record<string, string> = {
  meta: "Meta Ads",
  google: "Google Ads",
  tiktok: "TikTok Ads",
};

const platformColor: Record<string, string> = {
  meta: "#1877f2",
  google: "#ea4335",
  tiktok: "#ff0050",
};

interface CaseStudyCardProps {
  study: CaseStudy;
  className?: string;
}

export function CaseStudyCard({ study, className }: CaseStudyCardProps) {
  const highlightMetrics = study.metrics.filter((m) => m.highlight);
  const otherMetrics = study.metrics.filter((m) => !m.highlight);

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-xl border transition-all duration-200 overflow-hidden",
        className
      )}
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
      }}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 p-5 pb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
              style={{
                background: `${platformColor[study.platform]}20`,
                color: platformColor[study.platform],
              }}
            >
              {platformLabel[study.platform]}
            </span>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs"
              style={{
                background: "var(--surface-2)",
                color: "var(--text-muted)",
              }}
            >
              {study.category.includes("ecommerce") ? "eCommerce" : "Lead Gen"}
            </span>
          </div>
          <h3 className="text-sm font-semibold leading-snug" style={{ color: "var(--text)" }}>
            {study.niche}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            {study.market}
          </p>
        </div>

        <Link
          href={`/case-studies/${study.slug}`}
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border opacity-0 group-hover:opacity-100 transition-all"
          style={{
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
          aria-label={`View ${study.niche} case study`}
        >
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>

      {/* Highlighted metrics */}
      {highlightMetrics.length > 0 && (
        <div
          className="mx-5 mb-4 grid gap-px rounded-lg overflow-hidden border"
          style={{
            borderColor: "var(--border)",
            gridTemplateColumns: `repeat(${Math.min(highlightMetrics.length, 2)}, 1fr)`,
          }}
        >
          {highlightMetrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center justify-center py-3 px-2 text-center"
              style={{ background: "var(--surface-2)" }}
            >
              <p
                className="text-lg font-bold tabular-nums tracking-tight"
                style={{ color: "var(--accent)" }}
              >
                {metric.value}
              </p>
              <p className="text-[10px] mt-0.5" style={{ color: "var(--text-muted)" }}>
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Other metrics */}
      {otherMetrics.length > 0 && (
        <div className="mx-5 mb-4 flex flex-wrap gap-x-4 gap-y-1.5">
          {otherMetrics.slice(0, 4).map((metric) => (
            <div key={metric.label} className="flex items-center gap-1.5">
              <span className="text-xs font-medium" style={{ color: "var(--text)" }}>
                {metric.value}
              </span>
              <span className="text-xs" style={{ color: "var(--text-dim)" }}>
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Summary */}
      {study.summary && (
        <div className="flex-1 px-5 pb-5">
          <p className="text-xs leading-relaxed line-clamp-3" style={{ color: "var(--text-muted)" }}>
            {study.summary}
          </p>
        </div>
      )}
    </article>
  );
}
