# CONTEXT.md — Bugalgo (şirket / kök bağlam)

> Bu dosya, otomasyon ajanlarının (özellikle `google-ads-manager` ve diğer pazarlama/UA ajanlarının) ve teknik ajanların uygulamaya özel verileri okuduğu kök bağlam dosyasıdır. Her ürünün kendi detaylı bağlamı `context/<slug>/CONTEXT.md` içindedir.

## Şirket

- **Marka:** Bugalgo
- **Konum:** İstanbul, Türkiye (Türkiye merkezli)
- **Web:** https://bugalgo.com
- **Bu repo:** `yenererdolu.github.io` — şirketin ürün tanıtım + yasal/destek sitesidir (GitHub Pages → `bugalgo.com`). **Uygulamaların kaynak kodu bu repoda değildir**; bu repo yalnızca pazarlama ve yasal yüzeydir.
- **Konumlandırma:** Gizliliği ön planda tutan, kullanıcı odaklı mobil ve masaüstü uygulamalar.

## Temel ilkeler (tüm ürünlerde geçerli)

- **Gizlilik önce** — kullanıcı verisi minimumda, mümkün olduğunda anonim kullanım.
- **Uçtan uca şifreleme (E2E)** — mesajlaşma içeren ürünlerde standart.
- **KVKK / GDPR uyumlu** altyapı.
- **Yerel veri** — veriler mümkün olduğunda cihazda saklanır, sunucuya gönderilmez.

## Ürün portföyü

| Ürün | Slug | Kategori | Platform | Dağıtım | Birincil pazar | Dil |
|------|------|----------|----------|---------|----------------|-----|
| AçıkEczane | `acikeczane` | Sağlık | Mobil (iOS + Android) | App Store + Google Play | Türkiye | TR |
| Sınav Koçu | `sinavkocu` | Eğitim | Mobil (iOS + Android) | App Store + Google Play | Türkiye | TR |
| Lumnos | `lumnos` | Eğitim · Global | Mobil (yalnızca Android) | Google Play | Global | EN |
| Opero | `opero` | İşletme · Masaüstü | Windows masaüstü | Mağaza yok (demo/iletişim) | Türkiye (B2B) | TR |
| EvoCafe | `evocafe` | Restoran & Kafe · Masaüstü | Masaüstü POS (Win/macOS) | Mağaza yok (demo/iletişim) | Türkiye (B2B) | TR |

> "Rakamlarla Bugalgo": 4+ yayında uygulama · E2E şifreleme · KVKK uyumlu · iOS + Android.

## İletişim

- **Genel / iş birliği:** https://bugalgo.com/contact/ (site üzerinden form — Web3Forms ile gönderilir, mesajlar `erdolu.yener@gmail.com` adresine düşer; bkz. [src/lib/contact.ts](src/lib/contact.ts) ve [src/components/site/ContactPage.tsx](src/components/site/ContactPage.tsx)).
- **Lumnos:** info@lumnos.app
- **Opero / EvoCafe (B2B demo/fiyat):** https://bugalgo.com/contact/
- Not: kod tabanında `SUPPORT_EMAIL` `null` (sitede herkese açık e-posta kartı gösterilmez); iletişim formu bundan bağımsız, Web3Forms access key üzerinden çalışır.

## Teknik (site)

- Astro 5 (static output) + React 19 island + Tailwind CSS 4, TypeScript strict.
- GitHub Actions ile `main` push → GitHub Pages deploy. Detay: [CLAUDE.md](CLAUDE.md), [DEPLOYMENT.md](DEPLOYMENT.md).
- Ürün yapısal verisi [src/lib/products.ts](src/lib/products.ts), tüm metin/kopya [src/i18n/dictionaries.ts](src/i18n/dictionaries.ts) içindedir (TR/EN).

## UA / pazarlama ajanları için notlar

- Mağaza linkleri ve paket kimlikleri her ürünün `context/<slug>/CONTEXT.md` dosyasında ve `STORE_URLS` ([src/lib/products.ts](src/lib/products.ts)) içinde.
- Hedef coğrafya ve dil ürüne göre değişir: AçıkEczane / Sınav Koçu **TR-only**; Lumnos **global/EN**; Opero ve EvoCafe **TR B2B** (UA kampanyası uygun değil, talep odaklı satış).
- `app-ads.txt` → `public/app-ads.txt` (yayıncı doğrulaması için canlıda kalmalı).
