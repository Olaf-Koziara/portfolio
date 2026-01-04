"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Link } from "@/i18n/routing";

interface BusinessProject {
  id: string;
  name: string;
  client: string;
  year: string;
  description: string;
  scope: string[];
}

interface BusinessProjectCardProps {
  project: BusinessProject;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
  },
};

function BusinessProjectCard({ project }: BusinessProjectCardProps) {
  const t = useTranslations("businessProjects");
  
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className="bg-card-bg border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {/* Header with gradient */}
      <div className="h-2 bg-gradient-to-r from-accent via-accent-hover to-accent" />
      
      <div className="p-8">
        {/* Client & Year */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted">{t("client")}:</span>
            <span className="font-medium">{project.client}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted">{t("year")}:</span>
            <span className="font-medium">{project.year}</span>
          </div>
        </div>

        {/* Project Name */}
        <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
        
        {/* Description */}
        <p className="text-muted mb-6 leading-relaxed">{project.description}</p>

        {/* Scope */}
        <div className="mb-6">
          <span className="text-sm text-muted block mb-3">{t("scopeOfWork")}:</span>
          <div className="flex flex-wrap gap-2">
            {project.scope.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 bg-background border border-border rounded-lg text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/caseStudy/${project.id}`}
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium transition-colors duration-300 group"
        >
          {t("viewCaseStudy")}
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>
    </motion.div>
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function BusinessProjectsSection() {
  const t = useTranslations("businessProjects");
  const projects: BusinessProject[] = t.raw("items");

  return (
    <section id="business-projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-card-bg/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">{t("title")}</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <BusinessProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
