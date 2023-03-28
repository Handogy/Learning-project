/**
 * Work with date
 */

const now = new Date();
// const now = new Date('2023-03-28');
// new Date().parse('2023-03-28'); // The same method as the previous

// const now = new Date(2023, 3, 28, 23);
// const now = new Date(0);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours()); // Разница в минутах от UTC времени
// console.log(now.getTimezoneOffset());
// console.log(now.getTime());

// console.log(now.setHours(40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`The cycle completed in ${end - start} ms.`);
