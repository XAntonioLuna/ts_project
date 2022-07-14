// Generics
// const names: Array<string> = [];  // Same as string[]

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout( () => {
//         resolve('WTF is this');

//     }, 2000);
// })

// promise.then(data => {
//     data.split(' ');
// })

// Using extends (aka. Constraints) we can limit the types that can
// be passed successfully to these generic types
function merge<T extends object, U extends object>(obj1: T, obj2: U){
    return Object.assign(obj1, obj2);
}

const mergeObj = merge({name: 'Antonio', hobbies: ['books']}, {age: 34});
console.log(mergeObj);
console.log(mergeObj.age);

interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value.'
    if (element.length === 1) {
        description = 'Got 1 element.';
    } else if (element.length > 1) {
        description = ' Got ' + element.length + ' elements.';
    }

    return [element, description];
}

console.log(countAndDescribe('Que pex!'));
console.log(countAndDescribe(['papa', 'mama', 2]))
console.log(countAndDescribe([]))


// cool key of constraint
function  extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U){
    return 'Value ' + obj[key];
}

console.log(extractAndConvert({'name': 'tu mama'}, 'name'));

class DataStorage<T extends string | number | boolean> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T){
        if(this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems(){
        return[...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Antonio');
textStorage.addItem('Barbie');
textStorage.removeItem('Antonio');
console.log(textStorage.getItems());

interface courseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal(
    title: string,
    description: string,
    date: Date
) : courseGoal {
    // Partial allows us to allocate an object variable without all its properties
    let course: Partial<courseGoal> = {}
    course.title = title;
    course.description = description;
    course.completeUntil = date;
    return course as courseGoal;
}

const names: Readonly<string[]> = ['Antonio', 'Barbara', 'Victoria'];
// names.push('Lalo');
console.log(names[0])
