"use client";

import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";

interface Feature {
  title: string;
  description: string;
}

interface KeyFeaturesProps {
  title: string;
  features: Feature[];
}

export function KeyFeatures({ title, features }: KeyFeaturesProps) {
  return (
    <section className="py-20 px-6 bg-card-bg/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
            <FiZap className="text-accent" />
            {title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index: number) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-background rounded-2xl border border-border hover:border-accent/50 transition-all"
              >
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
