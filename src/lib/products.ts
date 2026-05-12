export type ProductSlug = "acikeczane" | "sinavkocu" | "lumnos";

export type ProductMeta = {
  slug: ProductSlug;
  iconUrl: string;
  gradient: string;
};

export const PRODUCTS: ProductMeta[] = [
  {
    slug: "acikeczane",
    iconUrl: "/images/products/acikeczane.png",
    gradient: "bg-gradient-to-br from-rose-200 via-red-200 to-orange-100",
  },
  {
    slug: "sinavkocu",
    iconUrl: "/images/products/sinavkocu.png",
    gradient: "bg-gradient-to-br from-sky-200 via-indigo-200 to-violet-100",
  },
  {
    slug: "lumnos",
    iconUrl: "/images/products/lumnos.png",
    gradient: "bg-gradient-to-br from-amber-200 via-yellow-100 to-emerald-100",
  },
];

export function getProductMeta(slug: string): ProductMeta | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const STORE_URLS: Record<ProductSlug, { ios?: string; android?: string }> = {
  acikeczane: {
    ios: "https://apps.apple.com/tr/app/acikeczane/id6760047566",
    android: "https://play.google.com/store/apps/details?id=com.yenererdolu.nobetcieczane",
  },
  sinavkocu: {
    ios: "https://apps.apple.com/tr/app/s%C4%B1nav-ko%C3%A7u-pomodoro-timer/id6761717241",
    android: "https://play.google.com/store/apps/details?id=com.yenererdolu.sinavkocu",
  },
  lumnos: {
    android: "https://play.google.com/store/apps/details?id=com.bugalgo.lumnos",
  },
};
