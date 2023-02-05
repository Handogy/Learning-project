"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */
function calculateVolumeAndArea(widthCube) {
    if (typeof widthCube == "number" && widthCube > 0  && Number.isInteger(widthCube)) {
        const volume = widthCube * widthCube * widthCube;
        const area = widthCube * widthCube * 6;

        return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
    } else{
        return `При вычислении произошла ошибка`;
    }
}

calculateVolumeAndArea(10);


function getCoupeNumber(numb) {
    if (typeof numb == "number" && numb > 0 && numb <= 36 && Number.isInteger(numb)) {
        const coupeNumb = Math.floor(numb / 4);

        return coupeNumb;
    } else if(numb === 0 || numb > 36) {
        return `Таких мест в вагоне не существует`;
    } else{
        return `Ошибка. Проверьте правильность введенного номера места`;
    }
}

console.log(getCoupeNumber(0));


/**
 * Решение Ивана
 */
function calculateVolumeAndArea(length) {
    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;

    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    return Math.ceil(seatNumber / 4);
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33);

/**
 * Practice
 */
function getTimeFromMinutes(minutes) {
    if (minutes < 0 || minutes > 600 || typeof (minutes) !== 'number' || !Number.isInteger(minutes)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutes / 60);
    const mins = Math.floor(minutes % 60);

    let n = hours;
    let hoursText = "часов";

    n %= 100;
    if (n >= 5 && n <= 20) {
        hoursText = "часов";
    }
    n %= 10;
    if (n === 1) {
        hoursText = "час";
    }
    if (n >= 2 && n <= 4) {
        hoursText = "часа";
    }

    return `Это ${hours} ${hoursText} и ${mins} минут`;
}

console.log(getTimeFromMinutes(0));


function findMaxNumber(num1, num2, num3, num4) {
    if ((!num1, !num2, !num3, !num4) || (num1, num2, num3, num4) == '' || typeof (num1, num2, num3, num4) != 'number' ) {
        return 0;
    }

    let result = '';
    if (num1 > num2) {
        result = num1;
    } else{
        result = num2;
    }

    if (result < num3) {
        result = num3;
    }

    if (result < num4) {
        result = num4;
    }

    return result;
}

console.log(findMaxNumber(1, 2, 3, 9));
