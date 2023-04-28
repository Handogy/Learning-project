'use strict';

/** 
 * Lesson 100 - Инкапсуляция
 */

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(`User name: ${this.name}, age: ${userAge}`);  
//     };

//     this.getAge = function() {
//         return userAge;  
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else{
//             console.log('Invalid value!');
//         }
//     };
// }

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Khandohii';

    say = () => {
        console.log(`User name: ${this.name} ${this.#surname}, age: ${this._age}`);  
    }

    get age() {
        return this._age;  
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else{
            console.log('Invalid value!');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.#surname);
// ivan._age = 99;
// console.log(ivan._age);

ivan.say();


