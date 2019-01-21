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
const areasMenuButton = pageHeader.querySelector('.js-header-menu__button');

pageHeader.classList.remove('no-js');
pageHeader.classList.add('is-hidden');

areasMenuButton.addEventListener('click', () => {
  pageHeader.classList.toggle('is-hidden');
});

const servicesBlockTemplate = document
  .querySelector('#services-template')
  .content.querySelector('.services');

const areasList = pageHeader.querySelector('.areas__list');
const areasItemJeeping = areasList.querySelector('.areas__item--jeeping');

areasItemJeeping.addEventListener('click', (evt) => {
  evt.preventDefault();

  const servicesItemJeeping = servicesBlockTemplate.cloneNode(true);

  const servicesList = servicesItemJeeping.querySelector('.services__list');
  const servicesHeading = servicesItemJeeping.querySelector(
    '.services__heading',
  );
  const servicesTitle = servicesItemJeeping.querySelector('.services__title');
  const servicesPrice = servicesItemJeeping.querySelector('.services__price');
  const areasListHeight = getComputedStyle(areasList).height;

  servicesList.style.minHeight = areasListHeight;
  servicesHeading.textContent = areasData[0];
  servicesTitle.textContent = servicesData[0][0];
  servicesPrice.textContent = servicesData[0][1];

  pageHeader.appendChild(servicesItemJeeping);
});

/*
const servicesScheduleElementTemplate = document
.querySelector('#service-schedule-template');
*/

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
