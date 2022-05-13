type Combinable = number | string;
type CombinationDescriptor = 'as-string' | 'as-number'

function combine(input1: Combinable, input2: Combinable, resultType: CombinationDescriptor){
    let result
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
}

const combinedAges = combine(33, 37, 'as-string');
console.log(combinedAges);

const combinedNumbers = combine('33', '37', 'as-number');
console.log(combinedNumbers);

const combinedNames = combine('Jesus', 'Antonio', 'as-string');
console.log(combinedNames);
