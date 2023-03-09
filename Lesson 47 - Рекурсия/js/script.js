"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */


/**
 * Lesson 47 - Рекурсия
 */
function pow(x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x;
    }

    return result;
}

function pow(x, n) {
    if (n === 1) {
        return x;
    } else{
        return x * pow(x, n - 1);
    }
}

// pow(2, 1);  // 2
// pow(2, 2);  // 4
// pow(2, 3);  // 8
// pow(2, 4);  // 16


let students = {
    js: [{
        name: 'Jogn',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic:[{
            name: 'Peter',
            progress: 20,
        }, {
            name: 'Ann',
            progress: 18,
        }], 
        
        pro:[{
            name: 'Sam',
            progress: 10,
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100,
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else{
            for (const subCourse of Object.values(course)) {
                students += subCourse.length;
                
                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIteration(students));
// console.log(Object.values(students));

function getTotalProgressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }

        return [total, data.length];
    } else{
        let total = [0, 0];

        for (let subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0] / result[1]);


/**
 * Задача
 */
function factorial(number) {
    if (typeof(number) != 'number' || !Number.isInteger(number)) {
        return 'Неверные данные';
    }
    
    if (number < 1) {
        return 1;
    }

    if (number === 1) {
        return 1;
    } else if (number === 2) {
        return number * (number - 1);
    } else {
        return number * factorial(number - 1);
    }
}

console.log(factorial('1'));


/**
 * Решение Ивана
 */
// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     }

//     if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }

//     // Более короткий вариант, который вы можете встретить
//     // Но не учитывает отрицательные значения
//     return n ? n * factorial(n - 1) : 1;
// }

// factorial(5)