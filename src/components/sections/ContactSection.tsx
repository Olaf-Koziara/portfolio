"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted text-lg mb-12">{t("subtitle")}</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
          >
            <a
              href="mailto:olaf.koziara@gmail.com"
              className="px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("email")}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex gap-8 justify-center"
          >
            <a
              href="https://github.com/Olaf-Koziara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300 text-lg font-medium"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/olaf-koziara-0b7b47164/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors duration-300 text-lg font-medium"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
