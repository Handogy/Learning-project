"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

const res = convert(500, usdCurr);

promotion(res);


function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if(i === 3) return;
    }

    console.log("Done");
}

test();


function doNothing() {}

console.log(doNothing() === undefined);



/**
 * Lesson 27 - Homework
 */
function getMathResult(base, count) {
    let result = '';

    if (typeof count === 'number') {
        for (let i = 1; i <= count; i++) {
            if (i != count) {
                result += `${(base * i)}---`;
            } else if(i == 1) {
                result += `${base}`;
            } else {
                result += base * i;
            }
            
        }
    } else {
        return base;
    }

    return result;
}


console.log(getMathResult(2, ''));