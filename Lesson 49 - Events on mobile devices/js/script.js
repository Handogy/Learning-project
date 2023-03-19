"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */


/**
 * Lesson 49 - Events on mobile devices
 */

// touchstart - event on start touching
// touchmove - event on touch mooving
// touchend - event on end touching
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();
        
        console.log('Start');
        console.log(e.targetTouches);
    });

    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault();
        
    //     console.log('Move');
    // });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();
        
    //     console.log('End');
    // });
});


// touches
// targetTouches