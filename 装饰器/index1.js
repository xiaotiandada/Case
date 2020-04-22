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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
// time
function timeFn(prefix) {
    var count = 0;
    return function (target, name, descriptor) {
        var fn = descriptor.value;
        return __assign(__assign({}, descriptor), { value: function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var label = prefix + "-" + count;
                count++;
                console.time("" + label);
                try {
                    return fn.apply(this, args);
                }
                catch (e) {
                    console.error(e);
                }
                finally {
                    console.timeEnd("" + label);
                }
            } });
    };
}
var sleep = function (time) { return new Promise(function (reject) { return setTimeout(reject, time); }); };
var Time = /** @class */ (function () {
    function Time() {
    }
    Time.prototype.timeCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('timeCount...');
                        return [4 /*yield*/, sleep(2000)];
                    case 1:
                        _a.sent();
                        console.log('timeCount');
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        timeFn('count')
    ], Time.prototype, "timeCount", null);
    return Time;
}());
var time = new Time();
time.timeCount();
// mixin
function mixin() {
    var mixins = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        mixins[_i] = arguments[_i];
    }
    return function (target) {
        if (!mixins.length) {
            throw new SyntaxError('mixin error');
        }
        for (var i = 0, l = mixins.length; i < l; i++) {
            var descs = Object.getOwnPropertyDescriptors(mixins[i]);
            var keys = Object.getOwnPropertyNames(descs);
            for (var j = 0, k = keys.length; j < k; j++) {
                var key = keys[j];
                if (!target.prototype.hasOwnProperty(key)) {
                    Object.defineProperty(target.prototype, key, descs[key]);
                }
            }
        }
    };
}
var SingMinin = {
    sing: function (sound) {
        alert(sound);
    }
};
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.singMatingCall = function () {
        this.sing('tweet tweet');
    };
    Bird = __decorate([
        mixin(SingMinin)
    ], Bird);
    return Bird;
}());
var bird = new Bird();
// bird.singMatingCall()
// redux???
// 尝试未果 还不熟
