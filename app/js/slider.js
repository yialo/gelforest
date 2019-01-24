'use strict';

const slider = document.querySelector('.interesting');
const sliderList = slider.querySelector('.interesting__list');

const sliderButtonPrevious = slider
  .querySelector('.interesting__button--previous');
const sliderButtonNext = slider
  .querySelector('.interesting__button--next');

sliderButtonPrevious.addEventListener('click', () => {
  sliderList.classList.remove('slider-auto');

  if (sliderList.classList.contains('js-slide--1')) {
    sliderList.classList.remove('js-slide--1');
    sliderList.classList.add('js-slide--3');
  } else if (sliderList.classList.contains('js-slide--2')) {
    sliderList.classList.remove('js-slide--2');
    sliderList.classList.add('js-slide--1');
  } else if (sliderList.classList.contains('js-slide--3')) {
    sliderList.classList.remove('js-slide--3');
    sliderList.classList.add('js-slide--2');
  }
});

sliderButtonNext.addEventListener('click', () => {
  sliderList.classList.remove('slider-auto');

  if (sliderList.classList.contains('js-slide--1')) {
    sliderList.classList.remove('js-slide--1');
    sliderList.classList.add('js-slide--2');
  } else if (sliderList.classList.contains('js-slide--2')) {
    sliderList.classList.remove('js-slide--2');
    sliderList.classList.add('js-slide--3');
  } else if (sliderList.classList.contains('js-slide--3')) {
    sliderList.classList.remove('js-slide--3');
    sliderList.classList.add('js-slide--1');
  }
});
