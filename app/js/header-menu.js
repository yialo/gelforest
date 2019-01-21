'use strict';

const areasData = [
  'Джиппинг',
  'Яхты',
  'Парашют',
  'Дайвинг',
  'Квадроциклы',
  'Экскурсии',
];

const servicesData = [
  ['Тайны Геленджика', 1000],
  ['Грозовые ворота', 1200],
  ['Долина водопадов и горы Кавказа', 1600],
  ['Ночной Геленджик', 1000],
];

const pageHeader = document.querySelector('.js-header-menu');
const areasMenuButton = pageHeader.querySelector(
  '.js-header-menu__button',
);

pageHeader.classList.remove('no-js');
pageHeader.classList.add('is-hidden');

areasMenuButton.addEventListener('click', () => {
  pageHeader.classList.toggle('is-hidden');
});

// const servicesElementTemplate = document
//   .querySelector('#services-template')
//   .content.querySelector('.services');
// /*
// const servicesScheduleElementTemplate = document
// .querySelector('#service-schedule-template');
// */

// areasData.forEach((arrValue, arrIndex) => {
//   const servicesElement = servicesElementTemplate.cloneNode(true);
//   const servicesItemElements = servicesElement.querySelectorAll(
//     '.services__item',
//   );

//   servicesData.forEach((value, index) => {
//     const [title, price] = value;
//     servicesItemElements[index].querySelector('.services__title')
//       .textContent = title;
//     servicesItemElements[index].querySelector('.services__price')
//       .textContent = price;
//   });

//   // areasItemContentElements[arrIndex].appendChild(servicesElement);
// });
