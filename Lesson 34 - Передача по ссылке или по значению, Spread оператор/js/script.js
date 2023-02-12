"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Передача по ссылке или по значению
 */

let a = 5,
    b = 5;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1,
};

// const copy = obj; //Передается ссылка

copy.a = 10;

// console.log(copy.a);
// console.log(obj);

// Поверхностная копия обьектов
function copy(mainObj) {
    let objCopy = {};

    for (const key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20,
};

console.log(Object.assign(numbers, add));
 
// Assign как клонирование обьектов
const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);

// Создаем копию массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'adgadgadg';

console.log(newArray);
console.log(oldArray);


// Spread - оператор разворачивания
const video = ['youtube', 'vimeo', 'uatube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

// =====================

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// =======================

const array = ['a', 'b'];

const newArray2 = [...array];

console.log(newArray2);


// ===================

// Object spread operator
const q = {
    one: 1,
    two: 2,
    three: 3,
};

const newQ = {...q};

console.log(newQ);

