import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.fullName}`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-28 pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-h2 mb-4" style={{ color: "var(--text)" }}>Privacy Policy</h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            This website does not collect personal information beyond what you voluntarily provide when contacting {siteConfig.fullName} directly. Contact information shared via WhatsApp, Facebook, LinkedIn, or YouTube is handled according to those platforms&apos; privacy policies.
          </p>
          <Link href="/" className="text-sm" style={{ color: "var(--accent)" }}>
            ← Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
