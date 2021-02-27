export function checkIfCorrect(min, max) {
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

export function getNumber(min, max) {

  if (checkIfCorrect(min, max) === true) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

export function getCoordinates(min, max, digits) {

  if (checkIfCorrect(min, max) === true) {

    let result = Math.random() * (max - min) + min;

    return result.toFixed(digits);
  }
}

export function getArray(array) { 
  return array.slice(getNumber(0, array.length - 1));
}

export function checkCapacity(guests, rooms) {
  let str = '';

  if (rooms === 1) {
    str = `${rooms} комната для `;
  } else if (rooms > 1 && rooms < 5) {
    str = `${rooms} комнаты для `;
  } else {
    str = `${rooms} комнат для `;
  }

  if (guests === 1) {
    return str + `${guests} гостя`;
  } else {
    return str + `${guests} гостей`;
  }
}
