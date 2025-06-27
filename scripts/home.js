const menuBtn = document.querySelector('.nav-link-menu');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', (e) => {
  e.preventDefault();
  nav.classList.toggle('open');
});



