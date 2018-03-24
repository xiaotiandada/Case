'use strict';

var i = 1;
var div = document.getElementsByClassName('animate_div')[0];
var className = 'ans_btn' + i;

// 每隔一段时间调用自己更换背景图

var run = function run() {
    if (i > 25) {
        i = 1;
    }

    div.classList.remove(className);
    className = 'ans_btn' + i;
    div.classList.add(className);

    i++;

    setTimeout(run, 50);
};

run();
//# sourceMappingURL=demo.js.map
