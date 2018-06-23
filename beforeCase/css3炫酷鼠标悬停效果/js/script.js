// document.querySelector('.button').onmousemove = (e) => {
//     const x = e.pageX - e.target.offsetLeft
//     const y = e.pageY - e.target.offsetTop
//     e.target.style.setProperty('--x',`${ x }px`)
//     e.target.style.setProperty('--y',`${ y }px`)
// }

'use strict';

var bPointer = document.querySelector('.button')
bPointer.onmousemove = function (e) {
    var x = e.pageX - e.target.offsetLeft;
    var y = e.pageY - e.target.offsetTop;
    e.target.style.setProperty('--x', x + 'px');
    e.target.style.setProperty('--y', y + 'px');
};