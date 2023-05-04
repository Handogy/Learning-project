'use strict';


/**
 * Lesson 111 - Функции-генераторы
 * 
 * Функция генерирует какой-то результат
 */

// function* generatore() {
//     yield 'S';
//     yield 'C';
//     yield 'i';
//     yield 'p';
//     yield 't';
// }

// const str = generatore();

// console.log(str.next().value);
// console.log(str.next().value);
// console.log(str.next().value);


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

// const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);

for (const k of count(7)) {
    console.log(k);
}