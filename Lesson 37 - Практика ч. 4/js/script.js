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


// Упражнение по написанию кода 13
const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let generalSquard = 0,
        generalValue = 0,
        generalSum = 0;

    data.shops.forEach(element => {
        generalSquard += element.width * element.length;
    });

    generalValue = generalSquard * data.height;

    generalSum = generalValue * data.moneyPer1m3;
    
    if (generalSum > data.budget) {
        return 'Бюджета недостаточно';
    } else {
        return 'Бюджета достаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));


/**
 * Ivan's solution
 */
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// }

// function isBudgetEnough(data) {
//     let square = 0;
//     let volume = 0;

//     data.shops.forEach(shop => {
//         square += shop.width * shop.length;
//     });

//     volume = data.height * square;

//     if (data.budget - (volume * data.moneyPer1m3) >= 0) {
//         return 'Бюджета достаточно';
//     } else {
//         return 'Бюджета недостаточно';
//     }
// }

// isBudgetEnough(shoppingMallData);


// ====================================

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Somebody'];

function sortStudentsByGroups(arr) {
    let newArr = arr.sort();
    let result = [];

    for (let i = 0; i < 3; i++) {
        result.push(newArr.slice(0, 3));
        newArr = newArr.slice(3);
    }

    if (newArr.length > 0) {
        result.push(`Оставшиеся студенты: ${newArr.join(", ")}`);
    } else{
        result.push(`Оставшиеся студенты: -`);
    }

    return result;
}

console.log(sortStudentsByGroups(students));


// Решение Ивана
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {
//     arr.sort();
//     const a = [], b = [], c = [], rest = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             a.push(arr[i]);
//         } else if (i < 6) {
//             b.push(arr[i]);
//         } else if (i < 9) {
//             c.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }
//     return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`]
// }

// sortStudentsByGroups(students);
