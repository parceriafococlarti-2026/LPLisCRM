// Navbar scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Hamburger
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileClose = document.getElementById('mobileClose');
  const setMobileMenuState = (isOpen) => {
    mobileMenu.classList.toggle('open', isOpen);
    hamburger.classList.toggle('is-active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    mobileMenu.setAttribute('aria-hidden', String(!isOpen));
    document.body.classList.toggle('menu-open', isOpen);
  };

  hamburger.addEventListener('click', () => {
    setMobileMenuState(!mobileMenu.classList.contains('open'));
  });

  mobileClose.addEventListener('click', () => setMobileMenuState(false));
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => setMobileMenuState(false));
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMobileMenuState(false);
    }
  });

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Fade-in on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
