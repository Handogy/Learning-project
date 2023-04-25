'use strict';

/** 
 * Lesson 95 - Как сохранить данные без БД. Работа с localStorage
 */

// localStorage.setItem('number', 5);

// localStorage.removeItem('number');

// // Полное очищение хранилища
// localStorage.clear();


// console.log(localStorage.getItem('number'));


const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

change.addEventListener('click', () => {
    if (localStorage.getItem('bg')) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

const persone = {
    name: 'Alex',
    age: 25,
};

const serializedPersone = JSON.stringify(persone);

localStorage.setItem('alex', serializedPersone);

console.log(localStorage.getItem('alex'));
