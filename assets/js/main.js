// Demo date: update this value for each customer invitation.
const weddingDate = new Date('2026-12-12T18:30:00+05:30').getTime();

function updateCountdown() {
  const distance = weddingDate - Date.now();
  const values = {
    days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
    hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
    minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
    seconds: Math.max(0, Math.floor((distance / 1000) % 60))
  };

  Object.entries(values).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = String(value).padStart(2, '0');
  });
}

updateCountdown();
window.setInterval(updateCountdown, 1000);