(function () {

    /**
     * 打印输出方法
     * @param val
     */
    let searchConLog = function (val) {
        console.log(val)
    }

    /**
     * 搜索完成方法
     * @param value
     */
    let searchDoneFun = function (value){
        let searchListVal = $('#searchListVal')
        let el =''
        for(let i = 0; i < value.length;i++){
            for(let key of Object.keys(value[i])) {
               el += `<li><a href="javascript:;">${value[i][key]}</a></li>`
            }
        }
        searchListVal.html(el)

        // 循环绑定单击事件
        $('#searchListVal li a').each(function () {
            $(this).click(function () {
                $('#searchInput').val($(this).text())
                // 单击选择之后是否调用ajax方法
                // watchSearchFun($(this).text())
                searchConLog($(this).text())
                $('#searchList').hide()
            })
        })

    }

    /**
     * 是否显示列表方法
     * @returns {boolean}
     */
    let isSearchListShow = function isSearchListShow () {
        let len = $('#searchListVal li').length
        if(len === 0){
            $('#searchList').hide()
            return false
        } else {
            $('#searchList').show()
        }
    }



    /**
     * ajax方法
     * @param data
     */
    let jqAjax = function (data){
        let url = 'http://yapi.demo.qunar.com/mock/16916/search/qeury'
        $.ajax({
            url: url,
            type: 'GET',
            data: data,
            dataType: 'json'
        }).done(function (data) {
            // 成功
            searchDoneFun(data)
        }).fail(function (xhr, status) {
            // 失败
            console.log(xhr.status, status)
        }).always(function () {
            // 总会
        })
    }
    jqAjax()

    /**
     * 监听搜索内容方法
     */
    let watchSearchFun = function (inputVal) {
        let val = _.trim(inputVal)
        // 调用打印输出方法
        searchConLog(val)
        if(val===''){
            // 输入框没有值是否清空
            // $('#searchListVal').empty()
            isSearchListShow()
            return false
        } else {
            jqAjax(val)
        }

    }


    // 监听内容改变执行事件
    $('#searchInput').bind('input propertychange', _.debounce(function () {
        watchSearchFun($(this).val())
    }, 700))
    // 鼠标聚焦执行事件
    $('#searchInput').focus(function () {
        isSearchListShow()
    })
    // 鼠标失焦执行事件
    $('#searchInput').blur(function () {
        setTimeout(function () {
            $('#searchList').hide()
        },300)
    })

})()
