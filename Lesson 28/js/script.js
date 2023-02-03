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


/**
 * Lesson 28
 */
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
    
            console.log('Done!');
        } else{
            console.log('Error!');
    
            i--;
        }
        
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        alert('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count < 31) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман!');
    } else{
        alert('Произошла ошибка!');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);


function writeYourGenres(times) {
    for (let i = 1; i <= times; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
    
        if (genre != null && genre != '') {
            personalMovieDB.genres[i] = genre;
    
            console.log('Done!');
        } else{
            console.log('Error!');
    
            i--;
        }
        
    }
}

writeYourGenres(3);

console.log(personalMovieDB);
