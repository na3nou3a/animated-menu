const menu = document.querySelector('.nav');
const menuBtn = document.querySelector('.menu-btn');
const menuLinks = document.querySelectorAll('.nav-link');
// ===================== EVENTS =====================
menuBtn.addEventListener('click', () => {
  menu.classList.toggle('expanded');
});
menuLinks.forEach((link) => {
  const linkText = link.textContent;
  link.textContent = '';
  linkText.split('').forEach((letter) => {
    const span = document.createElement('span');
    span.className = 'letter';
    span.textContent = letter;
    link.appendChild(span);
  });
});
// =================== FUNCTIONS ====================
