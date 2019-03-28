var nav = document.getElementById('navbar')
nav.addEventListener('click', function() {

  nav.classList.toggle('is-open');
  document.querySelector('.menu').classList.toggle('menu--hidden');
});