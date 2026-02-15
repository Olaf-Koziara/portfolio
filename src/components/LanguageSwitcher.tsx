"use client";

import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("common.language");
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: "en" | "pl") => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div
      className="flex gap-2 bg-card-bg border border-border rounded-xl p-1"
      role="group"
      aria-label={t("switcher")}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => switchLanguage("en")}
        aria-pressed={locale === "en"}
        aria-label={t("select", { lang: t("en") })}
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
        aria-pressed={locale === "pl"}
        aria-label={t("select", { lang: t("pl") })}
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
