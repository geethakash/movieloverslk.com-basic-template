const navbar = document.querySelector('.navbar');

document.addEventListener('scroll', () => {
  if (window.scrollY > 5) {
    let classesToAdd = ['bg-slate-900', 'backdrop-blur-xl'];
    navbar.classList.remove('lg:py-10');
    navbar.classList.add(...classesToAdd);
  } else {
    let classesToRemove = ['bg-slate-900', 'backdrop-blur-xl'];
    navbar.classList.remove(...classesToRemove);
    navbar.classList.add('lg:py-10');
  }
});
