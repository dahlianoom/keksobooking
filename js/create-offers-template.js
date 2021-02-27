import {
  getOffersArray
} from './data.js';

const HOUSE_TYPES = {
  palace: 'Дворец',
  house: 'Дом',
  flat:'Квартира',
  bungalow: 'Бунгало',
};

const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarOfferList = document.querySelector('#map-canvas');

let similarOffers = getOffersArray();

const nodes = Array.from(similarOfferTemplate.children); // массив узлов вместе с классами темплейта
const {author, offer, point} = similarOffers[1]; //деструктуризация первого элемента массива с моками
const testObj = Object.assign({}, author, offer, point); //объединение в один объект из трех
const keys = Object.keys(testObj); // ключи объектов из моков
const classes = nodes.map(item => item.classList.value); //массив классов темплейта

console.log(testObj);

function createTemplates(obj) {

  classes.forEach((item, i) => {  //для каждого элемента из массива классов темплейта

    const key = keys.find(key => item.includes(key)); // создать переменную ключ = найти ключ в массиве классов, то есть вторую половину класса
    const value = obj[key]; // создать переменную значение = взять ключ из передаваемого объекта с моками
    const node = nodes[i]; // создать переменную узел =  взять значение из массива узлов по индексу

    // console.log(key);

    if (!key || !value|| value.length === 0) {
      node.classList.add('display-none');
    }

    if (!Array.isArray(value)) {
      node.textContent = value;
    }
    
    if (key === 'features') {
      renderFeatures(value, node);
    }

    if (key === 'photos') {
      renderPhotos(value, node);
    }

    if (key === 'type') {
      node.textContent = HOUSE_TYPES[value];
    }

    // let frag = document.createDocumentFragment(); ??????
    // similarOfferList.appendChild(frag);

  });

}

createTemplates(testObj);

function renderFeatures(features, featuresNode) {
  features.forEach((item) => {
    featuresNode.insertAdjacentHTML('afterbegin',
      `<li class="popup__feature popup__feature--${item}"></li>`)
  });
}

function renderPhotos(photos, photosNode) {
  photos.forEach((item) => {
    photosNode.insertAdjacentHTML('afterbegin',
      `<img src=${item} class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`)
  });
}
