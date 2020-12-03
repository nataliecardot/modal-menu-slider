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

// Show modal (sign up button has id of open)
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click (entire area outside modal that appears is div with class .modal-container and id #modal)
window.addEventListener(
  'click',
  (e) => e.target == modal && modal.classList.remove('show-modal')
);

console.log(event.target);
