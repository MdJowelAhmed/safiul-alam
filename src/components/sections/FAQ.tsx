"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { faqItems } from "@/data/faq";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/shared/Motion";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t"
      style={{
        paddingTop: "var(--section-y)",
        paddingBottom: "var(--section-y)",
        borderColor: "var(--border)",
        background: "var(--surface)",
      }}
    >
      <Container>
        <div className="mx-auto max-w-2xl">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Common Questions"
              description="Honest answers to the questions most clients ask before getting started."
              align="center"
              className="mb-10"
            />
          </FadeIn>

          <StaggerContainer staggerChildren={0.06} className="space-y-2" role="list" aria-label="Frequently asked questions">
            {faqItems.map((item) => {
              const isOpen = openId === item.id;
              return (
                <StaggerItem key={item.id} role="listitem">
                  <div
                    className="rounded-xl border overflow-hidden transition-colors duration-200"
                    style={{
                      background: "var(--surface-2)",
                      borderColor: isOpen ? "var(--accent)" : "var(--border)",
                    }}
                  >
                    <button
                      id={`faq-btn-${item.id}`}
                      type="button"
                      className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                      onClick={() => toggle(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                    >
                      <span
                        className="text-sm font-semibold transition-colors"
                        style={{ color: isOpen ? "var(--accent-text)" : "var(--text)" }}
                      >
                        {item.question}
                      </span>
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className="shrink-0 mt-0.5 transition-transform duration-300"
                        style={{
                          color: isOpen ? "var(--accent)" : "var(--text-muted)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-panel-${item.id}`}
                          role="region"
                          aria-labelledby={`faq-btn-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                          className="overflow-hidden"
                        >
                          <p
                            className="px-5 pb-5 text-sm leading-relaxed"
                            style={{ color: "var(--text-muted)" }}
                          >
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
