export type ProductSlug = "acikeczane" | "sinavkocu" | "lumnos";

export type ProductMeta = {
  slug: ProductSlug;
  iconUrl: string;
  gradient: string;
  screenshots?: string[];
  youtubeVideoId?: string;
  videoUrl?: string;
};

export const PRODUCTS: ProductMeta[] = [
  {
    slug: "acikeczane",
    iconUrl: "/images/products/acikeczane.png",
    gradient: "bg-gradient-to-br from-rose-200 via-red-200 to-orange-100",
    youtubeVideoId: "F8eSZE3oBFU",
    screenshots: [
      "/images/products/acikeczane/screenshots/01.jpeg",
      "/images/products/acikeczane/screenshots/02.jpeg",
      "/images/products/acikeczane/screenshots/03.jpeg",
      "/images/products/acikeczane/screenshots/04.jpeg",
      "/images/products/acikeczane/screenshots/05.jpeg",
      "/images/products/acikeczane/screenshots/06.jpeg",
      "/images/products/acikeczane/screenshots/07.jpeg",
    ],
  },
  {
    slug: "sinavkocu",
    iconUrl: "/images/products/sinavkocu.png",
    gradient: "bg-gradient-to-br from-sky-200 via-indigo-200 to-violet-100",
    screenshots: [
      "/images/products/sinavkocu/screenshots/01.png",
      "/images/products/sinavkocu/screenshots/02.png",
      "/images/products/sinavkocu/screenshots/03.png",
      "/images/products/sinavkocu/screenshots/04.png",
      "/images/products/sinavkocu/screenshots/05.png",
    ],
  },
  {
    slug: "lumnos",
    iconUrl: "/images/products/lumnos.png",
    gradient: "bg-gradient-to-br from-amber-200 via-yellow-100 to-emerald-100",
    videoUrl: "/videos/lumnos/demo.mp4",
    screenshots: [
      "/images/products/lumnos/screenshots/01.png",
      "/images/products/lumnos/screenshots/02.jpg",
      "/images/products/lumnos/screenshots/03.jpg",
      "/images/products/lumnos/screenshots/04.jpg",
      "/images/products/lumnos/screenshots/05.png",
      "/images/products/lumnos/screenshots/06.png",
      "/images/products/lumnos/screenshots/07.png",
      "/images/products/lumnos/screenshots/08.png",
    ],
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
    android: "https://play.google.com/store/apps/details?id=com.bugalgo.sinavkocu",
  },
  lumnos: {
    android: "https://play.google.com/store/apps/details?id=com.bugalgo.lumnos",
  },
};
