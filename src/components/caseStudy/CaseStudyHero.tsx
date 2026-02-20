"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";

interface CaseStudyHeroProps {
  title: string;
  tagline: string;
  description: string;
  demoUrl?: string;
  demoCredentials?: {
    email: string;
    password: string;
  };
  onBackClick: () => void;
  backToProjectsText: string;
  demoAccountText: string;
}

export function CaseStudyHero({
  title,
  tagline,
  description,
  demoUrl,
  demoCredentials,
  onBackClick,
  backToProjectsText,
  demoAccountText,
}: CaseStudyHeroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative py-20 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.button
          onClick={onBackClick}
          className="flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors group cursor-pointer"
          whileHover={{ x: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          {backToProjectsText}
        </motion.button>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-muted mb-6">{tagline}</p>
            <p className="text-lg text-muted/80 max-w-3xl mb-8 leading-relaxed">
              {description}
            </p>

            {demoUrl && (
              <motion.a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 mr-3 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiExternalLink />
                Live Demo
              </motion.a>
            )}

            {demoCredentials && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-6 p-4 bg-card-bg rounded-xl border border-border inline-block"
              >
                <p className="text-sm text-muted mb-2">{demoAccountText}:</p>
                <p className="text-sm font-mono">
                  {demoCredentials.email} / {demoCredentials.password}
                </p>
              </motion.div>
            )}
          </div>
          <div className="hidden lg:block flex-shrink-0">
            <Image
              src={`/${title.replaceAll(" ", "")}.webp`}
              alt={title}
              width={500}
              height={300}
              className="rounded-xl shadow-2xl border border-border"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
