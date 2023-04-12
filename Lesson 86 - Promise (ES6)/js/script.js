'use strict';

/** 
 * Promise
 */

// console.log('Data request');

// const reg = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Data preparing');
    
//         const product = {
//             name: 'TV',
//             price: 2000,
//         };

//         resolve(product);
//     }, 2000);
// });

// reg.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000); 
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error('An error has occurred');
// }).finally(() => {
//     console.log('Finally');
// });


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));
    
// Ждет выполнение всех промисов и тогда что то делает
// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });
    
// Выполняет действия, когда первый промис что-то отработал
Promise.race([test(1000), test(2000)]).then(() => {
    console.log('All');
});
