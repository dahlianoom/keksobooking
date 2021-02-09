'use strict'

const TIME = ['12:00', '13:00', '14:00'];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const TITLES = ['Продам будку', 'Сниму гараж', 'Арендую студию'];

const DESCRIPTIONS = ['описание 1', 'описание 2', 'описание 3'];

const SIMILIAR_OFFERS_COUNT = 10;

function checkIfCorrect(min, max) { //проверка ввода
  min = +min;
  max = +max;

  if (isNaN(min) === true || isNaN(max) === true) {
    alert('Введите числовое значение');
  }
  if (min < 0) {
    alert('Число не может быть отрицательным');
  }
  if (max <= min) {
    alert('Введите корректный диапазон');
  }

  return true;
}

function getNumber(min, max) { //получить случайное положительное число в заданном диапазоне

  if (checkIfCorrect(min, max) === true) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getCoordinates(min, max, digits) { //получить случайное положительное число в заданном диапазоне с плавающей точкой

  if (checkIfCorrect(min, max) === true) {

    let result = Math.random() * (max - min) + min;

    return result.toFixed(digits);
  }
}

function getArray(array) { //получить новый массив случайной длины
  return array.slice(getNumber(0, array.length - 1));
}

function Author() {
  this.avatar = `img/avatars/user0${getNumber(1,8)}.png`;
}

function Point() {
  this.x = getCoordinates(35.65, 35.7, 5);
  this.y = getCoordinates(139.7, 139.8, 5);
}

function Offer(x, y) {
  this.title = TITLES[getNumber(0, TITLES.length - 1)];
  this.address = `${x}, ${y}`;
  this.price = getNumber(1000, 2000);
  this.type = TYPES[getNumber(0, TYPES.length - 1)];
  this.rooms = getNumber(1, 5);
  this.guests = getNumber(1, 10);
  this.checkin = TIME[getNumber(0, TIME.length - 1)];
  this.checkout = TIME[getNumber(0, TIME.length - 1)];
  this.features = getArray(FEATURES);
  this.description = DESCRIPTIONS[getNumber(0, DESCRIPTIONS.length - 1)];
  this.photos = getArray(PHOTOS);
}

const getOffersArray = new Array(SIMILIAR_OFFERS_COUNT).fill({}).map(() => { //генерация массива объектов

  const point = new Point();

  return {
    author: new Author(),
    point,
    offer: new Offer(point.x, point.y)
  }

});

console.log(getOffersArray);
