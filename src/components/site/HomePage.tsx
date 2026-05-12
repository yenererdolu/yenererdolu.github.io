import { ArrowRight, ShieldCheck, Lock, FileCheck2, Sparkles } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { ProductCard } from "@/components/site/ProductCard";
import { AnimatedStat } from "@/components/site/AnimatedStat";
import { StoreBadges } from "@/components/site/StoreBadges";
import { PRODUCTS } from "@/lib/products";
import { AppShell } from "@/components/site/AppShell";


const VALUE_ICONS = [ShieldCheck, Lock, FileCheck2, Sparkles];

function HomeContent() {
  const t = useT();

  return (
    <div>
      <section className="relative px-4 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-6xl animate-fade-up">
            {t.hero.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground animate-fade-up [animation-delay:120ms]">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:200ms]">
            <a
              href="/products/"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              {t.common.exploreProducts}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              {t.common.contactUs}
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.products.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.products.subtitle}</p>
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
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.values.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.values.subtitle}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.items.map((item, i) => {
              const Icon = VALUE_ICONS[i] ?? Sparkles;
              return (
                <div
                  key={item.title}
                  className="glass-panel rounded-2xl p-6 shadow-soft transition-transform hover:-translate-y-1"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm text-foreground shadow-soft">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.stats.title}
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.stats.items.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="glass-panel relative overflow-hidden rounded-3xl p-10 text-center shadow-elegant">
            <div className="absolute inset-0 -z-10 bg-gradient-warm opacity-50" />
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              {t.cta.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export function HomePage() {
  return (
    <AppShell>
      <HomeContent />
    </AppShell>
  );
}
