// const add = (a: number, b: number = 1) => a + b;   // In one liners like this there is an implicit return statement
// printOutput(add(5));
// printOutput(add(5,2));

const printOutput: (a:number | string) => void = output => console.log(output);

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}


const hobbies = ['Videogames', 'Baking', 'Collectibles'];
const activeHobbies = ['Hiking'];

// We can push items into a constant because 
// activeHobbies stores a reference to memory which isn't altered
// it doesn't matter if the memory it points to is altered
activeHobbies.push(...hobbies)  // ... is called spread operator and basically references all elements in an array (mind blown)

const person = {
    firstName: 'Antonio',
    age: 33
}

// Spread operator also works with objects!
const copiedPerson = { ...person };

// doing this only copies the reference to the original object
const anotherPerson = person;

// ... can be used as something called Rest operators
const add = (...numbers: number[]) => {
    return numbers.reduce( (curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};

console.log(add(1,2,3,20.2,100,5));

// Array and object destructuring

const [element1, element2, rest] = hobbies;
console.log(element1, element2, rest);

// this also applies to objects 
// names should match or instead use an alias
const {firstName: userName, age} = person;
console.log(userName);
console.log(age);
