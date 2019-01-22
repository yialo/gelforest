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
const areasItems = areasList.querySelectorAll('.areas__item');

const areasLinkClick = function areasLinkClickHandler(areasElement) {
  areasElement.addEventListener('click', (evt) => {
    evt.preventDefault();
    const services = servicesBlockTemplate.cloneNode(true);
    const servicesHeading = services.querySelector(
      '.services__heading',
    );
    servicesHeading.textContent = areasData[0];

    const servicesList = services.querySelector('.services__list');
    const areasListHeight = getComputedStyle(areasList).height;
    servicesList.style.minHeight = areasListHeight;
    const servicesItems = servicesList.querySelectorAll('.services__item');

    for (let i = 0; i < servicesItems.length; i += 1) {
      const servicesTitle = servicesItems[i].querySelector('.services__title');
      const servicesPrice = servicesItems[i].querySelector('.services__price');
      servicesTitle.textContent = servicesData[i][0];
      servicesPrice.textContent = servicesData[i][1];
    }

    pageHeader.appendChild(services);
  });
};

for (let i = 0; i < areasItems.length; i += 1) {
  areasLinkClick(areasItems[i]);
}
