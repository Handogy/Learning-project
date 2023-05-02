'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'ads',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

// data.forEach((blockObj, i) => {
//     const block = document.createElement(blockObj.tag);

//     // if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);

//     block.setAttribute('id', blockObj.id);
//     document.body.append(block);
// });


try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch (e) {
    // console.log(e.name);
    // console.log(e.message);
    // console.log(e.stack);
    // console.error(e.name);
    // console.error(e.message);
    // console.error(e.stack);

    if (e.name === 'SyntaxError') {
        console.log(e.message);
    } else{
        throw e;
    }
}

// const error = new Error('adgadgadg');
// const error = new SyntaxError('adgadgadg');
// console.log(error.name, error.message, error.stack);
