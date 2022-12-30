const header = document.querySelector(".header__nav");

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1000) {
    header.classList.add('header__nav_color');
  } else {
    header.classList.remove('header__nav_color');
  }
});
