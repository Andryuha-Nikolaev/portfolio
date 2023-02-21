import './index.html';
import './scss/index.scss';
import gsap from './libs/gsap/gsap.min.js';
import ScrollTrigger from './libs/gsap/ScrollTrigger.min.js';
import ScrollSmoother from './libs/gsap/ScrollSmoother.min.js';

// parallax
document.addEventListener('scroll', () => {
  document.body.style.setProperty('--scrollTop', `${window.scrollY}px`);
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});

// window.addEventListener('scroll', function () {
//   console.log('suc');
// });

// const items = [
//   {
//     image: 'https://mywebicons.ru/i/jpg/28c31e555b3642d94da68bbbb22ed497.jpg',
//     title: 'Вопрос 1',
//     description:
//       'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
//     price: '82 000',
//   },
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
//     title: 'Вопрос 2',
//     description:
//       'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
//     price: '126 000',
//   },
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
//     title: 'Вопрос 3',
//     description:
//       'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
//     price: '145 000',
//   },
//   {
//     image: 'https://mywebicons.ru/i/jpg/28c31e555b3642d94da68bbbb22ed497.jpg',
//     title: 'Вопрос 4',
//     description:
//       'Это популярная серия программируемых робототехнических конструкторов компании Robotis. Серия представлена разнообразными универсальными наборами, которые подойдут как начинающим робототехникам, так и специалистам, работающим над решением актуальных робототехнических задач. Также в наборе есть пульт для управления роботом и набор пластиковых элементов для придания уникального вида собранным моделям.',
//     price: '82 000',
//   },
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail.jpg',
//     title: 'Вопрос 5',
//     description:
//       'BIOLOID Premium kit – набор для создания различных шагающих роботов на основе моторов Dynamixel и контроллера СМ-530, для образования, игр и соревнований.',
//     price: '126 000',
//   },
//   {
//     image: 'https://code.s3.yandex.net/web-code/oop/card_detail2.png',
//     title: 'Вопрос 6',
//     description:
//       'Модель позволяет использовать при движении и педали и электрическую тягу, а также их сочетание. Съемный аккумулятор легко заменяется во время поездки, позволяя тем самым существенно увеличивать ее продолжительность.',
//     price: '145 000',
//   },
// ];

// const cardList = document.querySelector('.elements__list');
// const popupElement = document.querySelector('.popup');
// const popupImage = document.querySelector('.popup__image');
// const popupCloseButton = document.querySelector('.popup__close');
// const defaultCardButton = document.querySelector('.filter__button_type_grid');
// const altCardButton = document.querySelector('.filter__button_type_column');

// defaultCardButton.addEventListener('click', () => {
//   renderElements(false);
//   defaultCardButton.classList.add('active');
// });

// altCardButton.addEventListener('click', () => {
//   renderElements(true);
// });

// class Card {
//   constructor(templateSelector) {
//     this._templateSelector = templateSelector;
//   }

//   //   Чтобы получить нужную разметку, добавьте классу Card метод _getTemplate, который:
//   // найдёт template-элемент с классом horizontal-card,
//   // извлечёт его содержимое,
//   // в содержимом найдёт элемент с классом card,
//   // клонирует его,
//   // вернёт клонированный элемент.
//   _getTemplate() {
//     const cardElement = document
//       .querySelector(this._templateSelector)
//       .content.querySelector('.elements__list-item')
//       .cloneNode(true);

//     // вернём DOM-элемент карточки
//     return cardElement;
//   }

//   _setEventListeners() {
//     this._element.addEventListener('click', () => {
//       this._handleOpenPopup();
//     });
//     popupCloseButton.addEventListener('click', () => {
//       this._handleClosePopup();
//     });
//   }

//   _handleClosePopup() {
//     popupImage.src = '';
//     popupElement.classList.remove('popup_is-opened');
//   }

//   _handleOpenPopup() {
//     popupImage.src = this._image;
//     popupElement.classList.add('popup_is-opened');
//   }
// }

// class DefaultCard extends Card {
//   constructor(data, templateSelector) {
//     super(templateSelector);
//     this._title = data.title;
//     this._image = data.image;
//     this._description = data.description;
//   }
//   generateCard() {
//     this._element = super._getTemplate();
//     super._setEventListeners(); //метод создаст карточки уже с обработчиком событий

//     this._cardImage = this._element.querySelector('.elements__image'); //изображение карточки
//     this._cardText = this._element.querySelector('.elements__title'); //описание карточки
//     this._cardImage.src = this._image;
//     this._cardImage.alt = this._title;
//     this._cardText.textContent = this._title;

//     return this._element;
//   }
// }

// class AltCard extends Card {
//   constructor(data, templateSelector) {
//     super(templateSelector);
//     this._title = data.title;
//     this._image = data.image;
//     this._description = data.description;
//   }
//   generateCard() {
//     this._element = super._getTemplate();
//     super._setEventListeners(); //метод создаст карточки уже с обработчиком событий

//     this._cardImage = this._element.querySelector('.elements__image'); //изображение карточки
//     this._cardText = this._element.querySelector('.elements__title'); //описание карточки
//     this._cardImage.src = this._image;
//     this._cardImage.alt = this._title;
//     this._cardText.textContent = this._title;

//     return this._element;
//   }
// }

// const renderElements = (isAlt) => {
//   cardList.innerHTML = '';
//   if (isAlt) {
//     console.log(isAlt);
//     cardList.classList.add('elements__alt');
//   } else {
//     cardList.classList.remove('elements__alt');
//   }

//   let randomItem = items[Math.floor(Math.random() * items.length)];
//   console.log(randomItem);

//   items.forEach((item) => {
//     // если isGrid === true создавайте DefaultCard
//     //  иначе HorizontalCard
//     const card = isAlt
//       ? new AltCard(item, '#template-alternative')
//       : new DefaultCard(item, '#template-default');

//     const cardElement = card.generateCard();
//     cardList.append(cardElement);
//   });
// };

// renderElements();
