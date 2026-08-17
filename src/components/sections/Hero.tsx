"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const platforms = ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden pt-24 pb-20"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Accent glow */}
      <div
        className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 rounded-full blur-[120px] opacity-20"
        aria-hidden="true"
        style={{ background: "var(--accent)" }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <FadeUp delay={0}>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium"
              style={{
                borderColor: "var(--border)",
                background: "var(--surface)",
                color: "var(--text-muted)",
              }}
            >
              <span
                className="h-1.5 w-1.5 rounded-full animate-pulse"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
              Welcome to My Portfolio
            </div>
          </FadeUp>

          {/* Name */}
          <FadeUp delay={0.1}>
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Hi, I&apos;m Mohammad Safiul Alam
            </p>
          </FadeUp>

          {/* Title */}
          <FadeUp delay={0.2}>
            <h1
              className="text-display mb-6"
              style={{ color: "var(--text)" }}
            >
              Performance{" "}
              <span style={{ color: "var(--accent)" }}>Marketing</span>
              <br />
              Strategist
            </h1>
          </FadeUp>

          {/* Tagline */}
          <FadeUp delay={0.3}>
            <p
              className="mb-4 text-xl font-medium max-w-2xl"
              style={{ color: "var(--text)" }}
            >
              I Help Businesses Acquire Customers and Grow Through Performance Marketing
            </p>
          </FadeUp>

          {/* Supporting copy */}
          <FadeUp delay={0.4}>
            <p
              className="mb-8 max-w-xl text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {siteConfig.description} I combine strategy, data, and continuous optimisation to create measurable marketing programs focused on better acquisition, stronger performance, and sustainable business growth.
            </p>
          </FadeUp>

          {/* Platform badges */}
          <FadeUp delay={0.45}>
            <div className="mb-10 flex flex-wrap gap-2">
              {platforms.map((p) => (
                <span
                  key={p}
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-muted)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.5}>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#case-studies"
                id="hero-cta-primary"
                className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
              >
                View My Work
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                id="hero-cta-secondary"
                className="inline-flex items-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-all duration-150 active:scale-[0.98]"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent-text)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "var(--text)";
                }}
              >
                <MessageCircleMore size={16} aria-hidden="true" />
                Let&apos;s Work Together
              </Link>
            </div>
          </FadeUp>

          {/* Credential metrics */}
          <FadeUp delay={0.6}>
            <div className="mt-14 flex flex-wrap gap-6 sm:gap-10">
              {siteConfig.metrics.map(({ label, value, suffix }) => (
                <div key={label} className="space-y-0.5">
                  <p
                    className="text-2xl font-bold tracking-tight tabular-nums"
                    style={{ color: "var(--text)" }}
                  >
                    {value}{suffix}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </Container>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span className="text-xs" style={{ color: "var(--text-dim)" }}>Scroll</span>
        <div
          className="h-8 w-px"
          style={{
            background:
              "linear-gradient(to bottom, var(--text-dim), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
