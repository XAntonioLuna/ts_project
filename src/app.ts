// Intersection types

type Admin = {
    name: string;
    privileges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: 'Antonio',
    privileges: ['do-stuff'],
    startDate: new Date()
}

type Combinable = number | string;
type Numeric = boolean | number;

type Universal = Combinable & Numeric // This ends up being number

// ------------------------------------

//  type guards
function add (a: number | string, b: number | string) {
    if(typeof a === 'string' || typeof b === 'string'){   // This here is a type guard
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Admin | Employee;

function printEmployeeInformation(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);

    if('privileges' in emp){
        console.log('Privileges: ' + emp.privileges);
    }

    if('startDate' in emp) {
        console.log('Start date: ' + emp.startDate);
    }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Barbie', startDate: new Date()});

class Car {
    drive() {
        console.log('Driving...');
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(load : number) {
        console.log('Loading cargo ' + load);
    }
}

const v1 = new Car();
const v2 = new Truck();

type Vehicle = Car | Truck

function useVehicle(vehicle: Vehicle){
    vehicle.drive();
    if(vehicle instanceof Truck){
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);
// ------------------------------------

// Union discrimination
// It is a coding pattern

interface Bird {
    kind: 'bird';
    flyingSpeed: number;
}

interface Horse {
    kind: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse

function printSpeed(animal: Animal) {
    let speed: Number;

    switch(animal.kind) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }

    console.log('Moving at speed: ' + speed + 'MpH');
}

printSpeed({kind: 'bird', flyingSpeed: 30});
printSpeed({kind: 'horse', runningSpeed: 10});

// ------------------------------------

// Type casting
// const userInput = <HTMLInputElement>document.getElementById('user-input')!;
// const userInput = document.getElementById('user-input') as HTMLInputElement;
const userInput = document.getElementById('user-input');

(userInput as HTMLInputElement).value = 'Hello humanoid';
// ------------------------------------
