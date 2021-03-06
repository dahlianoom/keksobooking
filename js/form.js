const MIN_PRICE = {
  palace: 15000,
  house: 10000,
  flat: 5000,
  bungalow: 1000,
};

const typeSelect = document.querySelector('#type');
const priceInput = document.querySelector('#price');
const timeinSelect = document.querySelector('#timein');
const timeoutSelect = document.querySelector('#timeout');
const form = document.querySelector('.ad-form');

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
