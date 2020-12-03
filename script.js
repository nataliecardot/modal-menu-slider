const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const nav = document.querySelector('nav');

// Toggle nav
toggle.addEventListener('click', () => {
  nav.classList.toggle('show-nav');
  nav.className === 'show-nav'
    ? (toggle.innerHTML = '<i class="fas fa-times fa-2x"></i>')
    : (toggle.innerHTML = '<i class="fas fa-bars fa-2x"></i>');
});
