"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TimelineStep {
  id: string;
  title: string;
  period: string;
  description: string;
  details: string[];
  icon: "discovery" | "planning" | "development" | "testing" | "deployment";
}

interface ProcessTimelineProps {
  title: string;
  subtitle?: string;
  steps: TimelineStep[];
}

const iconMap = {
  discovery: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  planning: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  development: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  testing: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  deployment: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  ),
};

export function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          {subtitle && <p className="text-muted mb-12">{subtitle}</p>}

          {/* Timeline Navigation */}
          <div className="relative mb-12">
            {/* Progress Line */}
            <div className="absolute top-6 left-0 right-0 h-0.5 bg-border hidden md:block" />
            <div 
              className="absolute top-6 left-0 h-0.5 bg-accent hidden md:block transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />

            {/* Steps */}
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
              {steps.map((step, index) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex md:flex-col items-center gap-4 md:gap-2 p-4 md:p-0 rounded-xl md:rounded-none transition-all ${
                    index === activeStep ? "md:bg-transparent bg-accent/10" : ""
                  }`}
                >
                  {/* Step Circle */}
                  <div
                    className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      index <= activeStep
                        ? "bg-accent text-white"
                        : "bg-background border-2 border-border text-muted"
                    }`}
                  >
                    {iconMap[step.icon]}
                  </div>
                  
                  {/* Step Label */}
                  <div className="text-left md:text-center md:mt-4">
                    <p
                      className={`font-medium transition-colors ${
                        index === activeStep ? "text-accent" : "text-muted"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-muted mt-1">{step.period}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-background rounded-3xl border border-border p-8 md:p-12"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  {iconMap[steps[activeStep].icon]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{steps[activeStep].title}</h3>
                  <p className="text-muted text-sm">{steps[activeStep].period}</p>
                </div>
              </div>

              <p className="text-lg text-foreground/90 mb-8 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-card-bg rounded-xl"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    </div>
                    <p className="text-foreground/80">{detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-10 pt-6 border-t border-border">
                <button
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-6 py-2 rounded-lg border border-border transition-colors ${
                    activeStep === 0
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-card-hover"
                  }`}
                >
                  Poprzedni
                </button>
                <span className="text-muted self-center">
                  {activeStep + 1} / {steps.length}
                </span>
                <button
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`px-6 py-2 rounded-lg border border-border transition-colors ${
                    activeStep === steps.length - 1
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-card-hover"
                  }`}
                >
                  Nastepny
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
