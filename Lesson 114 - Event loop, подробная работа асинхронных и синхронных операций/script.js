'use strict';

console.log(1);

setTimeout(() => {
    console.log('timeout');
}, 2000);

setTimeout(() => {
    console.log('timeout_400');
}, 4000);

console.log(2);

let k = 0;

function count() {
    for (let i = 0; i < 1e9; i++) {
        k++;
    }

    alert('done');
}
