// const timerId = setTimeout(() => {
//     console.log('Hello!');
// }, 2000);

// const timerId2 = setTimeout((text) => {
//     console.log(text);
// }, 2000, "Hello!");


// Actions with setTimeout
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000, 5);
//     timerId = setInterval(logger, 500, 5);
// });

function logger(text = "") {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('Text ' + text);  
    i++; 
}

let id = setTimeout(function log() { 
    console.log('Hello'); 

    id = setTimeout(log, 500);
}, 500);


// My animation
function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);

    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else{
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);