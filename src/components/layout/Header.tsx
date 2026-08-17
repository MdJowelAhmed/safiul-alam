"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(10,10,11,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          padding: scrolled ? "0.75rem 0" : "1.25rem 0",
        }}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            id="header-logo"
            className="flex flex-col leading-none group"
            aria-label="Mohammad Safiul Alam — Home"
          >
            <span
              className="text-sm font-bold tracking-tight transition-colors"
              style={{ color: "var(--text)" }}
            >
              Safiul Alam
            </span>
            <span
              className="text-xs transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              Performance Marketer
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-3 py-1.5 rounded-md text-sm transition-colors duration-150"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--text)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--text-muted)"; }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              id="header-cta"
              className="px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
              }}
            >
              Let&apos;s Work Together
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            id="mobile-menu-toggle"
            className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg border transition-colors"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </Container>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ background: "var(--bg)", paddingTop: "5rem" }}
          >
            <Container className="flex flex-col gap-1 py-6">
              <nav aria-label="Mobile navigation">
                {navLinks.map(({ href, label }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={href}
                      className="block py-3 text-lg font-medium border-b transition-colors"
                      style={{
                        color: "var(--text)",
                        borderColor: "var(--border-subtle)",
                      }}
                      onClick={() => setMobileOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-6">
                <Link
                  href="#contact"
                  id="mobile-cta"
                  className="inline-flex w-full items-center justify-center rounded-lg px-6 py-3.5 text-base font-semibold transition-all"
                  style={{ background: "var(--accent)", color: "var(--bg)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s Work Together
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
