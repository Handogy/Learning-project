"use strict"; //запись для использования строгого стиля кода


/**
 * DRY
 * Don't repeat yourself
 */


/**
 * Lesson 50 - Async, defer, dinamycal scrypts
 */

const p = document.querySelectorAll('p');
console.log(p);


function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

// "js/test.js"
loadScript("js/test.js");
loadScript("js/some.js");