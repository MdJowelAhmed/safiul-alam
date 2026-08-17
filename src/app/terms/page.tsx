import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Terms | ${siteConfig.fullName}`,
};

export default function TermsPage() {
  return (
    <main className="pt-28 pb-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h1 className="text-h2 mb-4" style={{ color: "var(--text)" }}>Terms of Use</h1>
          <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
            All content on this website — including case studies, results, and descriptions — is provided for informational purposes only. Past results are not a guarantee of future performance. This site is the personal portfolio of {siteConfig.fullName}.
          </p>
          <Link href="/" className="text-sm" style={{ color: "var(--accent)" }}>
            ← Back to home
          </Link>
        </div>
      </Container>
    </main>
  );
}
