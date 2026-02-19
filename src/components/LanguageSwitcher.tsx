"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const t = useTranslations("common.languageSwitcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: "en" | "pl") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className="flex gap-2 bg-card-bg border border-border rounded-xl p-1"
      role="group"
      aria-label={t("ariaLabel")}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage("en")}
        className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden ${
          locale === "en"
            ? "bg-accent text-white"
            : "text-muted hover:text-foreground"
        }`}
        aria-label={t("switchToEn")}
        aria-pressed={locale === "en"}
        title={t("en")}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage("pl")}
        className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-hidden ${
          locale === "pl"
            ? "bg-accent text-white"
            : "text-muted hover:text-foreground"
        }`}
        aria-label={t("switchToPl")}
        aria-pressed={locale === "pl"}
        title={t("pl")}
      >
        PL
      </motion.button>
    </div>
  );
}
