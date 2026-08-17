"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircleMore } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/Motion";

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

      {/* Accent glow with slow breathing animation */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute top-1/3 right-1/4 h-96 w-96 rounded-full blur-[120px]"
        aria-hidden="true"
        style={{ background: "var(--accent)" }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <FadeIn delay={0.05}>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-sm"
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
          </FadeIn>

          {/* Name */}
          <FadeIn delay={0.15}>
            <p
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Hi, I&apos;m Mohammad Safiul Alam
            </p>
          </FadeIn>

          {/* Title */}
          <FadeIn delay={0.25}>
            <h1
              className="text-display mb-6"
              style={{ color: "var(--text)" }}
            >
              Performance{" "}
              <span style={{ color: "var(--accent)" }}>Marketing</span>
              <br />
              Strategist
            </h1>
          </FadeIn>

          {/* Tagline */}
          <FadeIn delay={0.35}>
            <p
              className="mb-4 text-xl font-medium max-w-2xl leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              I Help Businesses Acquire Customers and Grow Through Performance Marketing
            </p>
          </FadeIn>

          {/* Supporting copy */}
          <FadeIn delay={0.45}>
            <p
              className="mb-8 max-w-xl text-base leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              {siteConfig.description} I combine strategy, data, and continuous optimisation to create measurable marketing programs focused on better acquisition, stronger performance, and sustainable business growth.
            </p>
          </FadeIn>

          {/* Platform badges */}
          <StaggerContainer delayChildren={0.55} staggerChildren={0.07} className="mb-10 flex flex-wrap gap-2">
            {platforms.map((p) => (
              <StaggerItem key={p}>
                <motion.span
                  whileHover={{ scale: 1.05, borderColor: "var(--accent)" }}
                  className="inline-block rounded-full border px-3.5 py-1 text-xs font-medium transition-colors cursor-default"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                    color: "var(--text-muted)",
                  }}
                >
                  {p}
                </motion.span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* CTAs */}
          <FadeIn delay={0.65}>
            <div className="flex flex-wrap items-center gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#case-studies"
                  id="hero-cta-primary"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold shadow-lg transition-all hover:shadow-green-900/20"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                >
                  View My Work
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="#contact"
                  id="hero-cta-secondary"
                  className="inline-flex items-center gap-2 rounded-lg border px-6 py-3.5 text-sm font-semibold transition-colors"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text)",
                    background: "var(--surface)",
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
              </motion.div>
            </div>
          </FadeIn>

          {/* Credential metrics */}
          <StaggerContainer delayChildren={0.75} staggerChildren={0.1} className="mt-14 flex flex-wrap gap-6 sm:gap-10">
            {siteConfig.metrics.map(({ label, value, suffix }) => (
              <StaggerItem key={label} className="space-y-0.5">
                <p
                  className="text-2xl font-bold tracking-tight tabular-nums"
                  style={{ color: "var(--text)" }}
                >
                  {value}{suffix}
                </p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  {label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>

      {/* Scroll hint with bounce motion */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer"
        aria-hidden="true"
        onClick={() => {
          document.getElementById("trust")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-dim)" }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-px"
          style={{
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />
      </motion.div>
    </section>
  );
}
