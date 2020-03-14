import 'normalize.css';
import '../styles/index.scss';

// Navbar Scroll
window.addEventListener('scroll', () => {
  const scrollTop = Math.round(window.scrollY);
  const topnav = document.querySelector('.topnav');
  if (scrollTop > 49) {
    topnav.classList.add('topnav-fixed');
  } else {
    topnav.classList.remove('topnav-fixed');
  }
});
