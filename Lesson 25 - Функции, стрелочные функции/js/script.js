"use strict"; //запись для использования строгого стиля кода


/**
 * Внегласное правило для названия функции, оно должно быть глаголом с припиской того над чем выполняется действие
 */


/**
 * Function declaration
 * Создается до начала выполнения скрипта, можно вызвать перед обьявлением
 */

let num = 20;

function showFirstMessage(text) {
    console.log(text);

    num = 10;
}

showFirstMessage("Hello world!");
console.log(num);


function calc(a, b) {
    return (a + b);
}
console.log(calc(4, 3));

function ret() {
    let num = 10;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


/**
 * Function expression
 * Создается только тогда, когда доходит поток кода, можно вызвать только после обьявления.
 */
const logger = function() {
    console.log("Hello!");
};

logger();


/**
 * СТРЕЛОЧНЫЕ ФУНКЦИИ
 * Не имеет своего контекста
 */

const calc = (a, b) => a + b;
/*
const calc = (a, b) => {
    return a + b
};
*/