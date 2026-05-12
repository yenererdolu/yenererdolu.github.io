import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/", labelKey: "home" as const, exact: true },
  { href: "/products/", labelKey: "products" as const },
  { href: "/about/", labelKey: "about" as const },
  { href: "/contact/", labelKey: "contact" as const },
] as const;

export function SiteHeader() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto mt-3 max-w-6xl px-4">
        <div className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 shadow-soft">
          <a href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground shadow-soft">
              B
            </span>
            <span className="text-lg font-semibold tracking-tight text-foreground">
              Bugalgo
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {t.nav[item.labelKey]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1 text-xs font-medium md:flex">
              <Globe className="ml-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
              <button
                type="button"
                onClick={() => setLang("tr")}
                className={cn(
                  "rounded-full px-2 py-0.5 transition-colors",
                  lang === "tr"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={lang === "tr"}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "rounded-full px-2 py-0.5 transition-colors",
                  lang === "en"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card/60 text-foreground md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
              aria-expanded={open}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="glass-panel mt-2 rounded-2xl p-3 shadow-soft md:hidden animate-fade-in">
            <nav className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {t.nav[item.labelKey]}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-1 rounded-full border border-border bg-card/60 p-1 text-xs font-medium">
                <Globe className="ml-1 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
                <button
                  type="button"
                  onClick={() => setLang("tr")}
                  className={cn(
                    "rounded-full px-2 py-0.5 transition-colors",
                    lang === "tr"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  TR
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={cn(
                    "rounded-full px-2 py-0.5 transition-colors",
                    lang === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  EN
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
