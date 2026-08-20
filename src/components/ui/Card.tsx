"use client";

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// 1. CVA Card Base Variants
const cardVariants = cva(
  "rounded-xl transition-all duration-200 overflow-hidden text-[var(--text)]",
  {
    variants: {
      variant: {
        default:
          "border border-[var(--border)] bg-[var(--surface)] shadow-sm",
        outlined:
          "border border-[var(--border)] bg-transparent",
        elevated:
          "border border-[var(--border-subtle)] bg-[var(--surface-2)] shadow-lg shadow-black/40",
        interactive:
          "border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--accent)] hover:shadow-md hover:-translate-y-1 cursor-pointer",
      },
      padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "none", // Allows subcomponents to control padding or container to wrap padding
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

// Main Card Parent Component
const CardRoot = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      />
    );
  }
);
CardRoot.displayName = "Card";

// Card.Header Component
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-1.5 p-6 pb-4", className)}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "Card.Header";

// Card.Title Component
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, as: Component = "h3", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-none tracking-tight text-[var(--text)]",
          className
        )}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "Card.Title";

// Card.Description Component
export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-xs leading-relaxed text-[var(--text-muted)]", className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "Card.Description";

// Card.Content Component
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pt-0 text-sm", className)} {...props} />
    );
  }
);
CardContent.displayName = "Card.Content";

// Card.Footer Component
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-between p-6 pt-0 mt-auto border-t border-[var(--border-subtle)] pt-4",
          className
        )}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "Card.Footer";

// Compound Component Export Pattern
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Title: CardTitle,
  Description: CardDescription,
  Content: CardContent,
  Footer: CardFooter,
});
