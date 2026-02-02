"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeBlock } from "./CodeBlock";

interface Highlight {
  id: string;
  title: string;
  problem: string;
  solution: string;
  impact: string;
  code: Record<string, string>;
}

interface TechnicalHighlightsProps {
  title: string;
  subtitle: string;
  highlights: Highlight[];
}

export function TechnicalHighlights({
  title,
  highlights,
}: TechnicalHighlightsProps) {
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const toggleCodeExpand = (id: string) => {
    setExpandedCode(expandedCode === id ? null : id);
  };

  return (
    <section className="py-20 px-6 bg-card-bg/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {/* <p className="text-muted mb-12">{subtitle}</p> */}

          {/* Slider Navigation */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-4">
            {highlights.map((highlight, index: number) => (
              <button
                key={highlight.id}
                onClick={() => setActiveHighlight(index)}
                className={`px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeHighlight === index
                    ? "bg-accent text-white"
                    : "bg-background text-muted hover:text-foreground border border-border"
                }`}
              >
                {highlight.title}
              </button>
            ))}
          </div>

          {/* Active Highlight Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeHighlight}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-3xl border border-border overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  {highlights[activeHighlight].title}
                </h3>

                {/* Problem */}
                <div className="mb-6 p-6 bg-red-500/5 border-l-4 border-red-500 rounded-lg">
                  <p className="text-sm font-semibold text-red-500 mb-2">
                    ⚠️ Problem
                  </p>
                  <p className="text-foreground/90">
                    {highlights[activeHighlight].problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6 p-6 bg-green-500/5 border-l-4 border-green-500 rounded-lg">
                  <p className="text-sm font-semibold text-green-500 mb-2">
                    ✓ Solution
                  </p>
                  <p className="text-foreground/90">
                    {highlights[activeHighlight].solution}
                  </p>
                </div>

                {/* Impact */}
                <div className="mb-8 p-6 bg-accent/5 border-l-4 border-accent rounded-lg">
                  <p className="text-sm font-semibold text-accent mb-2">
                    ⚡ Impact
                  </p>
                  <p className="text-foreground/90">
                    {highlights[activeHighlight].impact}
                  </p>
                </div>

                {/* Code Examples */}
                <div className="space-y-4">
                  {highlights[activeHighlight].code &&
                    Object.entries(
                      highlights[activeHighlight].code as Record<string, string>
                    ).map(([key, code]) => (
                      <CodeBlock
                        key={key}
                        title={key}
                        code={code}
                        isExpanded={
                          expandedCode === `${activeHighlight}-${key}`
                        }
                        onToggle={() =>
                          toggleCodeExpand(`${activeHighlight}-${key}`)
                        }
                      />
                    ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex justify-between p-6 bg-card-bg border-t border-border">
                <button
                  onClick={() =>
                    setActiveHighlight(
                      activeHighlight === 0
                        ? highlights.length - 1
                        : activeHighlight - 1
                    )
                  }
                  className="px-6 py-2 rounded-lg bg-background hover:bg-card-hover border border-border transition-colors"
                >
                  ← Previous
                </button>
                <span className="text-muted self-center">
                  {activeHighlight + 1} / {highlights.length}
                </span>
                <button
                  onClick={() =>
                    setActiveHighlight(
                      (activeHighlight + 1) % highlights.length
                    )
                  }
                  className="px-6 py-2 rounded-lg bg-background hover:bg-card-hover border border-border transition-colors"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
