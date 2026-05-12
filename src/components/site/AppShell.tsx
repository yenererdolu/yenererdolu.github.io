import type { ReactNode } from "react";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { GradientBackdrop } from "@/components/site/GradientBackdrop";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <LanguageProvider>
      <GradientBackdrop />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}
