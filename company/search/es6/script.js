(function () {

    let json = [{
        a: 111,
        b: 222,
        c: 333
    },
        {
            a: 123,
            b: 222,
            c: 333
        },
        {
            a: 222,
            b: 222,
            c: 333
        }
    ]

    let query = {
             "a": "aaa",
             "b": "bbb",
             "c": "ccc"
         }

    let filterJson = json.filter(function(json){
        for(let key of Object.keys(json)){
            console.log(key)
        }
        return true
    })





    let searchDoneFun = function (value){
        let searchListVal = $('#searchListVal')
        searchListVal.empty()
        console.log(value)
        for(let i = 0;i <value.length;i++){
            for(let key of Object.keys(value[i])) {
                searchListVal.append(`<li title=${key}><a href="javascript:;">${value[i][key]}</a></li>`)
            }
        }

    }

    let watchSearchFun = function () {
        let val = _.lowerCase($(this).val())
        let arr = val.split(' ')
        console.log(arr)
        val = `?a=${arr[0]}&b=${arr[1]}&c=${arr[2]}`
        console.log(val)
        jqAjax(val)
    }

    let searchClearFun = function () {
        $('#searchListVal').empty()
    }

    let jqAjax = function (key){
        let url = 'https://www.easy-mock.com/mock/5b7b7d1ba491c55eb2201526/search/query'
        $.ajax({
            url: url + key,
            type: 'get',
            dataType: 'json'
        }).done(function (data) {
            // console.log('成功' + JSON.stringify(data))
            let dataJson = data.data
            searchDoneFun(dataJson)
        }).fail(function (xhr, status) {
            console.log(xhr.status, status)
            searchClearFun()
        }).always(function () {
            console.log('总会调用')
        })
    }

    $('#searchInput').bind('input propertychange', _.debounce(watchSearchFun, 700))

})()
