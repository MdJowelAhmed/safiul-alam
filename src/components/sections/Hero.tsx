"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircleMore, Award, TrendingUp } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/Motion";

const platforms = ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads"];

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col items-start justify-center overflow-hidden pt-28 pb-20"
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

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 max-w-2xl">
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
                className="mb-4 text-xl font-medium leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                I Help Businesses Acquire Customers and Grow Through Performance Marketing
              </p>
            </FadeIn>

            {/* Supporting copy */}
            <FadeIn delay={0.45}>
              <p
                className="mb-8 text-base leading-relaxed"
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
            <StaggerContainer delayChildren={0.75} staggerChildren={0.1} className="mt-12 flex flex-wrap gap-6 sm:gap-10">
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

          {/* Right Column: Premium Profile Image Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeIn delay={0.3} className="relative w-full max-w-[380px] sm:max-w-[420px]">
              {/* Outer ambient glowing background */}
              <div
                className="absolute inset-0 rounded-3xl opacity-30 blur-2xl transform scale-95"
                style={{
                  background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                }}
              />

              {/* Main glassmorphic card container */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-3xl border p-3.5 backdrop-blur-md shadow-2xl overflow-hidden"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                {/* Profile Picture Frame */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-[var(--surface-2)] border" style={{ borderColor: "var(--border)" }}>
                  <Image
                    src="/assets/Mohammad Safiul Alam.png"
                    alt="Mohammad Safiul Alam - Performance Marketing Strategist"
                    fill
                    priority
                    sizes="(max-width: 768px) 340px, 420px"
                    className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle Gradient vignette overlay at bottom */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(13, 14, 18, 0.75) 0%, transparent 40%)",
                    }}
                  />
                </div>

                {/* Floating Bottom Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border px-4 py-2.5 backdrop-blur-md shadow-lg"
                  style={{
                    background: "rgba(18, 18, 22, 0.85)",
                    borderColor: "var(--border)",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg"
                      style={{ background: "var(--accent-glow)", color: "var(--accent)" }}
                    >
                      <TrendingUp size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-bold" style={{ color: "var(--text)" }}>
                        Mohammad Safiul Alam
                      </p>
                      <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>
                        Paid Media & Growth Specialist
                      </p>
                    </div>
                  </div>
                  <span
                    className="h-2 w-2 rounded-full animate-ping"
                    style={{ background: "var(--accent)" }}
                  />
                </motion.div>

                {/* Floating Top Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="absolute top-6 right-6 flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-md shadow-md"
                  style={{
                    background: "rgba(0, 0, 0, 0.75)",
                    borderColor: "var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Award size={12} style={{ color: "var(--accent)" }} />
                  <span>Meta & Google Certified</span>
                </motion.div>
              </motion.div>
            </FadeIn>
          </div>
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
