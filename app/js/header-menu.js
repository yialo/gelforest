'use strict';

// Adjust basic classes

const pageHeader = document.querySelector('.js-header-menu');
pageHeader.classList.remove('no-js');
pageHeader.classList.add('is-hidden');

// Main menu show/hide mechanics

const menuButton = pageHeader.querySelector('.js-header-menu__button');
const logo = pageHeader.querySelector('.logo');
const areasList = pageHeader.querySelector('.areas__list');
const areasLinks = areasList.querySelectorAll('.areas__link');
const areasNests = areasList.querySelectorAll('.areas__nest');
const servicesReturnLinks = areasList
  .querySelectorAll('.services__return-link');
const servicesLists = areasList.querySelectorAll('.services__list');

menuButton.addEventListener('click', () => {
  pageHeader.classList.toggle('is-hidden');

  for (let i = 0; i < areasNests.length; i += 1) {
    areasNests[i].classList.remove('is-shown');
  }
});

window.addEventListener('keydown', (menuButtonEvt) => {
  if (menuButtonEvt.keyCode === 27 && !pageHeader.classList.contains('is-hidden')) {
    pageHeader.classList.add('is-hidden');
  }
});

// Services menus show/hide mechanics

for (let i = 0; i < areasLinks.length; i += 1) {
  areasLinks[i].addEventListener('click', (areasLinkEvent) => {
    areasLinkEvent.preventDefault();

    const logoHeight = getComputedStyle(logo).height;
    areasNests[i].style.top = `calc(${logoHeight} * -1 - 2px)`;
    servicesLists[i].style.minHeight = getComputedStyle(areasList).height;
    areasNests[i].classList.add('is-shown');
  });
}

for (let i = 0; i < servicesReturnLinks.length; i += 1) {
  servicesReturnLinks[i].addEventListener('click', (servicesReturnEvent) => {
    servicesReturnEvent.preventDefault();
    areasNests[i].classList.remove('is-shown');
  });
}
