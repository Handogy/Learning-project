"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Основы ООП, прототипно ориентированное наследование
 */

let str = "some";

// let strObj = new String(str); 

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

// const john = {
//     health: 100,
// }

// устаревший формат, который может встречаться, его нужно знать но уже не использовать в реальных проектах.
// john.__proto__ = soldier;

// Новый формат
// Вариант 1
// Object.setPrototypeOf(john, soldier);

// Вариант 2 (создание сразу нового прототипа)
const john = Object.create(soldier);

// console.log(john.armor);
john.sayHello();
