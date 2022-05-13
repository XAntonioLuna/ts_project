function add (n1: number, n2: number){
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (n: number) => void){
    let result = n1 + n2;
    cb(result)
}

printResult(add(12, 58));

let combineValues: (a: number, b: number) => number;
combineValues = add

printResult(combineValues(11, 58));

addAndHandle(10, 58, (n: number) => {
    console.log(n);
})

addAndHandle(10, 57, printResult);
