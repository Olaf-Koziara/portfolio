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

      {/* Technical Highlights - Horizontal Slider */}
      <TechnicalHighlights
        title={t("technicalHighlights")}
        subtitle="Scroll through the most impressive technical solutions"
        highlights={projectData.highlights}
      />

      {/* Image/GIF Gallery */}
      <ImageGallery />

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
