# Deployment Guide — bugalgo.com (GitHub Pages + Astro)

## 1. Ilk Kurulum (bir kere yapılır)

### GitHub Pages Source ayarı

1. GitHub → `yenererdolu/yenererdolu.github.io` → **Settings** → **Pages**
2. "Build and deployment" bölümünde **Source** açılır menüsünü **GitHub Actions** olarak seç.
   - Şu anda "Deploy from a branch" → main seçili olabilir; bunu değiştir.
3. **Custom domain** alanında `bugalgo.com` yazıyor olmalı.
4. **Enforce HTTPS** kutucuğu işaretli olsun.

> Bu adımı `astro-migration` → `main` merge'inden ÖNCE yapabilirsin; mevcut siteye zarar vermez çünkü `main`'e yeni bir push gelmeden workflow tetiklenmez.

---

## 2. Sıfır Downtime Geçiş Planı

```
1. astro-migration branch'ini GitHub'a push et:
       git push -u origin astro-migration

2. Pages Source'u henüz değiştirme.

3. Astro build çıktısını lokalde doğrula:
       npm run build && npm run preview
   Tarayıcıda http://localhost:4321 açık,
   aşağıdaki URL'leri elle gez ve içerik doğru gelsin.

4. Lokalde sorun yoksa Pages Source'u GitHub Actions'a çevir (adım 1 üstte).

5. astro-migration'ı main'e merge et:
       git checkout main
       git merge astro-migration
       git push

6. GitHub → Actions sekmesine git → "Deploy Astro to GitHub Pages" workflow'u yeşil olsun.

7. Aşağıdaki URL'leri canlıda test et:
```

### Test URL'leri

| URL | Beklenen |
|-----|----------|
| https://bugalgo.com | Ana sayfa |
| https://bugalgo.com/products/acikeczane/privacy/ | AcikEczane Gizlilik |
| https://bugalgo.com/products/acikeczane/terms/ | AcikEczane Kullanım Koşulları |
| https://bugalgo.com/products/acikeczane/support/ | AcikEczane Destek |
| https://bugalgo.com/products/sinavkocu/privacy/ | Sınav Kocu Gizlilik |
| https://bugalgo.com/products/sinavkocu/terms/ | Sınav Kocu Kullanım Koşulları |
| https://bugalgo.com/products/sinavkocu/support/ | Sınav Kocu Destek |
| https://bugalgo.com/products/lumnos/privacy/ | Lumnos Gizlilik |
| https://bugalgo.com/products/lumnos/terms/ | Lumnos Kullanım Koşulları |
| https://bugalgo.com/products/lumnos/support/ | Lumnos Destek |
| https://bugalgo.com/app-ads.txt | Ham metin dosyası |
| https://bugalgo.com/google6a5136bdf9069662.html | Google doğrulama sayfası |

---

## 3. Rollback Planı

Canlıda sorun çıkarsa:

```
# Seçenek A — Pages Source'u eski haline döndür
GitHub → Settings → Pages → Source → "Deploy from a branch" → main

# Seçenek B — Git revert ile değişiklikleri geri al
git revert -m 1 <merge-commit-sha>
git push

# Seçenek C — legacy/ klasöründeki statik dosyaları kurtarma
# (frontend dev eski dosyaları legacy/ altına taşıdıysa)
cp -r legacy/* .
git add .
git commit -m "rollback: restore static site from legacy/"
git push
```

Rollback süresi tahmini: kaynak değişikliği ~1 dakika, git revert ~3-5 dakika (CI süresi dahil).

---

## 4. Sonraki Deploy'lar

| Tetikleyici | Yöntem |
|-------------|--------|
| `main`'e her push | Otomatik — workflow tetiklenir |
| Manuel deploy | GitHub → Actions → "Deploy Astro to GitHub Pages" → "Run workflow" |

---

## 5. Bilinen Sınırlamalar

- **PR preview yok.** GitHub Pages, Vercel/Netlify gibi her PR için önizleme ortamı oluşturmaz. Test her zaman lokalde `npm run build && npm run preview` ile yapılmalı.
- **Hidden dosyalar (`.well-known/` vb.)** için Astro'da `public/.well-known/` klasörü kullanılabilir; Astro bu klasörü olduğu gibi `dist/` içine kopyalar.
- **Deploy sırasında 45-60 saniyelik boşluk** olabilir (build + upload süresi). Bu sürede eski sayfa servis edilmeye devam eder, yani gerçek downtime yoktur.
