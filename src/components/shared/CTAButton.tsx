import Link from "next/link";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  id?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  id,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

  const variants = {
    primary:
      "bg-accent text-bg hover:bg-accent-dim active:scale-[0.98]",
    secondary:
      "border border-border text-text hover:border-accent hover:text-accent-text bg-transparent active:scale-[0.98]",
    ghost:
      "text-muted hover:text-accent-text hover:bg-surface-2 active:scale-[0.98]",
  };

  const externalProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      id={id}
      className={cn(baseStyles, variants[variant], className)}
      style={{
        "--color-accent": "var(--accent)",
        "--color-accent-dim": "var(--accent-dim)",
        "--color-accent-text": "var(--accent-text)",
        "--color-bg": "var(--bg)",
        "--color-text": "var(--text)",
        "--color-muted": "var(--text-muted)",
        "--color-surface-2": "var(--surface-2)",
        "--color-border": "var(--border)",
      } as React.CSSProperties}
      {...externalProps}
    >
      {children}
    </Link>
  );
}
