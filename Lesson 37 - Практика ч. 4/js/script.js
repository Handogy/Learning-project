"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Рефакторинг - переписывание кода под новые условия и новые задачи
 */

/**
 * Практика ч4. Используем обьекты
 */


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
        
                console.log('Done!');
            } else{
                console.log('Error!');
        
                i--;
            }
            
        }
    },

    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            alert('Просмотрено довольно мало фильмов!');
        } else if (personalMovieDB.count < 31) {
            alert('Вы классический зритель!');
        } else if (personalMovieDB.count > 30) {
            alert('Вы киноман!');
        } else{
            alert('Произошла ошибка!');
        }
    },

    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function(times) {
        for (let i = 1; i <= 1; i++) {
            // const genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        
            // if (genre != null && genre != '') {
            //     personalMovieDB.genres[i] = genre;
            // } else{
            //     console.log('Вы ввели некоректные данные или не ввели вовсе!');
        
            //     i--;
            // }
            
        const genres = prompt(`Введите ваши любимые жанры через запятую`, '');

        if (genres != null && genres != '') {
            personalMovieDB.genres = genres.split(', ');
            personalMovieDB.genres.sort();
        } else{
            console.log('Вы ввели некоректные данные или не ввели вовсе!');
    
            i--;
        }
        }

        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр #${i} - это ${element}`);
        });
    },

    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else{
            personalMovieDB.privat = false;
        }
    },
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.showMyDB(personalMovieDB.privat);

// personalMovieDB.writeYourGenres(3);

// personalMovieDB.toggleVisibleMyDB();

// console.log(personalMovieDB);
