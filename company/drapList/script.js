'use strict';

(function () {
    'use strict';

    var byId = function byId(id) {
            return document.getElementById(id);
        },
        loadScripts = function loadScripts(desc, callback) {
            var deps = [],
                key = void 0,
                idx = 0;

            for (key in desc) {
                deps.push(key);
            }

            (function _next() {
                var pid = void 0,
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
            })();
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



    var drapListElement = $('.drapList');
    var drapListElementLen = $('.drapList').length;
    var drapStatus = false;
    var sorttablePath = {
        path: null,
        index: 0,
        el: null
    };

    var sorttablesSumList = Sortable.create(byId('drapSumList'), {
        group: "words",
        animation: 150,
        onStart: function onStart(evt) {
            sorttablePath.path = evt.to
            sorttablePath.index = evt.oldIndex;
            sorttablePath.el = evt.item
            console.log(sorttablePath.index)
        },
        onEnd: function onEnd (evt) {
            statistics();
        }
    });

    var sorttableMainList = Sortable.create(byId('mainDarpList'), {
        group: "detail",
        animation: 150,
        onStart: function onStart(evt) {

        },
        onEnd: function onEnd (evt) {

        }
    });

    var sorttableDetailList = Sortable.create(byId('drapFormList'), {
        group: "detail",
        animation: 150,
        onStart: function onStart(evt) {

        },
        onEnd: function onEnd (evt) {

        }
    });

    var setDraplist = function setDraplist(drap, len) {
        while (len--) {
            var sorttablelist = Sortable.create(drap[len], {
                group: "words",
                animation: 150,
                onStart: function onStart(evt) {
                    sorttablePath.path = evt.to
                    sorttablePath.index = evt.oldIndex;
                    sorttablePath.el = evt.item
                    // console.log(sorttablePath.index)
                },
                onEnd: function onEnd(evt) {
                    statistics();
                }
            });
        }
    };

    setDraplist(drapListElement, drapListElementLen);

    var UpdetaElementDrapList = function UpdetaElementDrapList() {
        drapListElement = $('.drapList');
        drapListElementLen = $('.drapList').length;
        setDraplist(drapListElement, drapListElementLen);
    };

    /**
     * 统计行数
     * @constructor
     */
    var statistics = function statistics() {
        $('.drapList').each(function () {
            var element = $(this).children();
            var len = element.length;
            if (len > 3) {
                toggleDrapFullMessage('#drapFullMessage', '一行最多放置三个,请放置下一列！', 1000);

                if(sorttablePath.index === 0 ){
                    $(sorttablePath.path).prepend($(sorttablePath.el));
                } else {
                    $(sorttablePath.path).children().eq(sorttablePath.index-1).after($(sorttablePath.el));
                }

                return false;
            }
        });
    };


    /**
     * 显示提示新信息
     * @param obj
     * @param val
     * @param time
     */
    var toggleDrapFullMessage = function toggleDrapFullMessage(obj, val, time) {
        $(obj).text(val).fadeIn(function () {
            setTimeout(function () {
                $(obj).fadeOut();
            }, time);
        });
    };

    /**
     * 输出所有 drapList 列表的值
     * @param el
     * @returns {Array}
     */
    var sortingListSum = function sortingListSum(el) {
        var arr = [];
        $(el).each(function () {
            arr.push($(this).text());
        });
        return arr;
    };

    /**
     * 获取自定义的数组，返回一个结果数组
     * @param el
     * @returns {Array}
     */
    var mainDrapListInputVal = function mainDrapListInputVal(el) {
        var arr = [];
        $(el).each(function () {
            if ($(this).find('.mainDrapListInputCheck').is(':checked')) {
                arr.push($(this).find('.mainDrapListInputVal').val());
            }
        });
        return arr;
    };

    /**
     * 删除一个元素 插入到原始列表
     */
    // var closeButton = function closeButton(){
    //     $('.drapcloseA').each(function () {
    //         $(this).click(function (e) {
    //             $('#drapSumList').append($(this).parent());
    //             e.stopPropagation();
    //         });
    //     });
    //
    //     $('.drapDetailclose').each(function () {
    //         $(this).click(function (e) {
    //             $('#drapFormList').append($(this).parent());
    //             e.stopPropagation();
    //         });
    //     });
    // }


    /**
     * 测试结果
     */
    // $('#test').click(function () {
    //
    //     var elHeader = $('#header .drapContainer .drapList li span');
    //     var elFooter = $('#footer .drapContainer .drapList li span');
    //
    //     var elMainInputval = $('#mainDarpList li');
    //
    //     /**
    //      * 返回结果
    //      */
    //     console.log(sortingListSum(elHeader), sortingListSum(elFooter), mainDrapListInputVal(elMainInputval));
    // });

})();