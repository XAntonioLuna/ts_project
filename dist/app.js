"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(targetString) {
    console.log('LOGGER FACTORY');
    return function (constructor) {
        console.log(targetString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    console.log('TEMPLATE FACTORY');
    return function (constructor) {
        console.log('Rendering template');
        const hookElement = document.getElementById(hookId);
        const p = new constructor();
        if (hookElement) {
            hookElement.innerHTML = template;
            hookElement.querySelector('h1').textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Antonio';
        console.log('I am the constructor');
    }
};
Person = __decorate([
    Logger('LOGGING-PERSON'),
    WithTemplate('<h1> Tu mama </h1>', 'app')
], Person);
const person = new Person();
class Product {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
//# sourceMappingURL=app.js.map