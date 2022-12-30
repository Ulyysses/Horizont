const header = document.querySelector(".header");

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1000) {
    header.classList.add('header_color');
  } else {
    header.classList.remove('header_color');
  }
});
