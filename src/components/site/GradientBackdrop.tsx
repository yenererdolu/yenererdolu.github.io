export function GradientBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute -top-40 -left-32 h-[36rem] w-[36rem] rounded-full bg-primary/20 blur-[120px] animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-accent-glow/30 blur-[120px] animate-blob [animation-delay:-6s]" />
      <div className="absolute bottom-[-10rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-secondary-glow/40 blur-[120px] animate-blob [animation-delay:-12s]" />
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
