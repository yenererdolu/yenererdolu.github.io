/* ===== BUGALGO — Shared Header/Footer + Mobile Menu ===== */

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;

  // ---- HEADER ----
  const headerEl = document.getElementById('site-header');
  if (headerEl) {
    const navLinks = [
      { href: '/', label: 'Ana Sayfa' },
      { href: '/products/', label: 'Urunlerimiz' },
      { href: '/#hakkimizda', label: 'Hakkimizda' },
      { href: '/#iletisim', label: 'Iletisim' },
    ];

    const linksHTML = navLinks
      .map(l => {
        const isActive = l.href === '/'
          ? path === '/' || path === '/index.html'
          : path.startsWith(l.href.replace('#', ''));
        return `<a href="${l.href}"${isActive ? ' class="active"' : ''}>${l.label}</a>`;
      })
      .join('');

    headerEl.innerHTML = `
      <div class="container" style="display:flex;align-items:center;justify-content:space-between;height:100%">
        <a href="/" class="site-header__logo">Bugalgo</a>
        <button class="hamburger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="site-header__nav">${linksHTML}</nav>
      </div>`;

    // Mobile menu toggle
    const burger = headerEl.querySelector('.hamburger');
    const nav = headerEl.querySelector('.site-header__nav');
    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = burger.classList.toggle('open');
        nav.classList.toggle('open');
        burger.setAttribute('aria-expanded', open);
      });
      // Close on nav link click
      nav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          burger.classList.remove('open');
          nav.classList.remove('open');
          burger.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  // ---- FOOTER ----
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    const year = new Date().getFullYear();
    footerEl.innerHTML = `
      <div class="container">
        <div class="site-footer__brand">Bugalgo</div>
        <div class="site-footer__links">
          <a href="/">Ana Sayfa</a>
          <a href="/products/">Urunler</a>
          <a href="/products/acikeczane/privacy/">Gizlilik</a>
          <a href="/products/acikeczane/terms/">Kullanim Sozlesmesi</a>
          <a href="/products/acikeczane/support/">Destek</a>
        </div>
        <div class="site-footer__copy">&copy; ${year} Bugalgo. Tum haklari saklidir.</div>
      </div>`;
  }
});
