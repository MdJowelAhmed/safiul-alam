"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircleMore, Award, TrendingUp } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/Motion";

const platforms = ["Meta Ads", "Google Ads", "TikTok Ads", "LinkedIn Ads", "Convertion Tracking", "Marketing Automation", "Content Strategy"];

export function Hero() {
  return (
    <section
      id="home"
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
            {/* <FadeIn delay={0.35}>
              <p
                className="mb-4 text-xl font-medium leading-relaxed"
                style={{ color: "var(--text)" }}
              >
                I Help Businesses Acquire Customers and Grow Through Performance Marketing
              </p>
            </FadeIn> */}

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

              {/* Social Media Links under Profile Image */}
              <FadeIn delay={0.4} className="mt-4 w-full">
                <div
                  className="flex items-center justify-center gap-3 px-4 py-3  backdrop-blur-sm shadow-lg"
               
                >
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/safiuldigital/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook Page"
                    title="Facebook Page - safiuldigital"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/mohammad-safiul-alam1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn Profile - Mohammad Safiul Alam"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z"/>
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@safiuldigital"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube Channel"
                    title="YouTube Channel - safiuldigital"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/8801880961139"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp (01880961139)"
                    title="WhatsApp (01880961139)"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>
              </FadeIn>
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
