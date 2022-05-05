let userInput: unknown; // Use unkown to have some type validation. "any" type has zero validation so it's better to use "unknown"
let userName: string;

userInput = 5;
userInput = 'Antonio';

if (typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number): never{  // "never" type is used when your function will literally never return a value
    throw {message: message, errorCode: code}
}

generateError('An error ocurred', 500)