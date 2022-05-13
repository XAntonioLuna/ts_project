enum Role { CEO, PM, VP, SOFTWARE_ENG, MAGICIAN };

// enum Role { CEO = 10, PM = 'PM', VP, SOFTWARE_ENG, MAGICIAN }; // IS also valid

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];  // Tuple only supported in TS not JS
// } = {

const person = {
    name: 'Antonio',
    age: 33,
    hobbies: ['Videogames', 'Grilling'],
    // role: [2, 'CEO at Timmy\'s emporium']
    role: Role.MAGICIAN
};

// person.role = [1, 'Magician'];
// person.role[1] = 2 
// person.role.push('bruh'); // This is a bug with TS "push" shouldn't work with tuples...but it does

console.log(person)
for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if (person.role === Role.MAGICIAN) {
    console.log("Run you fools!")
}
