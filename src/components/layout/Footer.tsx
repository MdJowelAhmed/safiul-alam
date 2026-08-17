import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { siteConfig } from "@/data/site";

const footerNav = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const expertise = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "LinkedIn Ads",
  "Analytics & Tracking",
  "Marketing Automation",
  "Funnel Optimisation",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <style>{`
        .footer-link { color: var(--text-muted); transition: color 150ms; }
        .footer-link:hover { color: var(--accent-text); }
        .footer-bottom-link { color: var(--text-dim); transition: color 150ms; }
        .footer-bottom-link:hover { color: var(--text-muted); }
      `}</style>
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <p
                className="text-lg font-bold tracking-tight"
                style={{ color: "var(--text)" }}
              >
                {siteConfig.fullName}
              </p>
              <p className="text-sm" style={{ color: "var(--accent)" }}>
                {siteConfig.title}
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "var(--text-muted)" }}>
              Helping businesses acquire customers and grow through strategic performance marketing, accurate tracking, and measurable results.
            </p>
            <SocialLinks />
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2">
                {footerNav.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="footer-link text-sm"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Expertise */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
              Expertise
            </p>
            <ul className="space-y-2">
              {expertise.map((item) => (
                <li
                  key={item}
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t text-xs"
          style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}
        >
          <p>
            © {currentYear} {siteConfig.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-bottom-link">
              Terms
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
