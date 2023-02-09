"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Массивы и псевдомассивы
 */
const arr = [1, 24, 2, 3, 565, 6, 8];

arr.sort(compareNumb);

console.log(arr);

function compareNumb(a, b) {
    return a - b;
}

// console.log(arr.length);

// Удаление последнего элемента из массива
// arr.pop();

// Добавление последнего элемента из массива
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
// for (const val of arr) {
//     console.log(val);
// }

// arr[99] = 0;

// console.log(arr[99]);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`);
// });

// Из стороки в массив через разделитель
// const str = prompt("");
// const products = str.split(", ");

// console.log(products);

// // Сортировка
// products.sort();

// // Объединение элементов массива
// console.log(products.join('; '));



/**
 * Псевдомассивы
 */