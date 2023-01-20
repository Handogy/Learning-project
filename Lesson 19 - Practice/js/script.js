"use strict"; //запись для использования строгого стиля кода

/**
 * Мое решение
 */

// let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const questionMovie = prompt('Один из последних просмотренных фильмов?');
// const questionMovieRate = prompt('На сколько оцените его?');

// const questionMovie2 = prompt('Один из последних просмотренных фильмов?');
// const questionMovieRate2 = prompt('На сколько оцените его?');

// personalMovieDB.movies[questionMovie] = questionMovieRate;
// personalMovieDB.movies[questionMovie2] = questionMovieRate2;

// console.log(personalMovieDB);

/**
 * Решение Ивана
 */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

const questionMovie2 = prompt('Один из последних просмотренных фильмов?');
const questionMovieRate2 = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);