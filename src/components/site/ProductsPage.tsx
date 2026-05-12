import { useT } from "@/i18n/LanguageProvider";
import { ProductCard } from "@/components/site/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { AppShell } from "@/components/site/AppShell";

function ProductsContent() {
  const t = useT();
  return (
    <div className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.products.title}
          </h1>
          <p className="mt-4 text-muted-foreground">{t.products.subtitle}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {PRODUCTS.map((p) => {
            const data = t.products[p.slug];
            return (
              <ProductCard
                key={p.slug}
                slug={p.slug}
                name={data.name}
                tag={data.tag}
                short={data.short}
                iconUrl={p.iconUrl}
                gradient={p.gradient}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export function ProductsPage() {
  return (
    <AppShell>
      <ProductsContent />
    </AppShell>
  );
}
