import {
  getOffersArray,
  HOUSE_TYPES
} from './data.js';
import {
  getNumber
} from './util.js';

const fields = [
  'x',
  'y',
  'guests',
  'rooms',
  'checkin',
  'checkout',
];

const popup = document.querySelector('#card')
  .content
  .querySelector('.popup')
  .cloneNode(true);

const similarOfferList = document.querySelector('#map-canvas');
const similarOffers = getOffersArray();
const nodes = Array.from(popup.children);
const currentOffer = similarOffers[getNumber(0, 9)];

similarOfferList.appendChild(popup);
popup.classList.add('hidden');

function simplifyStructure(currentObject) {
  const {author, offer, point} = currentObject;

  currentObject = Object.assign({}, author, offer, point);
  fields.forEach(field => delete currentObject[field]);

  return currentObject;
}

function createCards(currentObject) {

  const card = simplifyStructure(currentObject)
  const keys = Object.keys(card);
  const classes = nodes.map(item => item.classList.value);

  classes.forEach((item, i) => {

    const key = keys.find(key => item.includes(key));
    const value = card[key];
    const node = nodes[i];

    if (!key || !value || value.length === 0) {
      node.classList.add('hidden');
    }

    if (!Array.isArray(value) && key !== 'avatar') {
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

    node.src = value;

  });

  popup.classList.remove('hidden');

}

function renderFeatures(features, featuresNode) {

  featuresNode.textContent = '';

  features.forEach((item) => {
    featuresNode.insertAdjacentHTML('beforeend',
      `<li class="popup__feature popup__feature--${item}"></li>`)
  });
}

function renderPhotos(photos, photosNode) {

  photosNode.textContent = '';

  photos.forEach((item) => {
    photosNode.insertAdjacentHTML('beforeend',
      `<img src=${item} class="popup__photo" width="45" height="40" alt="Фотография жилья">`)
  });
}

// createCards(currentOffer);
export { similarOffers };