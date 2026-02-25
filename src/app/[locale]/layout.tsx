import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import ThemeProvider from "@/components/ThemeProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import "../globals.css";

export const metadata: Metadata = {
  title: "Olaf Koziara - Frontend Developer",
  description:
    "Frontend Developer specializing in Next.js, React, TypeScript, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Web Development",
  ],
  authors: [{ name: "Olaf Koziara" }],
  openGraph: {
    title: "Olaf Koziara - Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, React, TypeScript, and modern web technologies.",
    type: "website",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  const t = await getTranslations("common");

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            {/* Skip to Content Link */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-accent focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
            >
              {t("skipToContent")}
            </a>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  <a href="#" className="text-xl font-bold">
                    Portfolio
                  </a>
                  <div className="flex items-center gap-4">
                    <LanguageSwitcher />
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </nav>

            {/* Floating side navigation */}

            {/* Main content with top padding for fixed nav */}
            <main id="main-content" className="pt-16">
              {children}
            </main>

            {/* Footer */}
            <footer className="border-t border-border py-8 px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto text-center text-muted text-sm">
                <p>
                  © {new Date().getFullYear()} Olaf Koziara{" "}
                  {locale === "en"
                    ? "All rights reserved."
                    : "Wszelkie prawa zastrzeżone."}
                </p>
              </div>
            </footer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
