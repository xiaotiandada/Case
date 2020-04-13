"use strict";
// https://medium.com/@oldmo860617/%E5%8D%81%E5%88%86%E9%90%98%E5%B8%B6%E4%BD%A0%E4%BA%86%E8%A7%A3-typescript-decorator-48c2ae9e246d
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Decorator 基礎語法與概念
function decorator1(target) {
    console.log('this is decorator1', target);
}
function decorator2(target) {
    console.log('this is decorator2', target);
}
// Decoraotr 是由下往上執行的（Bottom-up）
// this is decorator2 [Function: Blog]
// this is decorator1 [Function: Blog]
var Blog = /** @class */ (function () {
    function Blog() {
    }
    Blog = __decorate([
        decorator1,
        decorator2
    ], Blog);
    return Blog;
}());
// Class Decorator
function classDecorator(target) {
    console.log('classDecorator', target);
}
// Method Decorator
function methodDecorator(target, name, descriptor) {
    console.log('Method decorator', target, name, descriptor);
}
// Property Decorator
function propertyDecorator(target, propertyName) {
    console.log('property decorator', target, propertyName);
}
// Parameter Decorator
function parameterDecorator(target, propertyKey, parameterIndex) {
    console.log('parameter decorator', target, propertyKey, parameterIndex);
}
var Blog1 = /** @class */ (function () {
    function Blog1(author) {
        this.blogs = [];
        this.author = author;
    }
    Blog1.prototype.getBlogNum = function () {
        return this.blogs.length;
    };
    Blog1.prototype.calculateValue = function (num) {
        return num * this.blogs.length;
    };
    __decorate([
        propertyDecorator
    ], Blog1.prototype, "author", void 0);
    __decorate([
        methodDecorator
    ], Blog1.prototype, "getBlogNum", null);
    __decorate([
        __param(0, parameterDecorator)
    ], Blog1.prototype, "calculateValue", null);
    Blog1 = __decorate([
        classDecorator
    ], Blog1);
    return Blog1;
}());
// Decorator factories
function Logger(LogString) {
    return function (constructor) {
        console.log('Logger', LogString, constructor);
    };
}
var Persons = /** @class */ (function () {
    function Persons() {
        this.name = 'kyle';
        console.log('Creating a person ...');
    }
    Persons = __decorate([
        Logger('I am Kyle')
    ], Persons);
    return Persons;
}());
