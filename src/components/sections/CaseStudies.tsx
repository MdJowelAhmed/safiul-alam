"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FileText, ExternalLink, X, Eye } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";
import { motion, AnimatePresence } from "framer-motion";

export interface PDFCaseStudy {
  id: string;
  number: string;
  title: string;
  platform: "Meta Sales" | "Meta Leads" | "Google Ads" | "TikTok Ads";
  image: string;
  pdfUrl: string;
}

const pdfCaseStudies: PDFCaseStudy[] = [
  {
    id: "148-meta-sales",
    number: "148",
    title: "148 Meta Sales Ads Case Study",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales --148.webp",
    pdfUrl: "/case-studies-pdf/148-Meta Sales ads .pdf",
  },
  {
    id: "286-meta-sales",
    number: "286",
    title: "286 Meta Sales Ads Case Study",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales - 286.webp",
    pdfUrl: "/case-studies-pdf/286 Meta Sales ads .pdf",
  },
  {
    id: "313-meta-sales",
    number: "313",
    title: "313 Meta Sales Ads Case Study",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales -313.webp",
    pdfUrl: "/case-studies-pdf/313 Meta Sales ads .pdf",
  },
  {
    id: "336-meta-sales",
    number: "336",
    title: "336 Meta Sales Case Study",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales -336.webp",
    pdfUrl: "/case-studies-pdf/336-Meta Sales.pdf",
  },
  {
    id: "2009-meta-sales",
    number: "2009",
    title: "2009 Meta Sales Ads Case Study",
    platform: "Meta Sales",
    image: "/assets/case-studies/Meta sales -2009.webp",
    pdfUrl: "/case-studies-pdf/2009 Meta sales ads.pdf",
  },
  {
    id: "950-meta-leads",
    number: "950",
    title: "950 Meta Leads Ads Case Study",
    platform: "Meta Leads",
    image: "/assets/case-studies/meta leads --950.webp",
    pdfUrl: "/case-studies-pdf/950 Meta Leads ads.pdf",
  },
  {
    id: "2195-meta-leads",
    number: "2195",
    title: "2195 Meta Leads Ads Case Study",
    platform: "Meta Leads",
    image: "/assets/case-studies/meta-leads-2195.webp",
    pdfUrl: "/case-studies-pdf/2195 Meta Leads Ads .pdf",
  },
  {
    id: "9263-meta-leads",
    number: "9263",
    title: "9263 Meta Leads Ads Case Study",
    platform: "Meta Leads",
    image: "/assets/case-studies/meta leads --9263.webp",
    pdfUrl: "/case-studies-pdf/9263 Meta Leads ads .pdf",
  },
  {
    id: "219-google-ads",
    number: "219",
    title: "219 Google Ads Case Study",
    platform: "Google Ads",
    image: "/assets/case-studies/Google sales-219.webp",
    pdfUrl: "/case-studies-pdf/219 Google ads.pdf",
  },
  {
    id: "4472-tiktok-sales",
    number: "4472",
    title: "4472 TikTok Sales Case Study",
    platform: "TikTok Ads",
    image: "/assets/case-studies/Tiktok sales -4472.webp",
    pdfUrl: "/case-studies-pdf/4472 Tiktok sales.pdf",
  },
];

export function CaseStudies() {
  const [selectedPdf, setSelectedPdf] = useState<PDFCaseStudy | null>(null);

  // Lock body scroll when PDF modal is active
  useEffect(() => {
    if (selectedPdf) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPdf]);

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedPdf(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="border-t relative"
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
            eyebrow="Verified PDF Documentation"
            title="Case Studies"
            description="Explore in-depth PDF case studies detailing strategy execution, ad performance, and business growth. Click any card to preview the full PDF document inside the modal."
            className="mb-12"
          />
        </FadeIn>

        {/* All Case Studies Grid */}
        <StaggerContainer staggerChildren={0.07} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pdfCaseStudies.map((cs) => (
            <StaggerItem key={cs.id}>
              <div
                onClick={() => setSelectedPdf(cs)}
                className="block h-full group cursor-pointer"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedPdf(cs);
                }}
                title={`View ${cs.title} PDF Modal`}
              >
                <HoverCard
                  className="group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden h-full shadow-lg group-hover:border-[var(--accent)]"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* Image Container with Hover Zoom */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--surface-2)]">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    {/* Platform Tag Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider border shadow-md backdrop-blur-md"
                        style={{
                          background: "rgba(10, 10, 11, 0.85)",
                          borderColor: "var(--border)",
                          color: "var(--accent)",
                        }}
                      >
                        {cs.platform}
                      </span>
                    </div>

                    {/* Quick Preview Badge at top right */}
                    <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border bg-black/75 text-[var(--accent)] shadow-md transition-transform group-hover:scale-110">
                      <Eye size={16} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="mb-4 text-base font-bold leading-snug group-hover:text-[var(--accent)] transition-colors duration-200" style={{ color: "var(--text)" }}>
                      {cs.title}
                    </h3>

                    {/* Open Modal CTA Footer */}
                    <div
                      className="mt-auto pt-3 border-t flex items-center justify-between text-xs font-semibold group-hover:text-[var(--accent)] transition-colors duration-200"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText size={14} style={{ color: "var(--accent)" }} />
                        <span>Preview PDF Case Study</span>
                      </span>
                      <Eye size={14} className="transition-transform duration-200 group-hover:scale-110" />
                    </div>
                  </div>
                </HoverCard>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      {/* PDF Modal Viewer */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedPdf(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-5xl h-[90vh] flex flex-col rounded-2xl border shadow-2xl overflow-hidden"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Bar */}
              <div
                className="flex items-center justify-between px-5 py-3.5 border-b shrink-0"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface-2)",
                }}
              >
                <div className="flex items-center gap-3 truncate pr-4">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                      color: "var(--accent)",
                    }}
                  >
                    <FileText size={18} />
                  </div>
                  <div className="truncate">
                    <h3 className="text-sm font-bold truncate" style={{ color: "var(--text)" }}>
                      {selectedPdf.title}
                    </h3>
                    <p className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
                      {selectedPdf.platform} • Case Study PDF
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {/* Open in New Tab Option */}
                  <a
                    href={selectedPdf.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all hover:border-[var(--accent)] hover:bg-[var(--bg)]"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface)",
                      color: "var(--text)",
                    }}
                  >
                    <span>Open New Tab</span>
                    <ExternalLink size={13} style={{ color: "var(--accent)" }} />
                  </a>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedPdf(null)}
                    aria-label="Close PDF Viewer"
                    className="flex h-9 w-9 items-center justify-center rounded-xl border transition-all hover:bg-[var(--bg)] cursor-pointer"
                    style={{
                      borderColor: "var(--border)",
                      color: "var(--text-muted)",
                    }}
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer iFrame Frame */}
              <div className="flex-1 w-full h-full bg-zinc-950 relative">
                <iframe
                  src={`${selectedPdf.pdfUrl}#toolbar=1&navpanes=0`}
                  title={selectedPdf.title}
                  className="w-full h-full border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
