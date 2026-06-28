// Web3Forms public access key — https://web3forms.com üzerinden erdolu.yener@gmail.com ile
// ücretsiz alınır. İletişim formu gönderimleri bu key'e bağlı e-posta adresine iletilir.
// Key'in istemci tarafında (derlenmiş JS içinde) görünür olması Web3Forms tasarımı gereği
// normaldir; spam'e karşı Web3Forms panelinden hCaptcha/honeypot açılabilir.
export const WEB3FORMS_ACCESS_KEY = "bae08578-93fe-4d8f-83f6-e73b082c0f52";

// Sitede herkese açık gösterilecek iletişim e-postası. Kişisel adresi yayınlamamak için
// şimdilik null; null olduğunda iletişim sayfasındaki e-posta kartı gizlenir.
// (Form gönderimi e-posta kartından bağımsızdır; yukarıdaki access key üzerinden çalışır.)
export const SUPPORT_EMAIL: string | null = null;
