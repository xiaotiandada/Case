"use strict";
// https://github.com/mqyqingfeng/Blog/issues/109
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// log
function log(target, name, descriptor) {
    var _this = this;
    var method = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var ret;
        try {
            ret = method.apply(_this, args);
            console.log('success s');
        }
        catch (error) {
            console.log(error);
        }
        return ret;
    };
    return descriptor;
}
var Utils = /** @class */ (function () {
    function Utils() {
    }
    Utils.prototype.add = function (a, b) {
        return a + b;
    };
    __decorate([
        log
    ], Utils.prototype, "add", null);
    return Utils;
}());
var utils = new Utils();
console.log(utils.add(2, 4));
// debounce
function _debounce(fn, wait) {
    var timeout = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout)
            clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply.apply(fn, __spreadArrays([_this], args));
        }, wait);
    };
}
function debounce(wait) {
    return function (target, name, descriptor) {
        var callback = descriptor.value;
        if (typeof callback !== 'function') {
            throw new SyntaxError('Only functions can be debounce');
        }
        var fn = _debounce(callback, wait);
        return __assign(__assign({}, descriptor), { value: function () {
                fn();
            } });
    };
}
var EventInit = /** @class */ (function () {
    function EventInit() {
    }
    EventInit.prototype.scrollFn = function () {
        console.log(111);
    };
    EventInit.prototype.scroll = function () {
        window.addEventListener('scroll', this.scrollFn);
    };
    __decorate([
        debounce(300)
    ], EventInit.prototype, "scrollFn", null);
    return EventInit;
}());
var eventInit = new EventInit();
eventInit.scroll();
