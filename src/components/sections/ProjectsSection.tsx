"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import type { Project } from "@/types/portfolio";
import { Link } from "@/i18n/routing";

interface ProjectCardProps {
  project: Project;
  index: number;
}
const projectCardMotionVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
  },
};
function ProjectCard({ project, index }: ProjectCardProps) {
  const t = useTranslations("projects");
  return (
    <motion.div
      variants={projectCardMotionVariants}
      whileHover={{ y: -8 }}
      className="bg-card-bg border border-border rounded-2xl p-8  hover:bg-card-hover hover:shadow-xl"
    >
      <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
      <p className="text-muted mb-6 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-background border border-border rounded-lg text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-accent-hover font-medium transition-colors duration-300"
        >
          {t("viewLive")} →
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-foreground font-medium transition-colors duration-300"
        >
          {t("viewCode")} →
        </a>
        <Link
          href={`/caseStudy/${project.name.toLowerCase().replace(/\s+/g, "")}`}
          className="text-muted hover:text-foreground font-medium transition-colors duration-300"
        >
          {t("viewCaseStudy")} →
        </Link>
      </div>
    </motion.div>
  );
}
const projectSectionMotionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export default function ProjectsSection() {
  const t = useTranslations("projects");
  const projects: Project[] = t.raw("items");

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
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

        <motion.div
          variants={projectSectionMotionVariants}
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          whileInView="show"
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
