"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { motion } from "framer-motion";
import { type CaseStudy } from "@/types";
import { cn } from "@/lib/utils";

const platformLabel: Record<string, string> = {
  "meta-sales": "Meta Sales Ads",
  "meta-leads": "Meta Lead Ads",
  meta: "Meta Sales Ads",
  google: "Google Ads",
  tiktok: "TikTok Ads",
};

const platformColor: Record<string, string> = {
  "meta-sales": "#1877f2",
  "meta-leads": "#0084ff",
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
    <motion.article
      whileHover={{ y: -6, transition: { duration: 0.2, ease: "easeOut" } }}
      className={cn(
        "group relative flex flex-col rounded-xl border transition-all duration-200 overflow-hidden h-full",
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
      {/* Optional Ad Image Banner */}
      {study.image && (
        <div className="relative w-full h-44 overflow-hidden border-b bg-[var(--surface-2)]" style={{ borderColor: "var(--border)" }}>
          <Image
            src={study.image}
            alt={`${study.niche} campaign report`}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent 40%, rgba(17, 17, 19, 0.8) 100%)",
            }}
          />
          <span
            className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold backdrop-blur-md"
            style={{
              background: "rgba(0,0,0,0.65)",
              color: "var(--text-muted)",
              border: "1px solid var(--border)",
            }}
          >
            <ImageIcon size={10} /> Result Proof
          </span>
        </div>
      )}

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
          className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:scale-110"
          style={{
            borderColor: "var(--border)",
            color: "var(--accent)",
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
    </motion.article>
  );
}
