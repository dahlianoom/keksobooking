import {
  getNumber,
  getCoordinates,
  getArray,
  checkCapacity
} from './util.js';

const TIME = ['12:00', '13:00', '14:00'];

const MIN_PRICE = {
  palace: 10000,
  house: 5000,
  flat: 1000,
  bungalow: 0,
};

const HOUSE_TYPES = {
  palace: 'Дворец',
  house: 'Дом',
  flat: 'Квартира',
  bungalow: 'Бунгало',
};

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const TITLES = ['Продам будку', 'Сниму гараж', 'Арендую студию'];

const DESCRIPTIONS = ['описание 1', 'описание 2', 'описание 3'];

const SIMILAR_OFFERS_COUNT = 10;

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
  this.capacity = checkCapacity(this.guests, this.rooms) ;
  this.checkin = TIME[getNumber(0, TIME.length - 1)];
  this.checkout = TIME[getNumber(0, TIME.length - 1)];
  this.time = `Заезд после ${this.checkin}, выезд после ${this.checkout}`;
  this.features = getArray(FEATURES);
  this.description = DESCRIPTIONS[getNumber(0, DESCRIPTIONS.length - 1)];
  this.photos = getArray(PHOTOS);
}

export function getOffersArray() {

  return new Array(SIMILAR_OFFERS_COUNT).fill({}).map(() => {

    const point = new Point();

    return {
      author: new Author(),
      point,
      offer: new Offer(point.x, point.y)
    }

  });
}

export {MIN_PRICE, HOUSE_TYPES};