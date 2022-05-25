"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    greet(phrase) {
        console.log(phrase + ' ' + this.name);
    }
}
let user1;
user1 = new Person('Antonio', 33);
user1.greet('My name is....WHAAAT??...');
//# sourceMappingURL=app.js.map