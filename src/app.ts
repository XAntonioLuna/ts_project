// This is a decorator factory pattern
function Logger(targetString: string) {
    console.log('LOGGER FACTORY');
    return function(constructor: Function) {
        console.log(targetString);
        console.log(constructor);
    };
}


function WithTemplate(template: string, hookId: string){
    console.log('TEMPLATE FACTORY')
    return function(constructor: any){
        console.log('Rendering template');

        const hookElement = document.getElementById(hookId);
        const p = new constructor();

        if (hookElement){
            hookElement.innerHTML = template;
            hookElement.querySelector('h1')!.textContent = p.name;
        }

    }
}

// Decorators run when my class is discovered by JS
// NOT when it is instanciated
@Logger('LOGGING-PERSON')
@WithTemplate('<h1> Tu mama </h1>', 'app')
class Person {
    name = 'Antonio';

    constructor() {
        console.log('I am the constructor');
    }
}

const person = new Person();



// --
class Product {
    title: string;
    price: number;

    constructor (t: string, p: number){
        this.title = t;
        this.price = p;
    }

    getPriceWithTax(tax: number) {
        return this.price * (1 + tax);
    }
}
