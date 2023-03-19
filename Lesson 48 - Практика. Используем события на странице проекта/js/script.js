/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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


    // Work I
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('input[type="checkbox"]');

    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = `url("../img/bg.jpg")`;
    };


    const sortArr = (arr) => {
        arr.sort();
    };


    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (!newFilm) {
            return false;
        }

        if (newFilm.length > 21) {
            // newFilm = `${newFilm.slice(0, 20)}...`;
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        movieDB.movies.push(newFilm);

        createMovieList(movieDB.movies, movieList);

        if (favorite) {
            console.log('Добавляем любимый фильм');
        }

        event.target.reset();
    });

    function createMovieList(films, parent) {
        parent.innerHTML = '';

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1}. ${film} 
                    <div class="delete"></div>
                </li>
            `;
        });

        movieList.querySelectorAll('.promo__interactive-item').forEach((element, i) => {
            element.querySelector('.delete').addEventListener('click', (e) => {
                e.preventDefault();
                
                movieDB.movies.splice(i, 1);
    
                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
});

