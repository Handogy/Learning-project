"use strict"; //запись для использования строгого стиля кода

if( 4 == 9) {
    console.log("Ok");
}

// const num = 50;

// if(num < 49){
//     console.log('A little');
// } else if(num > 100){
//     console.log('A lot');
// } else {
//     console.log('OK');
// }

// Тернарный оператор
// (num === 50) ? console.log('OK!') : console.log('Error!');


/** 
 * Switch
 */

const num = 50;

switch (num) {
    case 49: 
        console.log('Error!');
        break;
    case 100:
        console.log('Error!');
        break;
    case 50:
        console.log('Ok!');
        break;

    default:
        console.log('Not this time!');
        break;

}