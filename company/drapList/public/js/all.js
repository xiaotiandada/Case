'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
    'use strict';

    var byId = function byId(id) {
        return document.getElementById(id);
    },
        loadScripts = function loadScripts(desc, callback) {
        var deps = [],
            key,
            idx = 0;

        for (key in desc) {
            deps.push(key);
        }

        (function _next() {
            var pid,
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

    (function () {
        Sortable.create(byId('mainDarpList'), {
            group: "mainDarpList",
            animation: 150
        });

        Sortable.create(byId('drapSumList'), {
            group: "words",
            animation: 150,
            onEnd: function onEnd(evt) {
                statistics();
            }
        });
    })();

    var DrapList = function () {
        function DrapList() {
            _classCallCheck(this, DrapList);

            /**
             * 初始化获取元素和长度
             * @type {jQuery|HTMLElement}
             */
            this.drapListElement = $('.drapList');
            this.drapListElementLen = this.drapListElement.length;

            /**
             * 设置多个列表可互相拖动方法
             */
            this.setDraplist(this.drapListElement, this.drapListElementLen);
        }

        /**
         * 设置拖动列表
         * @param drap
         * @param len
         */


        _createClass(DrapList, [{
            key: 'setDraplist',
            value: function setDraplist(drap, len) {
                while (len--) {
                    Sortable.create(drap[len], {
                        group: "words",
                        animation: 150,
                        onEnd: function onEnd(evt) {
                            statistics();
                        }
                    });
                }
            }

            /**
             * 更新拖动列表元素和长度
             * @constructor
             */

        }, {
            key: 'UpdetaElementDrapList',
            value: function UpdetaElementDrapList() {
                this.drapListElement = $('.drapList');
                this.drapListElementLen = this.drapListElement.length;
                this.setDraplist(this.drapListElement, this.drapListElementLen);
            }
        }]);

        return DrapList;
    }();

    var draplist = new DrapList();

    /**
     * 添加新行
     */
    $('.addDrapList').each(function () {
        $(this).click(function (e) {
            var element = $(this).parent().parent().parent().children();
            var len = element.length;
            if (len >= 3) {
                toggleDrapFullMessage('#drapFullMessage', '最多不能超过三行！', 1000);
                return false;
            } else {
                $(this).parent().parent().parent().append($("#muban .drapContainer").clone(true));
            }
            e.stopPropagation();
            draplist.UpdetaElementDrapList();
        });
    });

    /**
     * 删除一行
     */
    $('.lessDrapList').each(function () {
        $(this).click(function (e) {
            var element = $(this).parent().prev().children();
            var len = element.length;
            if (len) {
                $(element).each(function () {
                    $('#drapSumList').append($(this));
                });
                $(this).parent().parent().remove();
                return false;
            } else {
                $(this).parent().parent().remove();
            }
            e.stopPropagation();
            draplist.UpdetaElementDrapList();
        });
    });

    /**
     * 统计行数
     * @constructor
     */
    function statistics() {
        $('.drapList').each(function () {
            var element = $(this).children();
            var len = element.length;
            if (len > 3) {
                toggleDrapFullMessage('#drapFullMessage', '一行最多放置三个，请添加新列或者放置下一列！', 1000);
                $('#drapSumList').append(element.last());
                return false;
            }
        });
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
                $(obj).fadeOut();
            }, time);
        });
    }

    $('#test').click(function () {
        var elMainDrapList = $('#mainDarpList li input[type=checkbox]');

        var elHeader = $('#header .drapContainer .drapList li a');
        var elFooter = $('#footer .drapContainer .drapList li');
        var elSumList = $('#drapSumList li');

        console.log(
        // sortingCheckedSum(elMainDrapList)
        sortingListSum(elHeader));
    });

    /**
     * 输出所有列表选中的值
     * @param el
     * @returns {Array}
     */
    function sortingCheckedSum(el) {
        var arr = [];
        $(el).each(function () {
            if ($(this).is(':checked')) {
                // console.log($(this).val())
                arr.push($(this).val());
            }
        });
        return arr;
    }

    function sortingListSum(el) {
        var arr = [];
        $(el).each(function () {
            arr.push($(this).text());
        });
        return arr;
    }
})();
//# sourceMappingURL=all.js.map
