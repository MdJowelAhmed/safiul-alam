import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Container className="py-20 text-center">
        <p className="mb-2 text-6xl font-bold" style={{ color: "var(--accent)" }}>
          404
        </p>
        <h1 className="text-h3 mb-4" style={{ color: "var(--text)" }}>
          Page Not Found
        </h1>
        <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
        >
          Back to Home
        </Link>
      </Container>
    </main>
  );
}
