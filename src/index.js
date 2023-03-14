import './index.html';
import './scss/index.scss';
import gsap from './libs/gsap/gsap.min.js';
import ScrollTrigger from './libs/gsap/ScrollTrigger.min.js';
import ScrollSmoother from './libs/gsap/ScrollSmoother.min.js';

// кнопка описание
const imgComtainer = document.querySelector('.card__img-container');
const buttonDescription = document.querySelector('.card__link');
const cardImg = document.querySelector('.card__img');
const cardImgHover = document.querySelector('.card__img_hover');
const cardReverse = document.querySelector('.card__reverse');

function addClass() {
  imgComtainer.classList.add('card__cont');
}

function removeClass() {
  imgComtainer.classList.remove('card__cont');
}

buttonDescription.addEventListener('click', () => {
  cardImg.classList.toggle('card__img_hidden');
  cardReverse.classList.toggle('card__reverse_active');
  cardImgHover.classList.toggle('card__img_hover-hidden');
  // setTimeout(DisplaySuccess, 3000);
  // imgComtainer.classList.toggle('card__cont');
  // setTimeout(cardImgHover.classList.toggle('card__img_hover-hidden'), 3000);
  if (cardReverse.classList.contains('card__reverse_active')) {
    buttonDescription.textContent = 'Превью';
    setTimeout(removeClass, 0);
    // imgComtainer.removeClass('hover');
    // imgComtainer.classList.remove('card__cont');
  } else {
    buttonDescription.textContent = 'Описание';
    setTimeout(addClass, 800);
    // setTimeout(imgComtainer.classList.add('card__cont'), 69000);
  }
});

// parallax;
document.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});
