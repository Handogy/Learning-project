'use strict';

const box = document.getElementById('box'),
      buttons = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');


// console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

const num = 500;

box.style.cssText = `background-color: blue; width: ${num}px;`;

buttons[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
    
// }

hearts.forEach(element => {
    element.style.backgroundColor = 'blue';
});


const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove(0);
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World!</h1>";

// div.textContent = "Hello!";

// div.insertAdjacentHTML('beforebegin', '<h2>Hello!</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello!</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Hello!</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello!</h2>');
