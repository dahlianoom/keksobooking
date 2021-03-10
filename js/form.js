import {MIN_PRICE} from './data.js';

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');

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
