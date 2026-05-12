import { useState } from "react";
import { Mail, MapPin, Globe, Send } from "lucide-react";
import { useT } from "@/i18n/LanguageProvider";
import { AppShell } from "@/components/site/AppShell";
import { SUPPORT_EMAIL } from "@/lib/contact";

function ContactContent() {
  const t = useT();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!SUPPORT_EMAIL) return;
    const subject = encodeURIComponent(`[Bugalgo] ${name || "Mesaj"}`);
    const body = encodeURIComponent(
      `${message}\n\n—\n${name}${email ? ` <${email}>` : ""}`
    );
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            {t.contact.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{t.contact.subtitle}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-3xl p-6 shadow-soft sm:p-8 lg:col-span-3"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.name}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.email}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-y rounded-xl border border-input bg-background/70 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                <Send className="h-4 w-4" />
                {t.contact.send}
              </button>
            </div>
          </form>

          <div className="space-y-4 lg:col-span-2">
            {SUPPORT_EMAIL && (
              <ContactInfoCard
                Icon={Mail}
                label={t.contact.emailLabel}
                value={SUPPORT_EMAIL}
                href={`mailto:${SUPPORT_EMAIL}`}
              />
            )}
            <ContactInfoCard
              Icon={MapPin}
              label={t.contact.locationLabel}
              value={t.contact.location}
            />
            <ContactInfoCard
              Icon={Globe}
              label={t.contact.webLabel}
              value="bugalgo.com"
              href="https://bugalgo.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="glass-panel flex items-center gap-4 rounded-2xl p-5 shadow-soft transition-transform hover:-translate-y-0.5">
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-warm">
        <Icon className="h-5 w-5 text-primary" aria-hidden />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="truncate text-sm font-medium text-foreground">{value}</div>
      </div>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block">
        {Inner}
      </a>
    );
  }
  return Inner;
}

export function ContactPage() {
  return (
    <AppShell>
      <ContactContent />
    </AppShell>
  );
}
