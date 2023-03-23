"use strict"; //strict code style


/**
 * DRY
 * Don't repeat yourself
 */


/**
 * Lesson 63 - Class List and event delegation
 */

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red', 'adgadgadg'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else{
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
});


// console.log(btns[0].className);

wrapper.addEventListener('click', (event) => {
    // if (event.target && event.target.tagName == "BUTTON") {
    //     console.dir("Hello!");
    // }
    
    // if (event.target && event.target.classList.contains('blue')) {
    //     console.dir("Hello!");
    // }
    
    if (event.target && event.target.matches('button.red')) {
        console.dir("Hello!");
    }
});

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.dir("Hello!");
    });
});


const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);