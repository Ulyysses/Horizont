const quote = document.querySelector(".main__quote");

window.addEventListener('scroll', () => {
  if (window.scrollY >= 800) {
    quote.classList.add('main__quote_active');
  } else {
    quote.classList.remove('main__quote_active');
  }

  if (window.scrollY >= 200) {
    quote.classList.add('main__quote_mob');
  } else {
    quote.classList.remove('main__quote_mob');
  }

  if (window.scrollY >= 500) {
    quote.classList.add('main__quote_tab');
  } else {
    quote.classList.remove('main__quote_tab');
  }
});
