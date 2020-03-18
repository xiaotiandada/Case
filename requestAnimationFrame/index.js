var Animate = /** @class */ (function () {
    function Animate(element) {
        this.element = element;
    }
    Animate.prototype.then = function (options) {
        var el = document.querySelector(this.element);
        var cssOptions = Object.entries(options);
        for (var _i = 0, cssOptions_1 = cssOptions; _i < cssOptions_1.length; _i++) {
            var iterator = cssOptions_1[_i];
            var key = iterator[0];
            var val = iterator[1];
            el.style[key] = val;
        }
        return this;
    };
    return Animate;
}());
