import { Mail, MapPin, Globe } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { SUPPORT_EMAIL } from "@/lib/contact";

export function SiteFooter() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60 bg-card/40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary text-sm font-bold text-primary-foreground shadow-soft">
                B
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                Bugalgo
              </span>
            </a>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              {t.footer.products}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/products/acikeczane/" className="hover:text-foreground">
                  {t.products.acikeczane.name}
                </a>
              </li>
              <li>
                <a href="/products/sinavkocu/" className="hover:text-foreground">
                  {t.products.sinavkocu.name}
                </a>
              </li>
              <li>
                <a href="/products/lumnos/" className="hover:text-foreground">
                  {t.products.lumnos.name}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">
              {t.footer.company}
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {SUPPORT_EMAIL && (
                <li className="flex items-center gap-2">
                  <Mail className="h-3.5 w-3.5" aria-hidden />
                  <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-foreground">
                    {SUPPORT_EMAIL}
                  </a>
                </li>
              )}
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden />
                <span>{t.contact.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="h-3.5 w-3.5" aria-hidden />
                <a href="https://bugalgo.com" className="hover:text-foreground">
                  bugalgo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {year} Bugalgo. {t.footer.rights}</p>
          <p>Istanbul, Türkiye</p>
        </div>
      </div>
    </footer>
  );
}
