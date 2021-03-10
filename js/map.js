import {
  similarOffers
} from './create-cards.js';

const TOKYO_LONGITUDE = 139.74543;
const TOKYO_LATITUDE = 35.65858;
const DIGITS = 5;
const MAIN_PIN_SIZE = 52;
const PIN_SIZE = 40;

const form = document.querySelector('.ad-form');
const formFields = Array.from(form.children);
const mapFilters = document.querySelector('.map__filters');
const mapFiltersFields = Array.from(mapFilters.children);

let state = 0; // 0 - неактивное состояние, 1 - активное состояние

function checkState(state) {

  if (state === 0) {
    getUnactiveWindow();
  } else if (state === 1) {
    getActiveWindow();
  }

}

function getActiveWindow() {

  console.log('актив');
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  formFields.forEach(item => {
    item.disabled = false;
  });

  mapFiltersFields.forEach(item => {
    item.disabled = false;
  });
}

function getUnactiveWindow() {

  console.log('неактив');
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  formFields.forEach(item => {
    item.disabled = true;
  });

  mapFiltersFields.forEach(item => {
    item.disabled = true;
  });
}

checkState(state);

const map = L.map('map-canvas')
  .on('load', () => {
    console.log('карта');
    state = 1;
    checkState(state);
  })
  .setView({
    lat: TOKYO_LATITUDE,
    lng: TOKYO_LONGITUDE,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [MAIN_PIN_SIZE, MAIN_PIN_SIZE],
  iconAnchor: [MAIN_PIN_SIZE / 2, MAIN_PIN_SIZE],
});

const mainPinMarker = L.marker({
  lat: TOKYO_LATITUDE,
  lng: TOKYO_LONGITUDE,
}, {
  draggable: true,
  icon: mainPinIcon,
}, );

mainPinMarker.addTo(map);

const addressInput = document.querySelector('#address');
addressInput.value = `${TOKYO_LATITUDE}, ${TOKYO_LONGITUDE}`;

mainPinMarker.on('move', (evt) => {
  const coordinates = evt.target.getLatLng();
  addressInput.value = `${coordinates.lat.toFixed(DIGITS)}, ${coordinates.lng.toFixed(DIGITS)}`;
});


function createBaloon(offer, point) {
  return `<section class="balloon">
  <h3 class="balloon__title">${offer.title}</h3>
  <p class="balloon__lat-lng">Координаты: ${point.x}, ${point.y}</p>
</section>`
}

similarOffers.forEach((item) => {

  const {
    offer,
    point,
  } = item;

  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [PIN_SIZE, PIN_SIZE],
    iconAnchor: [PIN_SIZE / 2, PIN_SIZE],
  });

  const marker = L.marker({
    lat: point.x,
    lng: point.y,
  }, {
    icon,
  }, );

  marker.addTo(map)
    .bindPopup(
      createBaloon(offer, point), {
        keepInView: true,
      },
    );
});
