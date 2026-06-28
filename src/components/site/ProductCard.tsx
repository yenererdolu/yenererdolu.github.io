import { ArrowRight } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import type { ProductSlug } from "@/lib/products";

type Props = {
  slug: ProductSlug;
  name: string;
  tag: string;
  short: string;
  iconUrl: string;
  gradient: string;
};

export function ProductCard({ slug, name, tag, short, iconUrl, gradient }: Props) {
  const t = useT();
  return (
    <a
      href={`/products/${slug}/`}
      className="group glass-panel relative flex flex-col overflow-hidden rounded-3xl shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
    >
      <div className={`relative h-32 w-full overflow-hidden ${gradient}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_60%)]" />
        <div className="absolute bottom-3 left-4 inline-flex items-center rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground backdrop-blur">
          {tag}
        </div>
      </div>
      <img
        src={iconUrl}
        alt={`${name} app icon`}
        width={64}
        height={64}
        loading="lazy"
        className="absolute top-20 right-4 h-16 w-16 rounded-2xl shadow-md object-cover"
      />
      <div className="flex flex-1 flex-col p-6 pt-10">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {short}
        </p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
          {t.common.learnMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}
