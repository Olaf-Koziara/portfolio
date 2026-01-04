"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export type NavItem = {
  id: string;
  labelKey: string;
  route?: string; // Optional route for navigation links
};

type FloatingNavProps = {
  navItems?: NavItem[];
  translationNamespace?: string;
};

const defaultNavItems: NavItem[] = [
  { id: "hero", labelKey: "hero" },
  { id: "skills", labelKey: "skills" },
  { id: "projects", labelKey: "projects" },
  { id: "experience", labelKey: "experience" },
  { id: "about", labelKey: "about" },
  { id: "contact", labelKey: "contact" },
];

export default function FloatingNav({
  navItems = defaultNavItems,
  translationNamespace = "nav",
}: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const t = useTranslations(translationNamespace);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 50vh
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      setIsVisible(scrollPosition > viewportHeight * 0.5);

      // Detect active section
      const sections = navItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      for (const section of sections) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const renderNavItem = (item: NavItem, index: number) => {
    const commonClassName = `group relative flex items-center gap-3 transition-colors duration-300 cursor-pointer ${
      activeSection === item.id
        ? "text-accent"
        : "text-muted hover:text-foreground"
    }`;

    const content = (
      <>
        {/* Dot indicator */}
        <div
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            activeSection === item.id
              ? "bg-accent w-3"
              : "bg-muted group-hover:bg-foreground"
          }`}
        />

        {/* Label tooltip */}
        <span
          className={`absolute left-full ml-4 px-3 py-1.5 bg-card-hover border border-border rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
            activeSection === item.id ? "text-accent" : ""
          }`}
        >
          {t(item.labelKey)}
        </span>
      </>
    );

    const motionProps = {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05 },
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
    };

    // If route is provided, render as Link
    if (item.route) {
      return (
        <Link href={item.route} key={item.id} aria-label={t(item.labelKey)}>
          <motion.div {...motionProps} className={commonClassName}>
            {content}
          </motion.div>
        </Link>
      );
    }

    // Otherwise, render as button with scroll functionality
    return (
      <motion.button
        {...motionProps}
        key={item.id}
        onClick={() => scrollToSection(item.id)}
        className={commonClassName}
        aria-label={t(item.labelKey)}
      >
        {content}
      </motion.button>
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed left-1 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
        >
          <div className="bg-card-bg/80 backdrop-blur-lg border border-border rounded-2xl px-2 py-6 shadow-xl">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => renderNavItem(item, index))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
