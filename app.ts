// const person: {
//     name: string;
//     age: number;
// }
const person = {
    name: 'Antonio',
    age: 33,
    hobbies: ['Videogames', 'Grilling']
};

console.log(person.name)
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}