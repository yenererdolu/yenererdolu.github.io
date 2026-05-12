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
        { value: "3+", label: "Yayında Uygulama" },
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
        { value: "3+", label: "Live Apps" },
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
