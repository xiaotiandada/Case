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
    (function () {
        Sortable.create(byId('mainDarpList'), {
            group: "mainDarpList",
            animation: 150
        });

        Sortable.create(byId('drapSumList'), {
            group: "words",
            animation: 150,
            onEnd: function(evt){
                statistics()
            }
        });
    })()



    class DrapList {
        constructor () {
            /**
             * 初始化获取元素和长度
             * @type {jQuery|HTMLElement}
             */
            this.drapListElement= $('.drapList')
            this.drapListElementLen= this.drapListElement.length

            /**
             * 设置多个列表可互相拖动方法
             */
            this.setDraplist(this.drapListElement, this.drapListElementLen)

        }

        /**
         * 设置拖动列表
         * @param drap
         * @param len
         */
        setDraplist(drap, len) {
            while (len--){
                Sortable.create(drap[len], {
                    group: "words",
                    animation: 150,
                    onEnd: function(evt){
                        statistics()
                    }
                });

            }
        }

        /**
         * 更新拖动列表元素和长度
         * @constructor
         */
        UpdetaElementDrapList(){
            this.drapListElement = $('.drapList')
            this.drapListElementLen =  this.drapListElement.length
            this.setDraplist(this.drapListElement, this.drapListElementLen)
        }
    }
    let draplist = new DrapList()


    /**
     * 统计行数
     * @constructor
     */
    function statistics() {
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
    function toggleDrapFullMessage(obj, val, time) {
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
    function sortingListSum(el) {
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
    function mainDrapListInputVal(el) {
        let arr = []
        $(el).each(function () {
            arr.push($(this).val())
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

        let elMainInputval = $('.mainDrapListInputVal')


        /**
         * 返回结果
         */
        console.log(
            sortingListSum(elHeader),
            sortingListSum(elFooter),
            mainDrapListInputVal(elMainInputval)
        )


    })



})();



