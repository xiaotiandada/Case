$(function () {
    $('#navitem ul li').on('click', function (e) {
        e.stopPropagation()
        var _that = $(this)
        _that.children('ul').slideToggle(300)
        _that.toggleClass('navshow')
    })

    $('#userlist').on('click', function () {
        onAjax('userlist')
    })
    $('#adminlist').on('click', function () {
        onAjax('adminlist')
    })

    function onAjax(url) {
        $.ajax({
            type: 'GET',
            url: './views/' + url + '.html',
            async: true,
            success: function (data) {
                if (data) {
                    $('#content').html(data)
                } else {
                    alert('错误')
                }
            },
            error: function (jqXHR) {
                alert("发生错误：" + jqXHR.status);
            }
        })
    }
})