"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ChevronLeft, ChevronRight, Sparkles, Play, Pause } from "lucide-react";
import { FadeIn, HoverCard } from "@/components/shared/Motion";
import { ImageZoom } from "@/components/case-studies/ImageZoom";
import { motion, AnimatePresence } from "framer-motion";

export interface AutomationWorkflow {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  steps: string[];
}

const workflows: AutomationWorkflow[] = [
  {
    id: "ghl-workflow",
    title: "GoHighLevel Lead Workflow Automation",
    description:
      "Automated the complete lead workflow, from form submission and CRM capture to lead segmentation, tagging, notifications, and personalized email nurturing.",
    image: "/assets/marketing-automotion/Image code 125.jpg",
    tags: ["GoHighLevel", "Lead Nurturing", "CRM Capture", "Email Automation"],
    steps: ["Form Submission", "CRM Capture", "Lead Segmentation", "Tagging & Alerts", "Email Nurture"],
  },
  {
    id: "make-kit-workflow",
    title: "Meta Lead Automation | Make.com + Kit",
    description:
      "Built and tested an automated Meta → Make.com → Kit workflow that sends new leads to Kit and automatically enrolls them in an email sequence.",
    image: "/assets/marketing-automotion/Image code 126.jpg",
    tags: ["Meta Lead Ads", "Make.com", "Kit (ConvertKit)", "Auto-Enrollment"],
    steps: ["Meta Lead Ad", "Make.com Trigger", "Kit Subscriber Sync", "Email Sequence"],
  },
  {
    id: "hubspot-capi-workflow",
    title: "Meta Lead Qualification System Setup with HubSpot CRM",
    description:
      "I built a lead management and qualification system connecting Meta Lead Ads with HubSpot, automatically syncing leads and sending conversion data through the Conversions API for better lead optimization.",
    image: "/assets/marketing-automotion/Image code 133.jpg",
    tags: ["Meta Lead Ads", "HubSpot CRM", "Lead Qualification", "Server-Side CAPI"],
    steps: ["Meta Lead Capture", "HubSpot Auto Sync", "Qualification Logic", "Meta CAPI Feedback"],
  },
  {
    id: "n8n-messenger-workflow",
    title: "AI-Powered Facebook Messenger Automation | n8n",
    description:
      "I completed an n8n Facebook Messenger automation using Webhooks, Gemini AI, Memory, Google Sheets, and Google Calendar. It automatically handles customer messages, provides service information, maintains conversation context, filters AI responses, and schedules meetings when needed.",
    image: "/assets/marketing-automotion/n8n automation 134.png",
    tags: ["n8n", "Gemini AI", "Facebook Messenger", "Google Calendar", "Google Sheets"],
    steps: ["Webhook Trigger", "Gemini AI & Memory", "Google Sheets Sync", "Google Calendar Booking"],
  },
];

export function Automation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1);

  const totalItems = workflows.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Smooth Auto-slide every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying || isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoPlaying, isPaused]);

  // Get 3 items starting from currentIndex for desktop view
  const visibleWorkflows = [
    workflows[currentIndex % totalItems],
    workflows[(currentIndex + 1) % totalItems],
    workflows[(currentIndex + 2) % totalItems],
  ];

  return (
    <section
      id="automation"
      aria-labelledby="automation-heading"
      className="border-t overflow-hidden"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <Container>
        {/* Header with Title & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-6">
          <FadeIn>
            <SectionHeading
              eyebrow="Automation & Workflows"
              title="Marketing Automation & Lead Workflows"
              className="mb-0"
            />
          </FadeIn>

          {/* Carousel Controls */}
          <FadeIn>
            <div className="flex items-center gap-3 shrink-0">
              {/* Counter Badge */}
              <div
                className="px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1.5"
                style={{
                  background: "var(--surface-2)",
                  borderColor: "var(--border)",
                  color: "var(--text-muted)",
                }}
              >
                <Sparkles size={13} style={{ color: "var(--accent)" }} />
                <span>
                  <strong style={{ color: "var(--accent)" }}>{String(currentIndex + 1).padStart(2, "0")}</strong> / {String(totalItems).padStart(2, "0")}
                </span>
              </div>

              {/* Auto-play Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying((prev) => !prev)}
                aria-label={isAutoPlaying ? "Pause auto-slide" : "Start auto-slide"}
                title={isAutoPlaying ? "Pause Auto-slide" : "Play Auto-slide"}
                className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                style={{
                  background: isAutoPlaying ? "var(--surface-2)" : "var(--bg)",
                  borderColor: isAutoPlaying ? "var(--accent)" : "var(--border)",
                  color: isAutoPlaying ? "var(--accent)" : "var(--text)",
                }}
              >
                {isAutoPlaying ? <Pause size={17} /> : <Play size={17} />}
              </button>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous workflow"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next workflow"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
                  style={{
                    background: "var(--bg)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3 Workflows Carousel Grid with Card-Hover Pause */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {visibleWorkflows.map((item, idx) => (
                <div key={`${item.id}-${idx}`} className="h-full">
                  <HoverCard
                    className="group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden h-full shadow-lg"
                    style={{
                      background: "var(--bg)",
                      borderColor: "var(--border)",
                    }}
                  >
                    {/* Image Zoom Proof Container */}
                    <div className="p-2 bg-[var(--surface-2)] border-b border-[var(--border)]">
                      <ImageZoom
                        src={item.image}
                        alt={`${item.title} workflow diagram`}
                        title=""
                        zoomLevel={1.5}
                        lensSize={220}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-1 flex-col p-6">
                      {/* Tag Badges */}
                      <div className="flex flex-wrap gap-1.5 mb-3.5">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                            style={{
                              background: "var(--surface-2)",
                              color: "var(--accent)",
                              border: "1px solid var(--border)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="mb-2.5 text-lg font-bold leading-snug" style={{ color: "var(--text)" }}>
                        {item.title}
                      </h3>

                      <p className="text-xs leading-relaxed flex-1 mb-5" style={{ color: "var(--text-muted)" }}>
                        {item.description}
                      </p>
                    </div>
                  </HoverCard>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {workflows.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className="h-2.5 rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: currentIndex === index ? "28px" : "10px",
                background: currentIndex === index ? "var(--accent)" : "var(--border)",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
