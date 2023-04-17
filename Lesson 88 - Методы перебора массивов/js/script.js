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
// let answers = ['IvAn', 'AnnA', 'Hello', 'VolDemart'];

// answers = answers.map((item) => item.toLocaleLowerCase());

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

// console.log(result2);

// ---------

// const arr3 = [4, 5, 1, 3, 2, 6];

// const result3 = arr3.reduce((sum, current) => sum + current, 3);

// console.log(result3);



// const obj = {
//     ivan: 'persone',
//     ann: 'persone',
//     dog: 'animal',
//     cat: 'animal,'
// };

// const newArray = Object.entries(obj)
// .filter(item => item[1] === 'persone')
// .map(item => item[0]);

// console.log(newArray);



/**
 * Practice
 */

const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    const newArray = Object.entries(arr)
    .filter(item => item[1].rating >= 8)
    .map(item => item[1]);

    return newArray;
}

function showListOfFilms(arr) {
    const newArray = Object.entries(arr)
    .map(item => item[1].name)
    .reduce((sum, current) => sum + ', ' + current);

    return newArray;
}

function setFilmsIds(arr) {
    arr.forEach((element, key) => {
        arr[key].id = key;
    });

    return arr;
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every(item => typeof(item.id) !== 'undefined');
}

// console.log(showGoodFilms(films));
console.log(showListOfFilms(films)); 
// console.log(checkFilms(films));


/**
 * Решения Ивана
 */

/**
 * function showGoodFilms(arr) {
    return arr.filter(film => film.rating >= 8);
}

function showListOfFilms(arr) {
    return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}

showListOfFilms(films);

function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    });
}

const tranformedArray = setFilmsIds(films);

// При срабатывании every на первом фильме он натыкается на id = 0;
// 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// Учитывайте этот момент
function checkFilms(arr) {
    return arr.every(film => film.id || film.id === 0 ? true : false)
}

// Еще короче, так как условие все равне вернет true или false:
// function checkFilms(arr) {
//     return arr.every(film => film.id || film.id === 0)
// }

// Максимально коротко, но еще читаемо:
// const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

checkFilms(tranformedArray);
 */