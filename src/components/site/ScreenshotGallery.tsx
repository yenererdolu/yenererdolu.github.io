type Props = {
  screenshots: string[];
  productName: string;
  gradient: string;
};

export function ScreenshotGallery({ screenshots, productName, gradient }: Props) {
  if (!screenshots.length) return null;

  return (
    <div className={`relative overflow-hidden rounded-3xl shadow-elegant ${gradient}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_60%)]" />
      <div className="relative flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth p-6 sm:p-8 scrollbar-none [&::-webkit-scrollbar]:hidden">
        {screenshots.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${productName} ekran görüntüsü ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            className="h-auto w-[65%] flex-none snap-center rounded-2xl shadow-elegant sm:w-[42%] md:w-[30%] lg:w-[23%]"
          />
        ))}
      </div>
    </div>
  );
}
