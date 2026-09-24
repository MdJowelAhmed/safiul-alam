"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FileText, X, Eye, ShieldCheck, Lock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";
import { motion, AnimatePresence } from "framer-motion";

export interface PDFCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  platform: "Meta Sales" | "Meta Leads" | "Google Ads" | "TikTok Ads";
  image: string;
  pdfUrl: string;
}

const pdfCaseStudies: PDFCaseStudy[] = [
  {
    id: "4472-tiktok-sales",
    number: "4472",
    title: "Scaling a UK Beauty & Skincare Brand on TikTok Shop",
    subtitle: "From an Underperforming Account to a 13.10x ROI Growth Engine via TikTok Shop GMV Max",
    platform: "TikTok Ads",
    image: "/assets/case-studies/Tiktok sales -4472.webp",
    pdfUrl: "/case-studies-pdf/4472 Tiktok sales.pdf",
  },
  {
    id: "219-google-ads",
    number: "219",
    title: "Google Ads Case Study: Driving 18.85× ROAS for a U.S. Running Shoes Brand",
    subtitle: "$807 Ad Spend → $15,200 Tracked Conversion Value → 219 Purchases",
    platform: "Google Ads",
    image: "/assets/case-studies/Google sales-219.webp",
    pdfUrl: "/case-studies-pdf/219 Google ads.pdf",
  },
  {
    id: "9263-meta-leads",
    number: "9263",
    title: "Meta Ads Case Study: Scalable Lead Generation for Beauty Consulting",
    subtitle: "9,263 Qualified Applications at $4.09 Cost Per Lead",
    platform: "Meta Leads",
    image: "/assets/case-studies/meta leads --9263.webp",
    pdfUrl: "/case-studies-pdf/9263 Meta Leads ads .pdf",
  },
  {
    id: "2195-meta-leads",
    number: "2195",
    title: "Growing a Canadian Payroll Career Coaching Business Through Facebook & Instagram Ads",
    subtitle: "How a research-first strategy generated 2,195 qualified leads in 4 month",
    platform: "Meta Leads",
    image: "/assets/case-studies/meta-leads-2195.webp",
    pdfUrl: "/case-studies-pdf/2195 Meta Leads Ads .pdf",
  },
  {
    id: "950-meta-leads",
    number: "950",
    title: "Scaling Qualified Lead Generation for a UK Custom Sportswear Brand Using Meta",
    subtitle: "2,083 Landing Page Views | 950 Leads Generated",
    platform: "Meta Leads",
    image: "/assets/case-studies/meta leads --950.webp",
    pdfUrl: "/case-studies-pdf/950 Meta Leads ads.pdf",
  },
  {
    id: "148-meta-sales",
    number: "148",
    title: "From Test to Territory: How a 4.09× ROAS Launch Uncovered a 58.28× Opportunity",
    subtitle: "Moving the budget to Australia turned a solid 4.09× return into 58.28×",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales --148.webp",
    pdfUrl: "/case-studies-pdf/148-Meta Sales ads .pdf",
  },
  {
    id: "286-meta-sales",
    number: "286",
    title: "Meta Ads Case Study: Scaling a UK Ecommerce Brand to £20,968 Revenue in 30 Days",
    subtitle: "Construction Materials & Tile Installation Solutions (Ecommerce)",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales - 286.webp",
    pdfUrl: "/case-studies-pdf/286 Meta Sales ads .pdf",
  },
  {
    id: "313-meta-sales",
    number: "313",
    title: "Driving $49.8K in Revenue with a Creative-Led Meta Ads Strategy",
    subtitle: "Beauty & Personal Care eCommerce | United States | Meta Ads | 3 Months",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales -313.webp",
    pdfUrl: "/case-studies-pdf/313 Meta Sales ads .pdf",
  },
  {
    id: "336-meta-sales",
    number: "336",
    title: "Scaling a Dutch Magnet Fishing Brand to 336 Purchases at 5.34× ROAS",
    subtitle: "Meta Ads | E-commerce | Netherlands | 5.6 Months",
    platform: "Meta Sales",
    image: "/assets/case-studies/meta sales -336.webp",
    pdfUrl: "/case-studies-pdf/336-Meta Sales.pdf",
  },
  {
    id: "2009-meta-sales",
    number: "2009",
    title: "Scaling a Luxury Lighting Brand on Meta: 2,009 Purchases & €260K Revenue",
    subtitle: "6.48x ROAS over 10-month scaling period in Netherlands",
    platform: "Meta Sales",
    image: "/assets/case-studies/Meta sales -2009.webp",
    pdfUrl: "/case-studies-pdf/2009 Meta sales ads.pdf",
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

  // Prevent right-click and save/print shortcuts when PDF modal is active
  useEffect(() => {
    if (!selectedPdf) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedPdf(null);
      }

      // Block Ctrl+S / Cmd+S (Save), Ctrl+P / Cmd+P (Print), Ctrl+U / Cmd+U (Source)
      if (
        (e.ctrlKey || e.metaKey) &&
        ["s", "p", "u"].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [selectedPdf]);

  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="border-t relative select-none"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--bg)",
      }}
    >
      {/* Hide content on print attempt */}
      {selectedPdf && (
        <style>{`
          @media print {
            body {
              display: none !important;
            }
          }
        `}</style>
      )}

      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Case Studies"
            description="Real campaigns, strategic decisions, and measurable outcomes. Explore how I approach marketing challenges through research, execution, optimization, and data."
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
                title={`View ${cs.title}`}
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
                    <h3 className="mb-1.5 text-base font-bold leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 line-clamp-2" style={{ color: "var(--text)" }}>
                      {cs.title}
                    </h3>

                    {cs.subtitle && (
                      <p className="text-xs font-medium mb-4 line-clamp-2" style={{ color: "var(--accent)" }}>
                        {cs.subtitle}
                      </p>
                    )}

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

      {/* Secure PDF Modal Viewer */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedPdf(null)}
            onContextMenu={(e) => e.preventDefault()}
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
                className="flex items-center justify-between px-5 py-3.5 border-b shrink-0 select-none"
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
                      {selectedPdf.platform} • {selectedPdf.subtitle || "Case Study PDF"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 shrink-0">
                  {/* Security Protected Badge */}
                  <div
                    className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold"
                    style={{
                      borderColor: "rgba(16, 185, 129, 0.3)",
                      background: "rgba(16, 185, 129, 0.1)",
                      color: "#10b981",
                    }}
                  >
                    <ShieldCheck size={14} />
                    <span>Protected View (Download Disabled)</span>
                  </div>

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

              {/* PDF Viewer iFrame Frame with Security Watermark */}
              <div
                className="flex-1 w-full h-full bg-zinc-950 relative overflow-hidden select-none"
                onContextMenu={(e) => e.preventDefault()}
              >
                {/* Security Watermark Overlay */}
                <div className="absolute inset-0 pointer-events-none z-10 flex flex-col justify-between p-8 opacity-[0.06] overflow-hidden select-none">
                  <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-white -rotate-12 transform scale-125">
                    <span>SAFIUL ALAM • CONFIDENTIAL</span>
                    <span>PROTECTED CASE STUDY</span>
                    <span>DO NOT COPY</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-white -rotate-12 transform scale-125">
                    <span>FOR PREVIEW ONLY</span>
                    <span>SAFIUL ALAM PORTFOLIO</span>
                    <span>RESTRICTED VIEW</span>
                  </div>
                  <div className="flex justify-between font-mono text-xs uppercase tracking-widest text-white -rotate-12 transform scale-125">
                    <span>CONFIDENTIAL DOCUMENT</span>
                    <span>DO NOT DISTRIBUTE</span>
                    <span>SAFIUL ALAM</span>
                  </div>
                </div>

                {/* PDF Viewer iFrame with toolbar disabled */}
                <iframe
                  src={`${selectedPdf.pdfUrl}#toolbar=0&navpanes=0&scrollbar=1`}
                  title={selectedPdf.title}
                  className="w-full h-full border-0 select-none"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

