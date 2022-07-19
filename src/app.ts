// This is a decorator factory pattern
function Logger(targetString: string) {
    return function(constructor: Function) {
        console.log(targetString);
        console.log(constructor);
    };
}

// Decorators run when my class is discovered by JS
// NOT when it is instanciated
@Logger('LOGGING-PERSON')
class Person {
    name = 'Antonio';

    constructor() {
        console.log('Creating Person object.');
    }
}

const person = new Person();
console.log(person);
