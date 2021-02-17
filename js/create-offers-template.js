import {
  getOffersArray
} from './data.js';

const similarOfferTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarOfferList = document.querySelector('#map-canvas');

let similarOffers = getOffersArray();

similarOffers.forEach((deal) => {
  let offerElement = similarOfferTemplate.cloneNode(true);

  offerElement.querySelector('.popup__title').textContent = deal.offer.title;
  offerElement.querySelector('.popup__avatar').src = deal.author.avatar;
  offerElement.querySelector('.popup__text--address').textContent = deal.offer.address;
  offerElement.querySelector('.popup__text--price').textContent = `${deal.offer.price} ₽/ночь`;
  offerElement.querySelector('.popup__text--time').textContent = `Заезд после ${deal.offer.checkin}, выезд после ${deal.offer.checkout}`;
  offerElement.querySelector('.popup__description').textContent = deal.offer.description;
  offerElement.querySelector('.popup__type').textContent = checkType(deal.offer.type);
  offerElement.querySelector('.popup__features').textContent = deal.offer.features;
  offerElement.querySelector('.popup__text--capacity').textContent = checkCapacity(deal.offer.guests, deal.offer.rooms);

  let photoElement = offerElement.querySelector('.popup__photos');
  insertImages(deal.offer.photos, photoElement);

  similarOfferList.appendChild(offerElement);
});

function insertImages(photos, photoElement) {
  photos.forEach((item) => {
    photoElement.insertAdjacentHTML('afterend',
      `<img src=${item} class="popup__photo" width="45" height="40" alt="Фотография жилья"></img>`)
  });
}

function checkCapacity(guests, rooms) {
  let str = '';

    if (rooms === 1) str = `${rooms} комната для `;
    else if (rooms > 1 && rooms < 5) str = `${rooms} комнаты для `;
    else str = `${rooms} комнат для `;

    if (guests === 1) return str + `${guests} гостя`;
    else return str + `${guests} гостей`;
}

function checkType(type) {

  switch (type) {
    case 'palace':
      return 'Дворец';
      break;
    case 'house':
      return 'Дом';
      break;
    case 'flat':
      return 'Квартира';
      break;
    case 'bungalow':
      return 'Бунгало';
      break;
  }

}