"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { Experience } from "@/types/portfolio";

export default function ExperienceSection() {
  const t = useTranslations("experience");
  const experiences: Experience[] = t.raw("items");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-border hover:border-accent transition-colors duration-300"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-accent"></div>

              <div className="mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-accent font-medium">{exp.company}</p>
              </div>

              <p className="text-muted text-sm mb-3">{exp.period}</p>
              {/* <p className="text-muted leading-relaxed">{exp.description}</p> */}
              <ul className="list-disc flex flex-col gap-2">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
