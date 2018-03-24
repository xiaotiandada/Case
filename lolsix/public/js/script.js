'use strict';

(function () {
    var navBtns = $('#nav-ul i');
    var navBtnli = $('#nav-ul li');
    var navhs = $('#nav li');
    var navhem = $('#nav em');
    var numLi = {
        numi: 1,
        numh: 1
    };
    var time = null;

    navBtnli.on('mouseover', function () {
        var navI = $(this).children('i');
        run(navI, 'ans2_btn', numLi.numi);
    });
    navBtnli.on('mouseout', function () {
        var target = $(this).children('i');
        stop(target);
    });

    navhs.on('mouseover', function () {
        $(this).removeClass('ligb');
        var navh = $(this).children('em');
        run(navh, 'ans_btn', numLi.numh);
    });

    navhs.on('mouseout', function () {
        var target = $(this).children('em');
        stop(target);
        $(this).addClass('ligb');
    });

    function run(obj, name, num) {
        function runs() {
            if (num > 25) {
                num = 1;
            }
            obj.css('display', 'block');
            obj.removeClass();
            obj.addClass(name + num);
            num++;
            time = setTimeout(function () {
                clearTimeout(time);
                runs();
            }, 30);
        }
        runs();
    }

    function stop(target) {
        clearTimeout(time);
        target.css('display', 'none');
    }

    setTimeout(function () {
        if ($(".mymovie").length > 0) {
            $(".logob").css({
                "display": "block"
            });
        }
    }, 1000);
})();
//# sourceMappingURL=script.js.map
