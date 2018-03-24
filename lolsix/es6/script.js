(function () {
    let navBtns = $('#nav-ul i')
    let navBtnli = $('#nav-ul li')
    let navhs = $('#nav li')
    let navhem = $('#nav em')
    let numLi = {
        numi: 1,
        numh: 1
    }
    let time = null

    navBtnli.on('mouseover', function () {
        let navI = $(this).children('i')
        run(navI, 'ans2_btn', numLi.numi)
    })
    navBtnli.on('mouseout', function () {
        let target = $(this).children('i')
        stop(target)
    })

    navhs.on('mouseover', function () {
        $(this).removeClass('ligb')
        let navh = $(this).children('em')
        run(navh, 'ans_btn', numLi.numh)
    })

    navhs.on('mouseout', function () {
        let target = $(this).children('em')
        stop(target)
        $(this).addClass('ligb')
    })

    function run(obj, name, num) {
        function runs() {
            if (num > 25) {
                num = 1
            }
            obj.css('display', 'block')
            obj.removeClass()
            obj.addClass(name + num)
            num++
            time = setTimeout(function () {
                clearTimeout(time)
                runs()
            }, 30)
        }
        runs()
    }

    function stop(target) {
        clearTimeout(time)
        target.css('display', 'none')
    }

    setTimeout(function () {
        if ($(".mymovie").length > 0) {
            $(".logob").css({
                "display": "block"
            });
        }
    }, 1000)


})()