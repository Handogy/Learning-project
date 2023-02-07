"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Объекты, деструктуризация обьектов
 */

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red',
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

// console.log(Object.keys(options));

// console.log(Object.keys(options).length);

// console.log(options.name);

// Удаление свойства объекта
// delete options.name;

// console.log(options.name);

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (const i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
    
// }

// console.log(counter);


/** 
 * Деструктурищация обьектов
 */
const {border, bg} = options.colors;

console.log(border);
