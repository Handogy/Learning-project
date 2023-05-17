'use strict';

// const btnPhone = document.querySelector('#iphone'),
//       btnMacbook = document.querySelector('#macbook'),
//       images = document.querySelectorAll('img');


// let phoneAnimation;

// btnPhone.addEventListener('click', () => {
//     if (phoneAnimation) {
//         console.log(phoneAnimation);
//     }

//     if (!phoneAnimation) {
//         phoneAnimation = images[0].animate([
//             {
//                 transform: 'translateY(0) rotate(0deg)',
//                 filter: 'opacity(100%)'
//             },
//             {
//                 transform: 'translateY(100px) rotate(180deg)',
//                 filter: 'opacity(50%)'
//             },
//             {
//                 transform: 'translateY(-100px) rotate(270deg)',
//                 filter: 'opacity(75%)'
//             },
//             {
//                 transform: 'translateY(0) rotate(360deg)',
//                 filter: 'opacity(100%)'
//             },
//         ], {
//             duration: 3000,
//             iterations: Infinity,
//         });
//     } else if (phoneAnimation.playState === 'paused') {
//         phoneAnimation.play();
//     } else{
//         phoneAnimation.pause();
//     }
// });

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...fns) => (x) => fns.reduceRight((res, fn) => fn(res), x);
// const compose = (...fns) => (x) => {
//     // fns.reduceRight(function(previousValue, currentValue) {
//     //     return currentValue(previousValue), x;
//     // });

//     fns.reduceRight((previousValue, currentValue) => currentValue(previousValue), x);
// };

const result = compose(multiply20, divide100, normalizePrice);


console.log(compose(200));
