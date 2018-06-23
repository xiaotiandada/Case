(function () {
    var banner = document.getElementById('banner')
    var list = document.getElementById('list')
    var buttons = document.getElementById('buttons').getElementsByTagName('span')
    var prev = document.getElementById('prev')
    var next = document.getElementById('next')
    var len = 3
    var index = 1
    var timer = null;
    var interval = 3000
    var animated = false
    var rang = 500

    function animate(offset) {
        if (offset == 0) {
            return
        }
        animated = true
        var time = 300
        var inteval = 10
        var speed = offset / (time / inteval)
        var newLeft = parseInt(list.style.left) + offset

        var go = function () {
            if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) <
                    newLeft)) {
                list.style.left = parseInt(list.style.left) + speed + 'px'
                setTimeout(go, inteval)
            } else {
                list.style.left = newLeft + 'px'
                if (newLeft > -rang) {
                    list.style.left = -rang * len + 'px'
                }
                if (newLeft < (-rang * len)) {
                    list.style.left = -rang + 'px'
                }
                animated = false
            }
        }
        go()

    }



    function showButtons() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'on') {
                buttons[i].className = ''
                break
            }
        }
        buttons[index - 1].className = 'on'
    }


    function play() {
        timer = setTimeout(function () {
            next.onclick()
            play()
        }, interval)
    }

    function stop() {
        clearTimeout(timer)
    }


    next.onclick = function () {
        if (animated) {
            return
        }
        if (index == 3) {
            index = 1
        } else {
            index++
        }
        animate(-rang)
        showButtons()
    }
    prev.onclick = function () {
        if (animated) {
            return
        }
        if (index == 1) {
            index = 3
        } else {
            index--
        }
        animate(rang)
        showButtons()
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return
            }
            if (this.className == 'on') {
                return
            }
            var myIndex = parseInt(this.getAttribute('index'))
            var offset = -rang * (myIndex - index)
            animate(offset)
            index = myIndex
            showButtons()
        }
    }

    banner.onmouseover = stop
    banner.onmouseout = play

    play()

})();