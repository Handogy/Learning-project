'use strict';

// 1
// function showThis(a, b) {
//     console.log(this);

//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);


// 2
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }

//         shout();
//     }
// };

// obj.sum();

// 3
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     };
// }

// let ivan = new User('Ivan', 23);


// 4
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John',
// }

// sayName.call(user, "Smith");
// sayName.apply(user, ["Smith"]);

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 1) Usual function: this = window, but if there is strict - undefined
// 2) Context in object methods - "the object"
// 3) This in constructors and classes - new instance of object
// 4) Manual binding this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    this.style.backgroundColor = 'red';
    console.log(this);
});

// Для стрелочной функции
// btn.addEventListener('click', e => {
//     e.target.style.backgroundColor = 'red';
// });

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this.num);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));
