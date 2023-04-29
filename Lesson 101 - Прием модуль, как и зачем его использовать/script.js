'use strict';

/** 
 * Lesson 101 - Прием модуль, как и зачем его использовать
 */

const app = '123';

const number = 1;

// Аннонимная самовызывающаяся функция
(function() {
    let number = 2;
    console.log(number);
    console.log(number + 3);
} ());

console.log(number);

const user = (function() {
    const privat = function() {
        console.log('I am privat!');  
    };

    return {
        sayHello: privat,
    };
}());

user.sayHello();

