import './index.html';
import './scss/index.scss';
import gsap from './libs/gsap/gsap.min.js';
import ScrollTrigger from './libs/gsap/ScrollTrigger.min.js';
import ScrollSmoother from './libs/gsap/ScrollSmoother.min.js';

// parallax;
document.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});
