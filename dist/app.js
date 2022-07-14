"use strict";
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const mergeObj = merge({ name: 'Antonio', hobbies: ['books'] }, { age: 34 });
console.log(mergeObj);
console.log(mergeObj.age);
function countAndDescribe(element) {
    let description = 'Got no value.';
    if (element.length === 1) {
        description = 'Got 1 element.';
    }
    else if (element.length > 1) {
        description = ' Got ' + element.length + ' elements.';
    }
    return [element, description];
}
console.log(countAndDescribe('Que pex!'));
console.log(countAndDescribe(['papa', 'mama', 2]));
console.log(countAndDescribe([]));
function extractAndConvert(obj, key) {
    return 'Value ' + obj[key];
}
console.log(extractAndConvert({ 'name': 'tu mama' }, 'name'));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('Antonio');
textStorage.addItem('Barbie');
textStorage.removeItem('Antonio');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let course = {};
    course.title = title;
    course.description = description;
    course.completeUntil = date;
    return course;
}
const names = ['Antonio', 'Barbara', 'Victoria'];
console.log(names[0]);
//# sourceMappingURL=app.js.map