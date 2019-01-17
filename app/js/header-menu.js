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

const headerMenu = document.querySelector('.page-header__areas');
const areasItemContentElements = headerMenu.querySelectorAll('.areas__item-content');
const servicesElementTemplate = document.querySelector('#services-template').content.querySelector('.services');

for (let i = 0; i < areasItemContentElements.length; i++) {
  const servicesElement = servicesElementTemplate.cloneNode(true);
  const servicesElementHeadline = servicesElement.querySelector('.services__headline');
  servicesElementHeadline.textContent = 'Test';
  areasItemContentElements[i].appendChild(servicesElement);
}
