"use strict";
const printOutput = output => console.log(output);
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
const hobbies = ['Videogames', 'Baking', 'Collectibles'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);
const person = {
    firstName: 'Antonio',
    age: 33
};
const copiedPerson = Object.assign({}, person);
const anotherPerson = person;
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
console.log(add(1, 2, 3, 20.2, 100, 5));
const [element1, element2, rest] = hobbies;
console.log(element1, element2, rest);
const { firstName: userName, age } = person;
console.log(userName);
console.log(age);
//# sourceMappingURL=app.js.map