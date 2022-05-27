// Alternative way to declare function types with interfaces
interface AddFn {
    (a: number, b:number): number;
}

let add: AddFn;
add = (n1: number, n2:number) => {
    return n1 + n2;
}
// ///////////////////////////////////////////////////////////

interface Named {
    readonly name: string;
    outputName? :string; // Optional property

    changeName?(n: string): void; // Optional method
}

interface Greetable extends Named{
    greet(phrase: string): void;
}

class Person implements Greetable {
    
    constructor(public name: string, public age: number) {};

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

let user1: Greetable;
user1 = new Person('Antonio', 33);

user1.greet('My name is....WHAAAT??...')
