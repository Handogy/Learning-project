'use strict';

/** 
 * Методы перебора массивов
 */


/** filter - filters element inside an array */

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames);


/** Map */

// const answers = ['IvAn', 'AnnA', 'Hello', 'VolDemart'];

// const result = answers.map((item) => item.toLocaleLowerCase());

// The same
let answers = ['IvAn', 'AnnA', 'Hello', 'VolDemart'];

answers = answers.map((item) => item.toLocaleLowerCase());

// console.log(answers);


/**
 * Every / Some
 */

// const some = [4, 5, 7];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));


/**
 * Reduce
 * Схлопывает или собирает массив в одно единое целое
 */

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => sum + current);

// ---------

// const arr2 = ['apple', 'pear', 'plum'];

// const result2 = arr2.reduce((sum, current) => sum + ', ' + current);

// ---------

// const arr3 = [4, 5, 1, 3, 2, 6];

// const result3 = arr3.reduce((sum, current) => sum + current, 3);

// console.log(result3);



const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal,'
};

const newArray = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArray);