"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Событие - сигнал от браузера, что что то в нем произошло
 */

/**
 * Lesson 45 - События и их обработчики
 */

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert("Click");
// }

// btn.onclick = function() {
//     alert("Second Click");
// }

// btn.addEventListener('click', () => {
//     console.log('Click');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('Hover');
// });

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;

    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');
link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
})
