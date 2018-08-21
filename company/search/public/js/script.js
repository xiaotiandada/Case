"use strict";

(function () {

    var json = [{
        a: 111,
        b: 222,
        c: 333
    }, {
        a: 123,
        b: 222,
        c: 333
    }, {
        a: 222,
        b: 222,
        c: 333
    }];

    var query = {
        "a": "aaa",
        "b": "bbb",
        "c": "ccc"
    };

    var filterJson = json.filter(function (json) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = Object.keys(json)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var key = _step.value;

                console.log(key);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return true;
    });

    var searchDoneFun = function searchDoneFun(value) {
        var searchListVal = $('#searchListVal');
        searchListVal.empty();
        console.log(value);
        for (var i = 0; i < value.length; i++) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = Object.keys(value[i])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var key = _step2.value;

                    searchListVal.append("<li title=" + key + "><a href=\"javascript:;\">" + value[i][key] + "</a></li>");
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    };

    var watchSearchFun = function watchSearchFun() {
        var val = _.lowerCase($(this).val());
        var arr = val.split(' ');
        console.log(arr);
        val = "?a=" + arr[0] + "&b=" + arr[1] + "&c=" + arr[2];
        console.log(val);
        jqAjax(val);
    };

    var searchClearFun = function searchClearFun() {
        $('#searchListVal').empty();
    };

    var jqAjax = function jqAjax(key) {
        var url = 'https://www.easy-mock.com/mock/5b7b7d1ba491c55eb2201526/search/query';
        $.ajax({
            url: url + key,
            type: 'get',
            dataType: 'json'
        }).done(function (data) {
            // console.log('成功' + JSON.stringify(data))
            var dataJson = data.data;
            searchDoneFun(dataJson);
        }).fail(function (xhr, status) {
            console.log(xhr.status, status);
            searchClearFun();
        }).always(function () {
            console.log('总会调用');
        });
    };

    $('#searchInput').bind('input propertychange', _.debounce(watchSearchFun, 700));
})();
//# sourceMappingURL=script.js.map
