const message = 'Hello world'; // Try edit me


function calculator(number1, number2, sign) {
  var number1 = 4;
  var number2 = 2;
  var sign = '+';

  if (typeof number2 == 'string') {
    return 'проверь значения';
  }
  if (number2 == 0) {
    return 'на ноль делить нельзя';
  }

  if (sign == '/') {
    return number1 / number2;
  }
  if (sign == '*') {
    return number1 * number2;
  }
  if (sign == '+') {
    return number1 + number2;
  }
  if (sign == '-') {
    return number1 - number2;
  }
  if ((sign != '-', sign != '+', sign != '*', sign != '/')) {
    return 'надо ввести арифметический знак в sign';
  }
}

document.querySelector('#header').innerHTML =  'ну на ответ -->  ' + calculator();

// TESTS
console.log("calculator(4, 2, '/') = 2, get ", calculator(4, 2, '/'));
console.log("calculator(4, 2, '*') = 8, get ", calculator(4, 2, '*'));
console.log("calculator(4, 2, '+') = 6, get ", calculator(4, 2, '+'));
console.log("calculator(4, 2, '-') = 2, get ", calculator(4, 2, '-'));
console.log(
  "calculator(4, 0, '/') = нельзя делить на ноль, get ",
  calculator(4, 0, '-')
);
console.log(
  "calculator('a', 0, '+') = надо ввести два числа, get ",
  calculator(4, 0, '-')
);

// 1) Чем отличается == от === - Оператор == сравнивает на равенство, а вот === — на идентичность. Плюс оператора === состоит в том, что он не приводит два значения к одному типу
// 2) Как можно объявить функцию - function namefunction(function values) {действия функции}
// 3) Как работать с переменными функции - имена переменных пишутса на английском и осмысмыслено. объявить можно через let. var. constant
// 4) Зачем нужен return - для завершения функции и возврата значения
