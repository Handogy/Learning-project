"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */

/**
 * Событие - сигнал от браузера, что что то в нем произошло
 */

/**
 * Lesson 46 - Навигация по DOM - элементам
 */

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling.nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for (const node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}
