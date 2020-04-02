import "normalize.css";
import "../styles/index.scss";

const pageWrapper = document.querySelector(".ms-core-overlay");
const topnav = document.querySelector(".topnav");
const topnavHeight = topnav.offsetHeight;

pageWrapper.addEventListener("scroll", () => {
  const scrollTop = Math.round(pageWrapper.scrollTop);
  if (scrollTop > topnavHeight) {
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

  pageWrapper.onscroll = () => {
    const scrollTop = Math.round(pageWrapper.scrollTop + topnavHeight);
    Object.values(sections).forEach(({ offsetTop, id }) => {
      if (offsetTop <= scrollTop) {
        document.querySelector(".active").classList.remove("active");
        document.querySelector(`a[href*=${id}]`).classList.add("active");
      }
    });
  };
};

makeNavLinksSmooth();
spyScrolling();

// Modal
const modalTriggers = document.querySelectorAll(`[data-modal-for]`);

Object.values(modalTriggers).forEach(trigger => {
  const modal = document.getElementById(trigger.dataset.modalFor);
  trigger.addEventListener("click", () => {
    if (trigger.hasAttribute("open")) {
      modal.showModal();
      document.querySelector("#page-wrap").classList.add("scroll-lock");
    }

    if (trigger.hasAttribute("close")) {
      modal.close();
      document.querySelector("#page-wrap").classList.remove("scroll-lock");
    }
  });
});
