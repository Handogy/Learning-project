'use strict';
/**
 * Lesson 106 - Ошибки. Как избежать “поломки” своего кода
 */

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch (error) {
    console.log('error');
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally{
    // Завершение любых операций при любом варианте развития событий
}

console.log('Still normal');