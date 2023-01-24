"use strict"; //запись для использования строгого стиля кода

/**
 * Цикл в цикле и метки
 */


for (let i = 0; i < 3; i++) {
    console.log(i);
    
    for (let j = 0; j < 3; j++) {
        console.log(j);

    }
}


// let result = '';

// for (let i = 0; i < 50; i++) {
//     result += '*';

//     console.log(result);
// }


let result = '';
const length = 7;

for (let i = 1; i <= length; i++) {
    
    for (let j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);


/** 
 * Метки
 */

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
    
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}

first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
    
        for (let k = 0; k < 3; k++) {
            if (k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}


/**
 * Homework
 */

const arrayOfNumbers = [];

// Пишем решение вот тут
for (var i = 5; i <= 10; i++) {
    arrayOfNumbers.push(i);
}

console.log(arrayOfNumbers);


/** 
 * 23.4
 */

// 1
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i]);
// }

// console.log(result);


// 2
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// // Пишем решение вот тут
// for (let i = 0; i < data.length; i++) {
//     if( typeof(data[i]) == 'number' ){
//         data[i] = (data[i] * 2);
//     } else if(typeof(data[i]) == 'string'){
//         data[i] = (data[i] + " - done");
//     }
// }

// // Не трогаем

// console.log(data);


// 3
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

// Пишем решение вот тут
for (let i = data.length - 1; i >= 0; i--) {
    result2.push(data[i]);
}

console.log(result2);

// 4
const lines = 15;
let result3 = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 1; i <= lines; i++) {
    const countStars = i * 2 - 1;
    const countLastStars = lines * 2 - 1;
    const countSideSpaces = (countLastStars - countStars) / 2;

    for (let j = 0; j < countSideSpaces; j++) {
        result3 += ' ';
    }

    for (let j = 0; j < countStars; j++) {
        result3 += '*';
    }

    for (let j = 0; j < countSideSpaces; j++) {
        result3 += ' ';
    }

    result3 += '\n';
}

console.log(result3);
