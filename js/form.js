import {MIN_PRICE} from './data.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');
const titleInput = document.querySelector('#title');
const roomsSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

typeSelect.addEventListener('change', (evt) => {

  const minPrice = MIN_PRICE[evt.target.value];

  priceInput.placeholder = minPrice;
  priceInput.min = minPrice;
});

timeinSelect.addEventListener('change', (evt) => {
  timeoutSelect.value = evt.target.value;
});

timeoutSelect.addEventListener('change', (evt) => {
  timeinSelect.value = evt.target.value;
});

titleInput.addEventListener('input', (evt) => {

  const valueLength = evt.target.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();

});

priceInput.addEventListener('input', (evt) => {

  const value = evt.target.value;

  if (value > MAX_PRICE) {
  priceInput.setCustomValidity(`Максимальная цена ${MAX_PRICE} ₽`);
  } else {
    priceInput.setCustomValidity('');
  }

  priceInput.reportValidity();

});

const options = Array.from(capacitySelect.options);

const capacity = {
  '1': [options[2]],
  '2': [options[1], options[2]],
  '3': [options[0], options[1], options[2]],
  '100': [options[3]],
};

roomsSelect.addEventListener('change', (evt) => {
  const rooms = evt.target.value;
  const capacityOptions = capacity[rooms];

  options.forEach(element => {
    element.disabled = true;
  });

  capacityOptions.forEach(element => {
    element.disabled = false;
  });

});

