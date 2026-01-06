"use client";

import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";

interface CaseStudyOverviewProps {
  title: string;
  intro?: string;
  goals: string[];
}

export function CaseStudyOverview({
  title,
  intro,
  goals,
}: CaseStudyOverviewProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <FiTarget className="text-accent" />
            {title}
          </h2>
          {intro && (
            <p className="text-lg text-muted mb-8 leading-relaxed">{intro}</p>
          )}
          <ul className="grid md:grid-cols-2 gap-4">
            {goals.map((goal: string, index: number) => (
              <motion.li
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-4 bg-card-bg rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <span className="text-accent mt-1">✦</span>
                <span className="text-foreground/90">{goal}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
