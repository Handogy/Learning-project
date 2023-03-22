'use strict';


/**
 * Оператор нулевого слияния реагирует только на Null и на Underfined
 * 
 * Использовать можно как: ??
 */

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

// console.log(userName ?? userKey ?? 'User');


/**
 * Optional chaining operator
 * ?.
 */
const block = document.querySelector('.block');

// console.log(block);

// if (block) {
//     console.log(block.textContent);
// }

// console.log(block?.textContent); // работает только на чтение свойства

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log("Hello");
    }
};

// userData.say();
userData.hey?.();

// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

// console.log(userData.skills?.js);


/**
 * Lesson 55
 * Живые коллекции и полезные методы
 */

const boxesQuery = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

// console.log(boxesQuery);
// console.log(boxesGet);

boxesQuery.forEach(box => {
    if (box.matches('.this')) console.log(box);
});

console.log(boxesQuery[0].closest('.wrapper'));