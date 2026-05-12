import { Apple, Smartphone } from "lucide-react";
import type { ProductSlug } from "@/lib/products";
import { STORE_URLS } from "@/lib/products";

type Props = {
  size?: "sm" | "md";
  slug?: ProductSlug;
};

export function StoreBadges({ size = "md", slug }: Props) {
  const padding = size === "sm" ? "px-3 py-2" : "px-4 py-3";
  const labelSize = size === "sm" ? "text-[10px]" : "text-[11px]";
  const titleSize = size === "sm" ? "text-sm" : "text-base";

  const urls = slug ? STORE_URLS[slug] : undefined;
  const iosUrl = urls?.ios ?? "https://www.apple.com/app-store/";
  const androidUrl = urls?.android ?? "https://play.google.com/store";

  return (
    <div className="flex flex-wrap items-center gap-3">
      {(!slug || urls?.ios) && (
        <a
          href={iosUrl}
          target="_blank"
          rel="noreferrer"
          className={`group inline-flex items-center gap-3 rounded-xl border border-border bg-card/80 ${padding} shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant`}
        >
          <Apple className="h-6 w-6 text-foreground" aria-hidden />
          <span className="flex flex-col leading-tight">
            <span className={`${labelSize} text-muted-foreground`}>Download on the</span>
            <span className={`${titleSize} font-semibold text-foreground`}>App Store</span>
          </span>
        </a>
      )}
      <a
        href={androidUrl}
        target="_blank"
        rel="noreferrer"
        className={`group inline-flex items-center gap-3 rounded-xl border border-border bg-card/80 ${padding} shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elegant`}
      >
        <Smartphone className="h-6 w-6 text-foreground" aria-hidden />
        <span className="flex flex-col leading-tight">
          <span className={`${labelSize} text-muted-foreground`}>GET IT ON</span>
          <span className={`${titleSize} font-semibold text-foreground`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
