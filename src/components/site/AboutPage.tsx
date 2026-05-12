import { ShieldCheck, Lock, FileCheck2, Sparkles } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { AnimatedStat } from "@/components/site/AnimatedStat";
import { AppShell } from "@/components/site/AppShell";

const ICONS = [ShieldCheck, Lock, FileCheck2, Sparkles];

function AboutContent() {
  const t = useT();
  return (
    <div className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.about.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t.about.subtitle}</p>
        </div>

        <div className="glass-panel mt-12 rounded-3xl p-8 shadow-soft sm:p-12">
          <div className="space-y-5 text-base leading-relaxed text-foreground">
            {t.about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground">
            {t.values.title}
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {t.values.items.map((item, i) => {
              const Icon = ICONS[i] ?? Sparkles;
              return (
                <div
                  key={item.title}
                  className="glass-panel rounded-2xl p-6 shadow-soft"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm shadow-soft">
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

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.stats.items.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function AboutPage() {
  return (
    <AppShell>
      <AboutContent />
    </AppShell>
  );
}
