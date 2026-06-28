# CONTEXT.md — Lumnos

> Ürün bağlam dosyası. Şirket geneli için kök [CONTEXT.md](../../CONTEXT.md).

## Özet

Lumnos, dünya genelindeki öğrenciler için **akıllı pomodoro** tabanlı çalışma takip uygulamasıdır. 25 renk teması, detaylı istatistikler ve başarım sistemi ile çalışmayı keyifli hale getirir. Sınav Koçu'nun global/İngilizce muadilidir.

- **Slug:** `lumnos`
- **Kategori:** Eğitim · Global (Education · Global)
- **Etiket:** Education · Global
- **Birincil pazar / dil:** Global / EN (arayüz ve içerik İngilizce, ülke/dil bazlı sınav listeleri)
- **Konumlandırma:** Worldwide exam candidates için keyifli, kişiselleştirilebilir çalışma takibi.

## Platform & dağıtım

- **Platform:** Mobil — **yalnızca Android** (iOS sürümü yok)
- **Google Play:** https://play.google.com/store/apps/details?id=com.bugalgo.lumnos
- **Android paket adı:** `com.bugalgo.lumnos`
- **Tanıtım videosu:** `public/videos/lumnos/demo.mp4` (site üzerinde gömülü)

## Hedef kitle

- 13+ yaş sınav adayları ve öğrenciler (global).
- İngilizce konuşan / çok dilli pazarlar.

## Değer önerisi / öne çıkan özellikler

- Smart Pomodoro tracking
- Detailed study analytics
- Custom study plans
- Achievement system
- 25 beautiful color themes

## Teknik notlar (uygulama)

- Çalışma verisi **cihazda yerel** saklanır: SQLite (oturumlar, istatistikler) + AsyncStorage (profil, ayarlar, başarımlar).
- Firebase Authentication: yalnızca **anonim UID** (gerçek kimlik yok).
- AdMob (varsayılan **kişiselleştirilmemiş reklam**, `requestNonPersonalizedAdsOnly: true`), RevenueCat (premium abonelik), Expo bildirimleri (yerel).
- Premium: "Lumnos Pro" — reklamları kaldırır.

## Uyumluluk & gizlilik

- **GDPR + KVKK** uyumlu (global kullanıcılar için açıkça GDPR kapsamı belirtilir).
- Veri minimizasyonu; anonim kullanım mümkün.
- Uygulama içi **hesap silme** (Settings > Delete Account) ve ayrı hesap silme sayfası mevcut.

## UA / Google Ads notları

- **Coğrafya:** Global (çok pazarlı). **Dil:** İngilizce (gerekirse yerelleştirme).
- **Yalnızca Android** → Google Play App campaigns (Android-only); iOS/ASA yok.
- Para kazanma: AdMob + RevenueCat (premium). LTV/ROAS hesaplarında abonelik gelirini RevenueCat üzerinden izle.
- Anahtar temalar: "pomodoro", "study tracker", "focus timer", "exam study".

## İletişim

- E-posta: info@lumnos.app
- Genel: https://bugalgo.com/contact/
- Destek/SSS: https://bugalgo.com/products/lumnos/support/

## Canlı URL'ler (indeksli — kırılmamalı)

- Ürün: https://bugalgo.com/products/lumnos/
- Gizlilik: https://bugalgo.com/products/lumnos/privacy/
- Kullanım Koşulları: https://bugalgo.com/products/lumnos/terms/
- Destek: https://bugalgo.com/products/lumnos/support/
- Hesap silme: https://bugalgo.com/products/lumnos/account-deletion/ (alias: `/account-delete/`)
