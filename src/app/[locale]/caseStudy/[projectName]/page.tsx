"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { use } from "react";
import { motion } from "framer-motion";
import { CaseStudyHero } from "@/components/caseStudy/CaseStudyHero";
import { CaseStudyOverview } from "@/components/caseStudy/CaseStudyOverview";
import { KeyFeatures } from "@/components/caseStudy/KeyFeatures";
import { TechStack } from "@/components/caseStudy/TechStack";
import { TechnicalHighlights } from "@/components/caseStudy/TechnicalHighlights";
import { ImageGallery } from "@/components/caseStudy/ImageGallery";
import { BeforeAfterComparison } from "@/components/caseStudy/BeforeAfterComparison";
import { ProcessTimeline } from "@/components/caseStudy/ProcessTimeline";

export default function CaseStudyPage({
  params,
}: {
  params: Promise<{ projectName: string; locale: string }>;
}) {
  const resolvedParams = use(params);
  const t = useTranslations("caseStudy");
  const router = useRouter();

  // Get project data from translations
  const projectKey = resolvedParams.projectName.toLowerCase();
  const projectData = t.raw(`${projectKey}`);

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted">Project not found</p>
      </div>
    );
  }

  const handleBack = () => {
    router.push(`/${resolvedParams.locale}/#projects`);
  };

  // Check if this is a CMS case study with before/after comparison
  const isCMSProject = projectKey === "gkpge-cms";
  
  // Check if this is a FormBuilder case study with process timeline
  const isFormBuilderProject = projectKey === "gkpge-formbuilder";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <CaseStudyHero
        title={projectData.title}
        tagline={projectData.tagline}
        description={projectData.description}
        demoUrl={projectData.demoUrl}
        demoCredentials={projectData.demoCredentials}
        onBackClick={handleBack}
        backToProjectsText={t("backToProjects")}
        demoAccountText={t("demoAccount")}
      />

      {/* Overview Section */}
      <CaseStudyOverview
        title={t("overview")}
        intro={projectData.overview.intro}
        goals={projectData.overview.goals}
      />

      {/* Key Features */}
      <KeyFeatures title={t("keyFeatures")} features={projectData.features} />

      {/* Tech Stack */}
      <TechStack
        title={t("techStack")}
        frontend={projectData.techStack.frontend}
        backend={projectData.techStack.backend}
      />

      {/* Before/After Comparison for CMS project */}
      {isCMSProject && projectData.comparison && (
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {projectData.comparison.title}
              </h2>
              <p className="text-muted mb-12 text-center">{t("visualComparison")}</p>
              
              <BeforeAfterComparison
                beforeImage="/cms-before.webp"
                afterImage="/cms-after.webp"
                beforeLabel={projectData.comparison.beforeLabel}
                afterLabel={projectData.comparison.afterLabel}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Process Timeline for FormBuilder project */}
      {isFormBuilderProject && projectData.process && (
        <ProcessTimeline
          title={projectData.process.title}
          subtitle={projectData.process.subtitle}
          steps={projectData.process.steps}
        />
      )}

      {/* Technical Highlights - only for projects that have them */}
      {projectData.highlights && (
        <TechnicalHighlights
          title={t("technicalHighlights")}
          subtitle="Scroll through the most impressive technical solutions"
          highlights={projectData.highlights}
        />
      )}

      {/* Image/GIF Gallery - only for projects that need it */}
      {!isCMSProject && !isFormBuilderProject && <ImageGallery />}

      {/* Back to Projects CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.button
            onClick={handleBack}
            className="px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent-hover transition-colors text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t("backToProjects")}
          </motion.button>
        </div>
      </section>
    </div>
  );
}
