"use client";

import { motion } from "framer-motion";
import { FiCode } from "react-icons/fi";

interface TechStackProps {
  title: string;
  frontend: string[];
  backend: string[];
}

export function TechStack({ title, frontend, backend }: TechStackProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
            <FiCode className="text-accent" />
            {title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-card-bg rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-6 text-accent">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontend.map((tech: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-background rounded-lg text-sm font-medium border border-border hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className="p-8 bg-card-bg rounded-2xl border border-border">
              <h3 className="text-xl font-semibold mb-6 text-accent">
                Backend
              </h3>
              <div className="flex flex-wrap gap-3">
                {backend.map((tech: string, index: number) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 bg-background rounded-lg text-sm font-medium border border-border hover:border-accent/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
