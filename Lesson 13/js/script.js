"use strict"; //запись для использования строгого стиля кода

/** 
 * Простое общение с пользователями
 */

// alert("Hello!");


// const result = confirm("Are you here?");
// console.log(result);


// const answer = prompt("Are you adult?", "No!");
// console.log(answer);


const answers = [];

answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your surname?", "");
answers[2] = prompt("What is your age?", "");

Document.write(answers);
