import "normalize.css";
import "../styles/index.scss";

// Navbar Scroll
window.addEventListener("scroll", () => {
  const scrollTop = Math.round(window.scrollY);
  const topnav = document.querySelector(".topnav");
  if (scrollTop > 49) {
    topnav.classList.add("topnav-fixed");
  } else {
    topnav.classList.remove("topnav-fixed");
  }
});

const makeNavLinksSmooth = () => {
  const navLinks = document.querySelectorAll(".scoll-link");
  Object.values(navLinks).forEach(item => {
    item.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(item.hash).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
};

const spyScrolling = () => {
  const sections = document.querySelectorAll(".page-section");

  window.onscroll = () => {
    const scrollPos =
      document.documentElement.scrollTop || document.body.scrollTop;
    Object.values(sections).forEach(({ offsetTop, id }) => {
      if (offsetTop <= scrollPos) {
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`a[href*=${id}]`).classList.add("active");
      }
    });
  };
};

makeNavLinksSmooth();
spyScrolling();

let intervalId = 0; // Needed to cancel the scrolling when we're at the top of the page

document.querySelector(".scroll").addEventListener("click", () => {
  intervalId = setInterval(() => {
    if (window.pageYOffset === 0) {
      clearInterval(intervalId);
    }
    window.scroll(0, window.pageYOffset - 50);
  }, 16.66);
});

// Modal
const modalTriggers = document.querySelectorAll(`[data-modal-for]`);

Object.values(modalTriggers).forEach(trigger => {
  const modal = document.getElementById(trigger.dataset.modalFor);
  trigger.addEventListener("click", () => {
    if (trigger.hasAttribute("open")) {
      modal.showModal();
      document.querySelector("body").classList.add("scroll-lock");
    }

    if (trigger.hasAttribute("close")) {
      modal.close();
      document.querySelector("body").classList.remove("scroll-lock");
    }
  });
});
