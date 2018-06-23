// 图片预加载
(function ($) {
    function Preload(imgs, options) {
        this.imgs = (typeof imgs === 'string') ? [imgs] : imgs
        this.opts = $.extend({}, Preload.DEFAULTS, options)


        if (this.opts.order === 'ordered') {
            this._ordered()
        } else {
            this._unoredered()
        }
    }
    Preload.DEFAULTS = {
        order: 'unordered', //无序加载
        each: null, // 每一张图加载完毕执行
        all: null // 所有图片加载完毕后执行
    }

    Preload.prototype._ordered = function () { // 有序加载
        var opts = this.opts
        var imgs = this.imgs
        var len = imgs.length
        var count = 0

        //有序预加载
        function load() {
            var imgObj = new Image()
            $(imgObj).on('load error', function () {
                opts.each && opts.each(count)
                if (count >= len) {
                    //加载完成
                    opts.all && opts.all()
                } else {
                    load()
                }

                count++
            })
            imgObj.src = imgs[count]
        }
        load()

    }
    Preload.prototype._unoredered = function () { // 无序加载
        var imgs = this.imgs
        var opts = this.opts
        var count = 0
        var len = imgs.length

        $.each(imgs, function (i, src) {
            if (typeof src != 'string') return

            var imgObj = new Image()


            $(imgObj).on('load error', function () {
                opts.each && opts.each(count)

                if (count >= len - 1) {
                    opts.all && opts.all()
                }
                count++
            })
            imgObj.src = src
        })
    }

    $.extend({
        preload: function (imgs, opts) {
            new Preload(imgs, opts)
        }
    })
})(jQuery)