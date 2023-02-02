"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Методы и свойства строк и чисел
 */

const str = "test";


// Изменение регистра
console.log(str.toUpperCase());

console.log(str);

// Найти часть строки и узнать индекс откуда начинается
const fruit = "Some fruit";
console.log(fruit.indexOf('frui'));

const logg = "Hello world!";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

console.log(logg.substr(6, 10));


const num = 12.2;
console.log(Math.round(num));


const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));