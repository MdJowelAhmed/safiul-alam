"use client";

import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Globe, Tag, Activity, Code2, ShoppingCart, BookOpen, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem, HoverCard } from "@/components/shared/Motion";
import { ImageZoom } from "@/components/case-studies/ImageZoom";

export interface TrackingProject {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const trackingProjects: TrackingProject[] = [
  {
    id: "tracking-127",
    title: "Meta Pixel & Booking Conversion Tracking",
    description:
      "Implemented Meta Pixel tracking via Google Tag Manager and enabled conversion tracking for the website-integrated booking page.",
    image: "/assets/conversion tracking/Image code 127.jpg",
    tags: ["Meta Pixel", "GTM", "Booking Tracking"],
  },
  {
    id: "tracking-128",
    title: "Meta Conversion Tracking Setup",
    description:
      "Implemented Meta Pixel tracking via Google Tag Manager for car rental, and driver applications.",
    image: "/assets/conversion tracking/Image code 128.jpg",
    tags: ["Meta Pixel", "GTM", "Lead Applications"],
  },
  {
    id: "tracking-129",
    title: "Meta Conversion Tracking Setup",
    description:
      "Implemented Meta Pixel tracking via Google Tag Manager and configured conversion events to accurately measure key actions across the service website.",
    image: "/assets/conversion tracking/Image code 129.jpg",
    tags: ["Meta Pixel", "GTM", "Custom Events"],
  },
  {
    id: "tracking-130",
    title: "E-commerce Server-Side Tracking & Analytics",
    description:
      "Implemented Meta Pixel, Google Analytics, Google Tag Manager, and server-side tracking to accurately measure key e-commerce events and customer actions.",
    image: "/assets/conversion tracking/Image code 130.jpg",
    tags: ["Server-Side CAPI", "GA4", "GTM", "eCommerce"],
  },
  {
    id: "tracking-131",
    title: "Meta & Google Conversion Tracking",
    description:
      "Implemented Meta Pixel and Google conversion tracking for a service website to measure key leads, inquiries, and conversion actions accurately.",
    image: "/assets/conversion tracking/Image code 131.jpg",
    tags: ["Meta Pixel", "Google Conversion Ads", "Lead Tracking"],
  },
  {
    id: "tracking-132",
    title: "Meta, Google & TikTok Conversion Tracking",
    description:
      "Implemented Meta, Google, and TikTok conversion tracking for a service website to accurately measure leads, inquiries, and key conversion actions across advertising platforms.",
    image: "/assets/conversion tracking/Image code 132.jpeg",
    tags: ["Meta Pixel", "Google Ads", "TikTok Pixel", "Multi-Platform"],
  },
];

const flowSteps = [
  { label: "Traffic", icon: Globe },
  { label: "Tracking", icon: Tag },
  { label: "Attribution", icon: Activity },
  { label: "Data", icon: Code2 },
  { label: "Optimisation", icon: ShoppingCart },
  { label: "Growth", icon: BookOpen },
];

export function Tracking() {
  return (
    <section
      id="tracking"
      aria-labelledby="tracking-heading"
      className="border-t"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Measurement & Attribution"
            title="Analytics & Conversion Tracking Implementations"
            description="Accurate attribution is the foundation of every campaign decision. Explore real client setups where I implemented Meta Pixel, Server-Side CAPI, GA4, TikTok Pixel, and GTM event mapping."
            className="mb-12"
          />
        </FadeIn>

        {/* Measurement Flow Diagram */}
        <StaggerContainer staggerChildren={0.08} className="mb-14 flex flex-wrap items-center justify-center gap-0">
          {flowSteps.map(({ label, icon: Icon }, index) => (
            <StaggerItem key={label} className="flex items-center">
              <HoverCard className="flex flex-col items-center gap-2 px-4 py-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-200"
                  style={{
                    borderColor: "var(--accent)",
                    background: "var(--accent-glow)",
                  }}
                >
                  <Icon size={18} aria-hidden="true" style={{ color: "var(--accent)" }} />
                </div>
                <span className="text-xs font-medium" style={{ color: "var(--text)" }}>
                  {label}
                </span>
              </HoverCard>
              {index < flowSteps.length - 1 && (
                <div
                  className="h-px w-6 shrink-0 hidden sm:block"
                  style={{ background: "var(--border)" }}
                  aria-hidden="true"
                />
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Real Tracking Projects Showcase Grid */}
        <StaggerContainer staggerChildren={0.1} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trackingProjects.map((item) => (
            <StaggerItem key={item.id}>
              <HoverCard
                className="group flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden h-full shadow-lg"
                style={{
                  background: "var(--bg)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Image Zoom Proof Container */}
                <div className="p-2">
                  <ImageZoom
                    src={item.image}
                    alt={`${item.title} proof screenshot`}
                    title=""
                    zoomLevel={1.5}
                    lensSize={220}
                  />
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5 pt-3">
                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
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

                  <h3 className="mb-2 text-base font-semibold leading-snug" style={{ color: "var(--text)" }}>
                    {item.title}
                  </h3>

                  <p className="text-xs leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                    {item.description}
                  </p>

                  <div className="mt-4 pt-3 border-t flex items-center gap-1.5 text-[11px] font-medium" style={{ borderColor: "var(--border)", color: "var(--accent)" }}>
                    <CheckCircle2 size={13} />
                    <span>Verified Implementation</span>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}



