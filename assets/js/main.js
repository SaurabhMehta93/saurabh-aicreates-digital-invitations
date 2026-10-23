// Demo date: replace this value with each customer's wedding date and local time.
const weddingDate = new Date('2026-12-12T18:30:00+05:30').getTime();

function updateCountdown() {
  const distance = weddingDate - Date.now();
  const values = {
    days: Math.max(0, Math.floor(distance / 86400000)),
    hours: Math.max(0, Math.floor((distance / 3600000) % 24)),
    minutes: Math.max(0, Math.floor((distance / 60000) % 60)),
    seconds: Math.max(0, Math.floor((distance / 1000) % 60))
  };
  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = String(value).padStart(2, '0');
  });
}

function setupScrollReveals() {
  const sections = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    sections.forEach(section => section.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  sections.forEach(section => observer.observe(section));
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
setupScrollReveals();