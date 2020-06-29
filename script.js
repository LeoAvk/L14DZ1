// Задание 1:
// Написать функцию, которая по введенному номеру дня недели выводит его название. 
// Нумерация дней недели начинается с 1 – понедельник, 2 — вторник и т. д.
function dayWeek(){
    let dayNumber = prompt("Какой по счету сегодня день недели?");
    switch(dayNumber){
        case '1':
         dayNumber = 'Понедельник';
        break;
    case '2':
        dayNumber = 'Вторник';
        break;
    case '3':
        dayNumber = 'Среда';
         break;
    case '4':
        dayNumber = 'Четверг';
         break;
    case '5':
        dayNumber = 'Пятница';
        break;
    case '6':
        dayNumber = 'Суббота';
        break;
    case '7':
        dayNumber = 'Воскресенье';
        break;
   
    default: dayNumber = 'Неверное значение';
    }
    return dayNumber
}

alert(dayWeek());

// Задание 2:
// Напишите функцию, которая проверяет, является ли введенное с клавиатуры число — целым числом.
let number = +prompt('Введите число');
function integer(number){
  console.log((number ^ 0) === number)
}
integer(number);

l
// Задание 3:
// Написать функцию которая возводит введенное с клавиатуры число, в степень n,  степень и число вводится с клавиатуры.
function pow(a, b) {
    let result = a;
  
    for (let i = 1; i < b; i++) {
      result *= a;
    }
    return result;
  }
  
  let a = +prompt("Введите число");
  let b = +prompt("Введите степень");
  
  if (b < 1) {
    alert(`Степень ${b} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(a, b) );
  }


// Задание 4:
// Написать функцию, которая проверяет делится ли число 1 на число 2 без остачи.
 
let firstNumber = +prompt ("Введите первое число");
let secondNumber = +prompt ("Введите второе число");
function canDivide(firstNumber, secondNumber){
  return firstNumber % secondNumber === 0
}
console.log(canDivide(firstNumber, secondNumber));

// Задание 5:
// Напишите функцию, которая пишет в консоль число в заданном диапазоне.
// Используйте Math.random().
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert( randomInteger(1, 10) );

// Задание 6:
// Написать функцию isYearLeap, принимающую 1 аргумент — год, и возвращающую true, если год високосный, и false иначе.
function isYearLeap(year) {
  if (year % 400 === 0) {
      return true;
  } else if (year % 100 === 0) {
      return false;
  } else if (year % 4 === 0) {
      return true;
  } else {
      return false;
  }
}

console.log( isYearLeap (
+prompt("Введите год")) 
);

// Задание 7:
// Пользователь делает вклад в размере n рублей сроком на years лет под 10% годовых (каждый год размер его вклада увеличивается на 10%. Эти деньги прибавляются к сумме вклада, и на них в следующем году тоже будут проценты).
// Написать функцию bank, принимающая аргументы n и years, и возвращающую сумму, которая будет на счету пользователя.
function bank (n, years) {
  const rate = 1.1;

  return n * (rate ** years);
}
const result = bank (
  +prompt("Сумма"),
  +prompt("Срок, лет")
)
console.log(result);

// Задание 8:
// В зависимости от того, что выберет пользователь (ввести в prompt), 
// вычислить площадь либо прямоугольника, либо треугольника, либо круга. 
// Если выбраны прямоугольник или треугольник, то надо запросить длины сторон, если круг, то его радиус.
// Нужно написать 4 функции, по 1 для каждой фигуры и одна общая.
const TRIANGLE = 'TRIANGLE';
const RECTANGLE = 'RECTANGLE';
const CIRCLE = 'CIRCLE';

function triangleSquare(a, b, c) {
    const p = 0.5 * (a + b +c);
    return Math.sqrt (p * (p - a) * (p - b) * (p - c));
}

function rectangleSquare(a, b) {
    return a * b;
}

function circleSquare(r) {
    return Math.PI * r ** 2;
}

function calculateSquare () {
    const figure = prompt('Figure type');

    switch (figure) {
        case TRIANGLE: return triangleSquare(
            +prompt('a'),
            +prompt('b'),
            +prompt('c'),
        );
        case RECTANGLE: return rectangleSquare(
            +prompt('a'),
            +prompt('b'),
        );
        case CIRCLE: return circleSquare(
            +prompt('r'),
        );
        default: return null;
    }
}

console.log( calculateSquare() );


