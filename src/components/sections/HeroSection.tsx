"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/profile.webp"
            alt={t("name")}
            className="w-70 rounded-full my-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-muted text-lg sm:text-xl mb-4"
          >
            {t("greeting")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          >
            {t("name")}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 text-muted"
          >
            {t("role")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted max-w-2xl mx-auto mb-12"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-accent text-white rounded-xl font-medium hover:bg-accent-hover transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              {t("cta.projects")}
            </a>
            <a
              href="/cv.pdf"
              className="px-8 py-4 border-2 border-border rounded-xl font-medium hover:border-accent hover:text-accent transition-all duration-300 hover:scale-105"
            >
              {t("cta.cv")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
