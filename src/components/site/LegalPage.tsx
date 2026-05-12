import type { ReactNode } from "react";
import { AppShell } from "@/components/site/AppShell";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  date?: string;
  breadcrumbs: BreadcrumbItem[];
  productName?: string;
  productIconUrl?: string;
  children: ReactNode;
};

function LegalContent({ title, date, breadcrumbs, productName, productIconUrl, children }: Props) {
  return (
    <div className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1">
              {i > 0 && <span>/</span>}
              {crumb.href ? (
                <a href={crumb.href} className="hover:text-foreground">
                  {crumb.label}
                </a>
              ) : (
                <span className="text-foreground">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="glass-panel rounded-3xl p-8 shadow-soft sm:p-12">
          {productIconUrl && productName && (
            <div className="mb-6 flex items-center gap-3">
              <img
                src={productIconUrl}
                alt={`${productName} app icon`}
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 rounded-xl object-cover shadow-sm"
              />
              <span className="text-base font-semibold text-foreground">{productName}</span>
            </div>
          )}
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{title}</h1>
          {date && (
            <p className="mt-2 text-sm text-muted-foreground">{date}</p>
          )}
          <div className="prose-content mt-8 space-y-4 text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export function LegalPage(props: Props) {
  return (
    <AppShell>
      <LegalContent {...props} />
    </AppShell>
  );
}
