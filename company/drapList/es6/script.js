(function () {
    'use strict';

    let byId = function (id) { return document.getElementById(id); },

    loadScripts = function (desc, callback) {
            let deps = [], key, idx = 0;

            for (key in desc) {
                deps.push(key);
            }

            (function _next() {
                let pid,
                    name = deps[idx],
                    script = document.createElement('script');

                script.type = 'text/javascript';
                script.src = desc[deps[idx]];

                pid = setInterval(function () {
                    if (window[name]) {
                        clearTimeout(pid);

                        deps[idx++] = window[name];

                        if (deps[idx]) {
                            _next();
                        } else {
                            callback.apply(null, deps);
                        }
                    }
                }, 30);

                document.getElementsByTagName('head')[0].appendChild(script);
            })()
        },

        console = window.console;

        if (!console.log) {
        console.log = function () {
            alert([].join.apply(arguments, ' '));
        };
    }



    /**
     * 设置可拖动排序列表
     */

    let sorttablesSumList = Sortable.create(byId('drapSumList'), {
        group: "words",
        animation: 150,
        onEnd: function(evt){
            statistics()
        }
    });

    let sorttableMainList = Sortable.create(byId('mainDarpList'), {
        group: "mainDarpList",
        animation: 150
    });

    let drapListElement = $('.drapList')
    let drapListElementLen=  $('.drapList').length
    let drapStatus = false

    let setDraplist = function(drap, len) {
        while (len--){
            let sorttablelist = Sortable.create(drap[len], {
                group: "words",
                animation: 150,
                onEnd: function(evt){
                    statistics()
                }
            });


            sorttablelist.option('disabled', drapStatus)
            console.log(sorttablelist)

        }
    }

    setDraplist(drapListElement, drapListElementLen)

    let UpdetaElementDrapList = function(){
        drapListElement = $('.drapList')
        drapListElementLen =  $('.drapList').length
        setDraplist(drapListElement, drapListElementLen)
    }


    /**
     * 统计行数
     * @constructor
     */
    let statistics = function () {
        $('.drapList').each(function () {
            let element = $(this).children()
            let len = element.length
            if(len > 3 ){
                toggleDrapFullMessage('#drapFullMessage', '一行最多放置三个，请添加新列或者放置下一列！', 1000 )
                $('#drapSumList').append(element.last())
                return false
            }
        })
    }

    /**
     * 显示提示新信息
     * @param obj
     * @param val
     * @param time
     */
    let toggleDrapFullMessage = function (obj, val, time) {
        $(obj).text(val).fadeIn(function () {
            setTimeout(function () {
                $(obj).fadeOut()
            }, time)
        })
    }

    /**
     * 输出所有 drapList 列表的值
     * @param el
     * @returns {Array}
     */
    let sortingListSum = function (el) {
        let arr = []
        $(el).each(function () {
            arr.push($(this).text())
        })
        return arr
    }

    /**
     * 获取自定义的数组，返回一个结果数组
     * @param el
     * @returns {Array}
     */
    let mainDrapListInputVal = function (el) {
        let arr = []
        $(el).each(function () {
            if($(this).find('.mainDrapListInputCheck').is(':checked')){
                arr.push($(this).find('.mainDrapListInputVal').val())
            }
        })
        return arr
    }


    /**
     * 删除一个元素 插入到原始列表
     */
    $('.close').each(function () {
        $(this).click(function (e) {
            $('#drapSumList').append($(this).parent())
            e.stopPropagation()
        })
    })

    /**
     * 测试结果
     */
    $('#test').click(function () {

        let elHeader = $('#header .drapContainer .drapList li span')
        let elFooter = $('#footer .drapContainer .drapList li span')

        let elMainInputval = $('#mainDarpList li')


        /**
         * 返回结果
         */
        console.log(
            sortingListSum(elHeader),
            sortingListSum(elFooter),
            mainDrapListInputVal(elMainInputval)
        )

    })

    $('#toggle').on('click', function () {
        let stateMainList = sorttableMainList.option('disabled')
        sorttableMainList.option('disabled', !stateMainList)

        let stateSumList = sorttablesSumList.option('disabled')
        sorttablesSumList.option('disabled', !stateSumList)
        drapStatus= !drapStatus
        console.log(drapStatus)

        UpdetaElementDrapList()
    })

})();



