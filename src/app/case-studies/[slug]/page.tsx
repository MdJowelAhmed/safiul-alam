import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Image as ImageIcon } from "lucide-react";
import type { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";
import { ImageZoom } from "@/components/case-studies/ImageZoom";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: `${study.niche} — ${study.market} | Case Study | ${siteConfig.fullName}`,
    description: study.summary ?? `Performance marketing case study: ${study.niche} in ${study.market}.`,
  };
}

const platformLabel: Record<string, string> = {
  meta: "Meta Sales Ads",
  google: "Google Ads",
  tiktok: "TikTok Ads",
};

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((s) => s.slug !== study.slug && s.platform === study.platform)
    .slice(0, 3);

  return (
    <main>
      <style>{`
        .case-link:hover {
          border-color: var(--accent) !important;
        }
        .back-link:hover {
          color: var(--accent-text) !important;
        }
      `}</style>

      <div
        className="border-b"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          paddingTop: "7rem",
          paddingBottom: "3rem",
        }}
      >
        <Container>
          <Link
            href="/#case-studies"
            className="back-link inline-flex items-center gap-1.5 text-sm mb-6 transition-colors"
            style={{ color: "var(--text-muted)" }}
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to Case Studies
          </Link>

          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="rounded-full px-3 py-1 text-xs font-semibold"
              style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
            >
              {platformLabel[study.platform]}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)" }}>
              {study.market}
            </span>
          </div>

          <h1 className="text-h1 mb-2" style={{ color: "var(--text)" }}>
            {study.niche}
          </h1>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Objective: {study.objective}
          </p>
        </Container>
      </div>

      <Container className="py-16">
        {/* Campaign Metrics */}
        <section aria-label="Campaign metrics">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
            Campaign Results
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border p-5 text-center"
                style={{
                  background: metric.highlight ? "var(--accent-glow)" : "var(--surface)",
                  borderColor: metric.highlight ? "var(--accent)" : "var(--border)",
                }}
              >
                <p
                  className="text-2xl font-bold tabular-nums"
                  style={{ color: metric.highlight ? "var(--accent)" : "var(--text)" }}
                >
                  {metric.value}
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--text-muted)" }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ad / Campaign Reporting Proof Screenshot */}
        {study.image && (
          <section aria-label="Ad Reporting Screenshot" className="mt-12">
            <ImageZoom
              src={study.image}
              alt={`${study.niche} dashboard reporting proof`}
              title="Verified Campaign Reporting & Creative Proof"
              zoomLevel={1.5}
              lensSize={280}
            />
          </section>
        )}

        {/* Summary */}
        {study.summary && (
          <section aria-label="Campaign summary" className="mt-12">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              Campaign Overview & Strategy
            </h2>
            <p
              className="max-w-3xl text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {study.summary}
            </p>
          </section>
        )}

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs font-medium"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                color: "var(--text-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section aria-label="Related case studies" className="mt-16 border-t pt-10" style={{ borderColor: "var(--border)" }}>
            <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
              More {platformLabel[study.platform]} Case Studies
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/case-studies/${s.slug}`}
                  className="case-link rounded-xl border p-5 transition-colors duration-150"
                  style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                >
                  <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {s.niche}
                  </p>
                  <p className="mt-0.5 text-xs" style={{ color: "var(--text-muted)" }}>
                    {s.market}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back CTA */}
        <div className="mt-12">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
            style={{ background: "var(--accent)", color: "var(--bg)" }}
          >
            Work with me on a similar project
          </Link>
        </div>
      </Container>
    </main>
  );
}
