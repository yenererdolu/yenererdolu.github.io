import { Check, ArrowLeft, LifeBuoy, Shield, FileText, UserX, ArrowRight } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { getProductMeta, PRODUCTS, type ProductSlug } from "@/lib/products";
import { StoreBadges } from "@/components/site/StoreBadges";
import { ProductCard } from "@/components/site/ProductCard";
import { AppShell } from "@/components/site/AppShell";
import { ScreenshotGallery } from "@/components/site/ScreenshotGallery";
import { YoutubeVideo } from "@/components/site/YoutubeVideo";

type Props = {
  slug: ProductSlug;
};

function ProductDetailContent({ slug }: Props) {
  const t = useT();
  const meta = getProductMeta(slug)!;
  const data = t.products[slug as ProductSlug];
  const others = PRODUCTS.filter((p) => p.slug !== slug);

  return (
    <div className="px-4 py-12 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <a
          href="/products/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> {t.nav.products}
        </a>

        <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <img
                src={meta.iconUrl}
                alt={`${data.name} app icon`}
                width={96}
                height={96}
                className="h-24 w-24 rounded-3xl shadow-xl object-cover md:h-32 md:w-32"
              />
              <div>
                <span className="inline-flex items-center rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
                  {data.tag}
                </span>
                <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {data.name}
                </h1>
              </div>
            </div>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {data.long}
            </p>
            <div className="mt-8">
              <StoreBadges slug={slug} />
            </div>
          </div>

          <div className={`relative aspect-square w-full overflow-hidden rounded-3xl shadow-elegant ${meta.gradient}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={meta.iconUrl}
                alt={`${data.name} app icon`}
                width={160}
                height={160}
                className="h-32 w-32 rounded-3xl shadow-elegant object-cover md:h-40 md:w-40"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            {t.values.title}
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {data.features.map((f) => (
              <li
                key={f}
                className="glass-panel flex items-start gap-3 rounded-xl p-4 shadow-soft"
              >
                <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {(meta.youtubeVideoId || meta.videoUrl) && (
          <div className="mt-20">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              {t.common.demoVideo}
            </h2>
            {meta.youtubeVideoId ? (
              <YoutubeVideo
                videoId={meta.youtubeVideoId}
                title={`${data.name} ${t.common.demoVideo}`}
              />
            ) : (
              <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-2xl shadow-elegant">
                <video
                  src={meta.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full"
                />
              </div>
            )}
          </div>
        )}

        {meta.screenshots && meta.screenshots.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
              {t.common.screenshots}
            </h2>
            <ScreenshotGallery
              screenshots={meta.screenshots}
              productName={data.name}
              gradient={meta.gradient}
            />
          </div>
        )}

        <div className="mt-20">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            {t.common.legalAndSupport}
          </h2>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              { label: t.common.support, href: `/products/${slug}/support/`, Icon: LifeBuoy },
              { label: t.common.privacyPolicy, href: `/products/${slug}/privacy/`, Icon: Shield },
              { label: t.common.termsOfUse, href: `/products/${slug}/terms/`, Icon: FileText },
              ...(slug === "lumnos"
                ? [{ label: t.common.deleteAccount, href: `/products/lumnos/account-deletion/`, Icon: UserX }]
                : []),
            ].map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                className="glass-panel group flex items-center gap-3 rounded-xl p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="flex-1 text-sm font-medium text-foreground">{label}</span>
                <ArrowRight className="h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
            {t.common.otherProducts}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {others.map((p) => {
              const od = t.products[p.slug];
              return (
                <ProductCard
                  key={p.slug}
                  slug={p.slug}
                  name={od.name}
                  tag={od.tag}
                  short={od.short}
                  iconUrl={p.iconUrl}
                  gradient={p.gradient}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProductDetailPage({ slug }: Props) {
  return (
    <AppShell>
      <ProductDetailContent slug={slug} />
    </AppShell>
  );
}
