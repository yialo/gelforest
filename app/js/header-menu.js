'use strict';

// Adjust basic classes

document.body.classList.remove('no-js');
const pageHeader = document.querySelector('.page-header');
const areas = pageHeader.querySelector('.areas');
areas.style.visibility = 'hidden';
pageHeader.classList.add('is-hidden');

// Main menu show/hide mechanics

const menuButton = pageHeader.querySelector('.menu-buttons__item');
const areasList = areas.querySelector('.areas__list');
const areasLinks = areasList.querySelectorAll('.areas__link');
const areasNests = areasList.querySelectorAll('.areas__nest');
const servicesReturnLinks = areasList
  .querySelectorAll('.services__return-link');
const servicesLists = areasList.querySelectorAll('.services__list');
const servicesLinks = areasList.querySelectorAll('.services__link');
const servicesNests = areasList.querySelectorAll('.services__nest');
const servicesScheduleLists = areasList
  .querySelectorAll('.service-schedule__list');
const servicesScheduleReturnLinks = areasList
  .querySelectorAll('.service-schedule__return-link');

menuButton.addEventListener('click', () => {
  areas.style.visibility = 'visible';

  if (pageHeader.classList.contains('is-hidden')) {
    for (let i = 0; i < areasNests.length; i += 1) {
      if (areasNests[i].classList.contains('is-shown')) {
        areasNests[i].classList.remove('is-shown');
      }
    }

    for (let i = 0; i < servicesNests.length; i += 1) {
      if (servicesNests[i].classList.contains('is-shown')) {
        servicesNests[i].classList.remove('is-shown');
      }
    }

    pageHeader.classList.remove('is-hidden');
  } else {
    pageHeader.classList.add('is-hidden');
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

    areasNests[i].style.top = '-45px';
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

// Services schedule menus show/hide mechanics

for (let i = 0; i < servicesLinks.length; i += 1) {
  servicesLinks[i].addEventListener('click', (servicesLinkEvent) => {
    servicesLinkEvent.preventDefault();

    servicesScheduleLists[i].style.minHeight = getComputedStyle(areasList)
      .height;
    servicesNests[i].classList.add('is-shown');
  });
}

for (let i = 0; i < servicesScheduleReturnLinks.length; i += 1) {
  servicesScheduleReturnLinks[i].addEventListener(
    'click', (servicesScheduleReturnEvent) => {
      servicesScheduleReturnEvent.preventDefault();

      servicesNests[i].classList.remove('is-shown');
    },
  );
}
