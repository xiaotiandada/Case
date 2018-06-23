(function () {
    var oScrollTop = document.getElementById('scrollTop')
    var clientHeight = document.documentElement.clientHeight
    var timer = null
    var isTop = false

    window.onscroll = function () {
        var sTop = document.body.scrollTop || document.documentElement.scrollTop
        if (sTop >= clientHeight) {
            oScrollTop.style.display = 'block'
        } else {
            oScrollTop.style.display = 'none'
        }
        if (!isTop) {
            clearInterval(timer)
        }
        isTop = false

        if (getScrollTop() + getWindowHeight() == getScrollHeight()) {　　　　
            oScrollTop.style.display = 'block'　　
        } else {
            oScrollTop.style.display = 'none'
        }
    }

    function oScrollTopF() {
        timer = setInterval(function () {
            var sTop = document.body.scrollTop || document.documentElement.scrollTop
            var ispeed = Math.floor(-sTop / 6)

            document.documentElement.scrollTop = document.body.scrollTop = sTop + ispeed

            isTop = true
            console.log(sTop - ispeed)
            console.log(sTop)
            if (sTop == 0) {
                clearInterval(timer)
            }
        }, 30)
    }

    oScrollTop.onclick = oScrollTopF


    /**
     * 用户屏幕过长无法显示
     */
    function getScrollTop() {　　
        var scrollTop = 0,
            bodyScrollTop = 0,
            documentScrollTop = 0;　　
        if (document.body) {　　　　
            bodyScrollTop = document.body.scrollTop;　　
        }　　
        if (document.documentElement) {　　　　
            documentScrollTop = document.documentElement.scrollTop;　　
        }　　
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　　
        return scrollTop;
    }

    //文档的总高度
    function getScrollHeight() {　　
        var scrollHeight = 0,
            bodyScrollHeight = 0,
            documentScrollHeight = 0;　　
        if (document.body) {　　　　
            bodyScrollHeight = document.body.scrollHeight;　　
        }　　
        if (document.documentElement) {　　　　
            documentScrollHeight = document.documentElement.scrollHeight;　　
        }　　
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;　　
        return scrollHeight;
    }
    //浏览器视口的高度
    function getWindowHeight() {　　
        var windowHeight = 0;　　
        if (document.compatMode == "CSS1Compat") {　　　　
            windowHeight = document.documentElement.clientHeight;　　
        } else {　　　　
            windowHeight = document.body.clientHeight;　　
        }　　
        return windowHeight;
    }



    /**
     *  jq 实现
     */
    // $(window).scroll(function () {
    //     var scrollTop = $(this).scrollTop();
    //     var scrollHeight = $(document).height();
    //     var windowHeight = $(this).height();
    //     if (scrollTop + windowHeight == scrollHeight) {
    //         alert("已经到最底部了！");
    //     }
    // });

})()