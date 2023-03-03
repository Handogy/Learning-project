/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// const promoAdv = document.querySelector('.promo__adv'),
//       promoGenre = document.querySelector('.promo__genre'),
//       promoBg = document.querySelector('.promo__bg'),
//       filmsList = document.querySelector('.promo__interactive-list'),
//       filmsListItem = document.querySelectorAll('.promo__interactive-item');

// // 1
// promoAdv.remove();

// // 2
// promoGenre.innerHTML = 'драма';

// // 3
// promoBg.style.cssText = `background-image: url("../img/bg.jpg");`;

// // 4
// filmsListItem.forEach(element => {
//     element.remove();
// });

// let newArr = movieDB.movies.sort();

// newArr.forEach((element, itemNumb) => {
//     const liEl = `<li class="promo__interactive-item">${itemNumb + 1}. ${element} <div class="delete"></div></li>`;
//     console.log(liEl);
//     filmsList.innerHTML += liEl;
// });


// Работа Ивана
const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(element => {
    element.remove();
});

genre.textContent = 'драма';

poster.style.backgroundImage = `url("../img/bg.jpg")`;

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1}. ${film} 
            <div class="delete"></div>
        </li>
    `;
});

