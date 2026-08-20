"use client";

import React, { useId } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Input CVA Variants following Day 6 Token & Component Architecture
 */
const inputVariants = cva(
  "w-full rounded-lg border text-sm transition-colors duration-150 outline-none placeholder:text-[var(--text-dim)] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-xs h-8",
        md: "px-3.5 py-2 text-sm h-10",
        lg: "px-4 py-2.5 text-base h-12",
      },
      status: {
        default:
          "border-[var(--border)] bg-[var(--surface-2)] text-[var(--text)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-glow)]",
        error:
          "border-red-500/80 bg-red-500/5 text-[var(--text)] focus:border-red-500 focus:ring-2 focus:ring-red-500/20",
        success:
          "border-emerald-500/80 bg-emerald-500/5 text-[var(--text)] focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20",
      },
    },
    defaultVariants: {
      size: "md",
      status: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      status,
      label,
      helperText,
      error,
      id: customId,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    // Generate unique IDs for accessibility if custom ID is omitted
    const generatedId = useId();
    const inputId = customId || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    const isError = Boolean(error);
    const computedStatus = isError ? "error" : status || "default";

    // Set aria-describedby targets
    const describedBy = [
      isError ? errorId : null,
      helperText && !isError ? helperId : null,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex w-full flex-col gap-1.5">
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)] select-none"
          >
            {label}
            {required && (
              <span className="ml-1 text-red-400" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        {/* Native Input Element */}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          required={required}
          aria-invalid={isError}
          aria-describedby={describedBy || undefined}
          className={cn(inputVariants({ size, status: computedStatus }), className)}
          {...props}
        />

        {/* Validation Error Message */}
        {isError && (
          <p id={errorId} role="alert" className="text-xs font-medium text-red-400 flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {error}
          </p>
        )}

        {/* Helper Text (Displayed when there is no error) */}
        {!isError && helperText && (
          <p id={helperId} className="text-xs text-[var(--text-dim)]">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
