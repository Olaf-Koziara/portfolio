"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { techStack } from "@/consts/techStack";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export default function SkillsSection() {
  const t = useTranslations("skills");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {techStack.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card-bg border border-border rounded-xl p-6 text-center hover:bg-card-hover hover:shadow-lg cursor-default flex flex-col items-center gap-3"
            >
              <div className="flex items-center justify-center">
                {skill.icon}
              </div>
              <p className="font-medium text-sm sm:text-base">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
