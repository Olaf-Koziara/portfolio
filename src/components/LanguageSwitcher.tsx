"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("common");

  const switchLanguage = (newLocale: "en" | "pl") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      role="group"
      aria-label={t("languageSwitcher")}
      className="flex gap-2 bg-card-bg border border-border rounded-xl p-1"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage("en")}
        aria-current={locale === "en" ? "true" : undefined}
        aria-label={t("english")}
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
        aria-current={locale === "pl" ? "true" : undefined}
        aria-label={t("polish")}
        className={`cursor-pointer px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
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
