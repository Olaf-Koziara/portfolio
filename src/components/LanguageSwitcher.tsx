"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const t = useTranslations("common");
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
      aria-label={t("languageSelection")}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage("en")}
        aria-label={t("switchToEnglish")}
        aria-current={locale === "en" ? "true" : undefined}
        className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          locale === "en"
            ? "bg-accent text-white"
            : "text-muted hover:text-foreground"
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage("pl")}
        aria-label={t("switchToPolish")}
        aria-current={locale === "pl" ? "true" : undefined}
        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
          locale === "pl"
            ? "bg-accent text-white"
            : "text-muted hover:text-foreground"
        }`}
      >
        PL
      </motion.button>
    </div>
  );
}
