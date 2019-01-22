'use strict';

const pageHeader = document.querySelector('.js-header-menu');
pageHeader.classList.remove('no-js');
pageHeader.classList.add('is-hidden');

const areasMenuButton = pageHeader.querySelector('.js-header-menu__button');
areasMenuButton.addEventListener('click', () => {
  pageHeader.classList.toggle('is-hidden');
});
window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27 && !pageHeader.classList.contains('is-hidden')) {
    pageHeader.classList.add('is-hidden');
  }
});

const pageHeaderLogo = pageHeader.querySelector('.page-header__logo');
const areas = pageHeader.querySelector('.js-header-menu__container');
const areasNest = areas.querySelector('.areas__nest');
const pageHeaderLogoStyles = getComputedStyle(pageHeaderLogo);
const pageHeaderLogoHeight = pageHeaderLogoStyles.height;
const pageHeaderLogoMarginBottom  = pageHeaderLogoStyles.marginBottom;
areasNest.style.top = `calc(${pageHeaderLogoHeight} * -1 - ${pageHeaderLogoMarginBottom})`;

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

const servicesBlockTemplate = document
  .querySelector('#services-template')
  .content.querySelector('.services');

const areasList = areas.querySelector('.areas__list');
const areasItems = areasList.querySelectorAll('.areas__item');

// Обработка кликов по пунктам главного меню

const areasLinkClick = function areasLinkClickHandler(areasItemNumber) {
  areasItems[areasItemNumber].addEventListener('click', (evt) => {
    evt.preventDefault();
    const services = servicesBlockTemplate.cloneNode(true);
    const servicesReturnLink = services.querySelector('.services__return-link');
    const servicesHeading = servicesReturnLink.querySelector(
      '.services__heading',
    );
    servicesHeading.textContent = areasData[areasItemNumber];

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

    areasNest.appendChild(services);

    servicesReturnLink.addEventListener('click', (evt) => {
      evt.preventDefault();
      areasNest.removeChild(services);
    });
  });
};

for (let i = 0; i < areasItems.length; i += 1) {
  areasLinkClick(i);
}
