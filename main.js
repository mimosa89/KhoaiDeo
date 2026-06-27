/* Petals */
function initPetals() {
  const canvas = document.getElementById('petals');
  if (!canvas) return;
  const colors = ['#D4C4F0','#E8D8F8','#C4B0E8','#F0EBF8','#B89ED8'];
  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    const size = 10 + Math.random() * 10;
    p.style.cssText = `left:${Math.random()*100}%;width:${size}px;height:${size*1.3}px;background:${colors[i%colors.length]};animation-duration:${9+Math.random()*12}s;animation-delay:${-Math.random()*15}s;transform:rotate(${Math.random()*360}deg)`;
    canvas.appendChild(p);
  }
}

/* Nav toggle mobile */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) toggle.addEventListener('click', () => links.classList.toggle('open'));

  /* Active link highlight on scroll */
  const sections = document.querySelectorAll('[data-section]');
  const navLinks = document.querySelectorAll('.nav-links a[data-nav]');
  if (!sections.length || !navLinks.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(`.nav-links a[data-nav="${e.target.dataset.section}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.35 });
  sections.forEach(s => obs.observe(s));
}

/* Fade in on scroll */
function initFade() {
  const els = document.querySelectorAll('.novel-card, .about-grid, .hero-inner, .chapter-item, .rules-box');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    obs.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initNav();
  initFade();
});
