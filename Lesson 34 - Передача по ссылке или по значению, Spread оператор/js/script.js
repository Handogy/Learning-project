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


// Tasks
const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;

        return `Мне ${age} и я владею языками: ${languages.join(' ').toUpperCase()}`;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills;

    let result = '';

    for (const key in programmingLangs) {
        result += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return result;
}

// console.log(showExperience(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


// ======================================


const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length === 0){
        return 'Семья пуста';
    }

    return `Семья состоит из: ${arr.join(' ')}`;
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(element => {
        console.log(element.toLowerCase());
    });
}

// console.log(showFamily(family));
standardizeStrings(favoriteCities);

// =============================

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }

    let arr = str.split(" ");
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element.split('').reverse().join(''));
    });

    newArr = newArr.reverse().join(' ');

    return newArr;
}

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let result = arr;

    if (arr.length === 0) {
        return 'Нет доступных валют';
    }

    if (missingCurr) {
        result.forEach((element, iCount) => {
            if (missingCurr === element) {
                result.splice(iCount, 1);
            }
        });
    }

    return `Доступные валюты: \n${result.join('\n')}`;
}

// console.log(reverse(someString));
console.log(availableCurr(['UAH', 'RUB', 'CNY'], 'RUB'));


/**
 * Решения Ивана
 */
// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return str.split('').reverse().join('');

//     // Решение при помощи цикла
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

