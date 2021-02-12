'use strict'

export {TIME, FEATURES, TYPES, PHOTOS, TITLES, DESCRIPTIONS, SIMILIAR_OFFERS_COUNT};
export {Author, Point, Offer, getOffersArray};
import {checkIfCorrect, getNumber, getCoordinates, getArray} from './util.js';

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