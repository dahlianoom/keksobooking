'use strict'

function checkIfCorrect(min, max) {
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

function getNumber(min, max) {

    if (checkIsCorrect(min, max) === true) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

function getCoordinates(min, max, digits) {
  
    if (checkIsCorrect(min, max) === true) {
      
    let result = Math.random() * (max - min) + min;

    return result.toFixed(digits);
    }
}

console.log(getNumber('kk', 5));
console.log(getCoordinates(1, 6, 3));