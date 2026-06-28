export type Lang = "tr" | "en";

export const dictionaries = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      products: "Ürünler",
      about: "Hakkımızda",
      contact: "İletişim",
    },
    common: {
      learnMore: "Detaylı Bilgi",
      exploreProducts: "Ürünleri Keşfet",
      contactUs: "İletişim",
      backHome: "Ana Sayfaya Dön",
      otherProducts: "Diğer Ürünlerimiz",
      legalAndSupport: "Yasal ve Destek",
      support: "Destek",
      privacyPolicy: "Gizlilik Politikası",
      termsOfUse: "Kullanım Sözleşmesi",
      deleteAccount: "Hesap Silme",
      screenshots: "Uygulamadan Görünümler",
      demoVideo: "Tanıtım Videosu",
      replay: "Tekrar İzle",
      desktopApp: "Windows Masaüstü Uygulaması",
      requestDemo: "Demo & Bilgi Al",
    },
    hero: {
      eyebrow: "Teknoloji · Mobil & Web Uygulamaları",
      title: "Günlük hayatı kolaylaştıran modern uygulamalar",
      subtitle:
        "Bugalgo, gizliliği ön planda tutan, kullanıcı odaklı mobil ve web uygulamaları geliştirir. Ürünlerimiz App Store ve Google Play'de milyonlarca kullanıcıyla buluşuyor.",
    },
    products: {
      title: "Ürünlerimiz",
      subtitle:
        "Geliştirdiğimiz uygulamalarla farklı alanlarda kullanıcılarımıza değer katıyoruz.",
      acikeczane: {
        name: "AçıkEczane",
        tag: "Sağlık",
        short:
          "Nöbetçi eczane bilgilerine anında ulaşın, eczanelerle uçtan uca şifreli mesajlaşma ile güvenle iletişim kurun.",
        long: "AçıkEczane, Türkiye genelindeki nöbetçi eczaneleri konumunuza göre listeler ve eczanelerle uçtan uca şifreli mesajlaşma imkanı sunar. Anonim, hızlı ve güvenli sağlık iletişimi için tasarlandı.",
        features: [
          "Konum bazlı nöbetçi eczane listesi",
          "Uçtan uca şifreli mesajlaşma",
          "Anonim kullanım — kayıt gerektirmez",
          "Eczane detayları, telefon ve yol tarifi",
          "Türkiye geneli kapsam",
        ],
      },
      sinavkocu: {
        name: "Sınav Koçu",
        tag: "Eğitim",
        short:
          "YKS, LGS, KPSS, ALES, DGS için akıllı pomodoro çalışma takibi. Ders bazlı istatistikler ve başarım sistemi.",
        long: "Sınav Koçu, sınav adayları için akıllı pomodoro tabanlı çalışma takip uygulamasıdır. Ders bazında detaylı istatistikler, çalışma planları ve motive edici başarım sistemi içerir.",
        features: [
          "Akıllı pomodoro zamanlayıcı",
          "Ders bazlı çalışma istatistikleri",
          "Haftalık ve aylık çalışma planları",
          "Başarım ve hedef sistemi",
          "YKS, LGS, KPSS, ALES, DGS desteği",
        ],
      },
      lumnos: {
        name: "Lumnos",
        tag: "Education · Global",
        short:
          "Smart Pomodoro study tracker for exam candidates worldwide. Detailed statistics, study plans, achievement system, and 25 color themes.",
        long: "Lumnos, dünya genelindeki öğrenciler için akıllı pomodoro tabanlı çalışma takip uygulamasıdır. 25 renk teması, detaylı istatistikler ve başarım sistemi ile çalışmanızı keyifli hale getirir.",
        features: [
          "Smart Pomodoro tracking",
          "Detailed study analytics",
          "Custom study plans",
          "Achievement system",
          "25 beautiful color themes",
        ],
      },
      opero: {
        name: "Opero",
        tag: "İşletme · Masaüstü",
        short:
          "Kapı üretim firmaları için iş, müşteri ve araç operasyonlarını tek masaüstünde toplayan, çevrimdışı ve KVKK uyumlu yönetim yazılımı.",
        long: "Opero, kapı üretim firmaları için tasarlanmış, tamamen çevrimdışı çalışan masaüstü operasyon yazılımıdır. İş & müşteri takibi, saha ziyaretleri, araç yönetimi (evrak, masraf, periyodik kontroller) ve otomatik hatırlatmaları tek bir yerde toplar. Verileriniz cihazınızda kalır; rol bazlı erişim ve KVKK uyumlu altyapı ile güvenle çalışır.",
        features: [
          "İş & müşteri takibi — durum hattı, termin ve gecikme uyarıları",
          "Saha ziyaret planlama ve tek tıkla iş emri PDF çıktısı",
          "Araç yönetimi: evrak, masraf ve periyodik kontroller (muayene, sigorta, MTV)",
          "Otomatik hatırlatmalar — e-posta, WhatsApp ve SMS",
          "Rol bazlı giriş (yönetici / kullanıcı) ve denetim kayıtları",
          "Çevrimdışı çalışma, yerel veri ve zaman damgalı yedekleme",
          "KVKK uyumlu — verileriniz cihazınızda kalır",
        ],
      },
      evocafe: {
        name: "EvoCafe",
        tag: "Restoran & Kafe · Masaüstü",
        short:
          "Kafe ve restoranlar için adisyon, masa, stok ve cari yönetimini tek masaüstünde toplayan, çevrimdışı çalışan POS yazılımı.",
        long: "EvoCafe, kafe ve restoranlar için tasarlanmış, tamamen çevrimdışı çalışan bir masaüstü POS (satış noktası) yazılımıdır. Masa planı, hızlı adisyon, hesap bölme, stok & reçete takibi, cari hesaplar, masraf yönetimi ve gün sonu (Z) raporlarını tek bir yerde toplar. PIN ile hızlı personel girişi ve rol bazlı yetki sunar; verileriniz cihazınızda kalır ve otomatik yedeklenir.",
        features: [
          "Masa planı ve anlık masa durumu — taşıma, birleştirme ve adisyon takibi",
          "Hızlı adisyon ve sepet — kategori bazlı ürün ızgarası",
          "Hesap bölme (ürüne göre veya eşit) ve nakit / kart / veresiye / ikram ödemeleri",
          "Süre bazlı ürünler — PlayStation, bilardo ve masa kiralama için dakika/saat ücretlendirme",
          "Stok ve reçete takibi — malzeme bazlı otomatik stok düşümü",
          "Cari hesaplar (müşteri / tedarikçi), masraf yönetimi ve gün sonu Z-raporu",
          "PIN ile giriş, rol bazlı yetki (yönetici / garson)",
          "Çevrimdışı çalışma, yerel veri ve otomatik yedekleme",
        ],
      },
    },
    values: {
      title: "Değerlerimiz",
      subtitle: "Her ürünümüzün arkasındaki temel ilkeler.",
      items: [
        {
          title: "Gizlilik Önce",
          desc: "Kullanıcı verisini minimum tutuyor, mümkün olduğunda anonim çalışıyoruz.",
        },
        {
          title: "Uçtan Uca Şifreleme",
          desc: "Mesajlaşma içeren ürünlerimizde E2E şifreleme standarttır.",
        },
        {
          title: "KVKK Uyumlu",
          desc: "Türkiye merkezli olarak KVKK uyumlu altyapıyla çalışıyoruz.",
        },
        {
          title: "Kullanıcı Odaklı",
          desc: "Sade arayüz, hızlı performans ve gerçek hayatta işe yarayan özellikler.",
        },
      ],
    },
    stats: {
      title: "Rakamlarla Bugalgo",
      items: [
        { value: "4+", label: "Yayında Uygulama" },
        { value: "E2E", label: "Uçtan Uca Şifreleme" },
        { value: "KVKK", label: "Uyumlu Altyapı" },
        { value: "iOS+Android", label: "App Store & Google Play" },
      ],
    },
    cta: {
      title: "Uygulamalarımızı bugün indirin",
      subtitle: "App Store ve Google Play üzerinden tüm ürünlerimize ulaşabilirsiniz.",
    },
    about: {
      title: "Hakkımızda",
      subtitle: "Teknoloji ile topluma değer katmayı hedefliyoruz.",
      paragraphs: [
        "Bugalgo, sağlık ve günlük yaşam alanında yenilikçi mobil uygulamalar geliştiren bir teknoloji girişimidir.",
        "Kullanıcı gizliliğini ön planda tutarak, uçtan uca şifreleme ve anonim kullanım gibi ileri güvenlik standartlarıyla ürünler oluşturuyoruz.",
        "Türkiye merkezli olarak faaliyet gösteriyoruz ve ürünlerimiz App Store ve Google Play'de yayındadır.",
      ],
    },
    contact: {
      title: "İletişime Geç",
      subtitle: "Sorularınız veya iş birlikleriniz için bize ulaşın.",
      name: "Adınız",
      email: "E-posta",
      message: "Mesajınız",
      send: "Mesaj Gönder",
      emailLabel: "E-posta",
      locationLabel: "Konum",
      webLabel: "Web",
      location: "İstanbul, Türkiye",
    },
    footer: {
      tagline: "Modern, güvenli, kullanıcı odaklı uygulamalar.",
      products: "Ürünler",
      company: "Şirket",
      rights: "Tüm hakları saklıdır.",
    },
  },
  en: {
    nav: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    common: {
      learnMore: "Learn More",
      exploreProducts: "Explore Products",
      contactUs: "Contact",
      backHome: "Back to home",
      otherProducts: "Our other products",
      legalAndSupport: "Legal & Support",
      support: "Support",
      privacyPolicy: "Privacy Policy",
      termsOfUse: "Terms of Use",
      deleteAccount: "Delete Account",
      screenshots: "App Screenshots",
      demoVideo: "Watch the demo",
      replay: "Replay",
      desktopApp: "Windows Desktop App",
      requestDemo: "Request a Demo",
    },
    hero: {
      eyebrow: "Technology · Mobile & Web Apps",
      title: "Modern apps that simplify everyday life",
      subtitle:
        "Bugalgo builds privacy-first, user-centric mobile and web applications. Our products reach millions of users on the App Store and Google Play.",
    },
    products: {
      title: "Our Products",
      subtitle: "Apps we've built to bring real value to people across different domains.",
      acikeczane: {
        name: "AcikEczane",
        tag: "Healthcare",
        short:
          "Find on-duty pharmacies instantly and chat with them securely via end-to-end encryption.",
        long: "AcikEczane lists on-duty pharmacies across Turkey based on your location and lets you reach them via end-to-end encrypted messaging. Designed for anonymous, fast and secure healthcare communication.",
        features: [
          "Location-based on-duty pharmacy list",
          "End-to-end encrypted messaging",
          "Anonymous use — no signup required",
          "Pharmacy details, phone and directions",
          "Nationwide coverage in Turkey",
        ],
      },
      sinavkocu: {
        name: "Sinav Kocu",
        tag: "Education",
        short:
          "Smart pomodoro study tracker for YKS, LGS, KPSS, ALES, DGS exams with detailed statistics.",
        long: "Sinav Kocu is a smart pomodoro-based study tracker for exam candidates. It includes per-subject statistics, study plans and a motivating achievement system.",
        features: [
          "Smart pomodoro timer",
          "Per-subject study analytics",
          "Weekly and monthly study plans",
          "Achievement and goal system",
          "Supports YKS, LGS, KPSS, ALES, DGS",
        ],
      },
      lumnos: {
        name: "Lumnos",
        tag: "Education · Global",
        short:
          "Smart Pomodoro study tracker for exam candidates worldwide. Detailed statistics and 25 color themes.",
        long: "Lumnos is a smart pomodoro-based study tracker built for students worldwide. With 25 color themes, detailed analytics and an achievement system, it makes studying enjoyable.",
        features: [
          "Smart Pomodoro tracking",
          "Detailed study analytics",
          "Custom study plans",
          "Achievement system",
          "25 beautiful color themes",
        ],
      },
      opero: {
        name: "Opero",
        tag: "Business · Desktop",
        short:
          "An offline, KVKK-compliant desktop suite that unifies job, customer and vehicle operations for door manufacturing companies.",
        long: "Opero is a fully offline desktop operations suite built for door manufacturing companies. It brings job & customer tracking, field visits, vehicle management (documents, expenses, periodic inspections) and automated reminders together in one place. Your data stays on your device, secured by role-based access and a KVKK-compliant foundation.",
        features: [
          "Job & customer tracking — status pipeline, due dates and overdue alerts",
          "Field-visit planning and one-click work-order PDF export",
          "Vehicle management: documents, expenses and periodic inspections (inspection, insurance, road tax)",
          "Automated reminders — email, WhatsApp and SMS",
          "Role-based login (admin / user) and audit logging",
          "Offline operation, local data and timestamped backups",
          "KVKK compliant — your data never leaves the device",
        ],
      },
      evocafe: {
        name: "EvoCafe",
        tag: "Restaurant POS · Desktop",
        short:
          "An offline desktop POS that unifies orders, tables, inventory and accounts in one place for cafés and restaurants.",
        long: "EvoCafe is a fully offline desktop POS (point-of-sale) suite built for cafés and restaurants. It brings the table floor plan, fast order taking, bill splitting, inventory & recipe tracking, customer/supplier accounts, expense management and end-of-day (Z) reports together in one place. Staff sign in with a PIN under role-based permissions; your data stays on the device and is backed up automatically.",
        features: [
          "Table floor plan with live status — transfer, merge and per-table tabs",
          "Fast order taking with a category-based product grid",
          "Bill splitting (by item or equal) and cash / card / credit / comp payments",
          "Time-based products — per-minute/hour billing for PlayStation, billiards and table rentals",
          "Inventory & recipe tracking with automatic ingredient-based stock deduction",
          "Customer/supplier accounts, expense management and end-of-day Z-report",
          "PIN login with role-based access (admin / waiter)",
          "Offline operation, local data and automatic backups",
        ],
      },
    },
    values: {
      title: "Our Values",
      subtitle: "The principles behind every product we ship.",
      items: [
        {
          title: "Privacy First",
          desc: "We collect minimal user data and stay anonymous wherever possible.",
        },
        {
          title: "End-to-End Encryption",
          desc: "E2E encryption is standard in all our messaging-based products.",
        },
        {
          title: "KVKK Compliant",
          desc: "Operating from Turkey on a KVKK / GDPR-aligned infrastructure.",
        },
        {
          title: "User Centric",
          desc: "Clean UI, fast performance and features that actually matter day-to-day.",
        },
      ],
    },
    stats: {
      title: "Bugalgo by the numbers",
      items: [
        { value: "4+", label: "Live Apps" },
        { value: "E2E", label: "End-to-End Encryption" },
        { value: "KVKK", label: "Compliant Infrastructure" },
        { value: "iOS+Android", label: "App Store & Google Play" },
      ],
    },
    cta: {
      title: "Download our apps today",
      subtitle: "All our products are available on the App Store and Google Play.",
    },
    about: {
      title: "About Us",
      subtitle: "We aim to create value for society through technology.",
      paragraphs: [
        "Bugalgo is a technology venture building innovative mobile applications in healthcare and daily life.",
        "We put user privacy first, applying advanced security standards such as end-to-end encryption and anonymous usage in our products.",
        "We operate from Turkey and our products are available on the App Store and Google Play.",
      ],
    },
    contact: {
      title: "Get in touch",
      subtitle: "Reach out for questions or partnership opportunities.",
      name: "Your name",
      email: "Email",
      message: "Your message",
      send: "Send message",
      emailLabel: "Email",
      locationLabel: "Location",
      webLabel: "Web",
      location: "Istanbul, Türkiye",
    },
    footer: {
      tagline: "Modern, secure, user-centric apps.",
      products: "Products",
      company: "Company",
      rights: "All rights reserved.",
    },
  },
};

type DeepMutable<T> = { -readonly [K in keyof T]: T[K] extends object ? DeepMutable<T[K]> : T[K] };
export type Dict = DeepMutable<(typeof dictionaries)["tr"]>;
