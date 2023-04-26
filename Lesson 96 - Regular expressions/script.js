'use strict';

/** 
 * Lesson 96 - Regular Expressions
 */

// new RegExp('pattern', 'flags');

// /pattern/f 

// const ans = prompt('Input your name');

// const reg = /n/ig;

/**
 * Flags
 * 
 * i - найти что то вне зависимости от регистра
 * 
 * g - найти сразу несколько вхождений
 * 
 * m - многострочный режим
 * 
 * 
 * --------------------------------------------
 * 
 * \d - искать цифры
 * 
 * \w - ищем все слова
 * 
 * \s - искать все пробелы
 * 
 * \w - words
 * 
 * \D - not numbers
 * 
 * \w - not letters
 * 
 */


// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log(pass.replace(/\./g, "*")); - экранируем точку


// console.log('12-34-56'.replace(/-/g, ':'));

// ---------------------------------------------------------------------------

// const ans2 = prompt('Input your name');

// const reg2 = /n/ig;

// console.log(reg2.test(ans2));

// ---------------------------------------------------------------------------

// const ans3 = prompt('Input your name');

// const reg3 = /\d/g;

// console.log(ans3.match(reg3));

// ---------------------------------------------------------------------------

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));

