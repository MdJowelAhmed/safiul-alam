import Link from "next/link";
import { MessageCircleMore } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";

const FacebookIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--bg)" />
  </svg>
);

export function ContactCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      style={{ paddingTop: "var(--section-y)", paddingBottom: "var(--section-y)" }}
    >
      <style>{`
        .contact-social-btn {
          border-color: var(--border);
          color: var(--text-muted);
          transition: border-color 150ms, color 150ms;
        }
        .contact-social-btn:hover {
          border-color: var(--accent) !important;
          color: var(--accent-text) !important;
        }
      `}</style>
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl border p-10 lg:p-16 text-center"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-60 w-60 rounded-full blur-[100px] opacity-20"
            aria-hidden="true"
            style={{ background: "var(--accent)" }}
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Let&apos;s Talk
            </p>
            <h2
              id="contact-heading"
              className="text-h2 mb-4"
              style={{ color: "var(--text)" }}
            >
              Ready to improve your customer acquisition?
            </h2>
            <p className="mb-8 text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              Let&apos;s look at your current marketing, identify the biggest opportunity, and build a strategy around what actually matters to your business.
            </p>

            {/* Primary CTA */}
            <Link
              href={`https://wa.me/${siteConfig.whatsapp}`}
              id="contact-cta-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-4 text-sm font-semibold transition-all duration-150 hover:opacity-90 active:scale-[0.98] mb-8"
              style={{ background: "var(--accent)", color: "var(--bg)" }}
            >
              <MessageCircleMore size={18} aria-hidden="true" />
              Let&apos;s Work Together
            </Link>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              <span className="text-xs" style={{ color: "var(--text-dim)" }}>or connect on</span>
              <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
            </div>

            {/* Social links */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Link
                href={siteConfig.social.facebook}
                id="contact-social-facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-medium"
                aria-label="Facebook — opens in new tab"
              >
                <FacebookIcon />
                Facebook
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                id="contact-social-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-medium"
                aria-label="LinkedIn — opens in new tab"
              >
                <LinkedInIcon />
                LinkedIn
              </Link>
              <Link
                href={siteConfig.social.youtube}
                id="contact-social-youtube"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn flex items-center gap-2 rounded-lg border px-4 py-2.5 text-xs font-medium"
                aria-label="YouTube — opens in new tab"
              >
                <YouTubeIcon />
                YouTube
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
