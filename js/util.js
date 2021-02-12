'use strict'

export {checkIfCorrect, getNumber, getCoordinates, getArray};

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