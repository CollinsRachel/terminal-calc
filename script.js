var readlineSync = require('readline-sync');
 
// Wait for user's response.

const DIVIDE = '/';
const ADD = '+';
const SUB = '-';
const MULT = '*';

const whichOp = () => {
    // const DIVIDE = '/';
    // const ADD = '+';
    // const SUB = '-';
    // const MULT = '*';


    //take out next line to adjust program to take entire statement ?
    let opChoice = readlineSync.question("What operation would you like to perform? ");
    if (opChoice === DIVIDE || opChoice === ADD || opChoice === SUB || opChoice === MULT) {
        return opChoice;
    } else {
        console.log("This is not a valid operation");
        whichOp();
    }
}

//take in two numbers and push them to an array
//call verifNums
const getNumbers = () => {
    const NUMS = [];
    NUMS.length = 2;
    const INVALID = "Please enter a valid number. "

    for(let i = 0; i < NUMS.length; i++) {
        while(!NUMS[0]) {
            num1 = readlineSync.question("Please enter the first number: "); 
            if(verifNums(num1)){
                NUMS[0] = num1;
            } else {
                console.log(INVALID);
            }
        }
        while(!NUMS[1]) {
            num2 = readlineSync.question("Please enter the second number: ")
            if(verifNums(num2)){
                NUMS[1] = (num2);
            } else {
                console.log(INVALID);
                !NUMS[1];
            }
        }
    }
    return NUMS;
}
//takes in an array itterates through it and verfies that the elements are 
//numbers
const verifNums = (num) => {
    let isANum = null; 
    if(!isNaN(num)) {
        isANum = true;
    } else {
        isANum = false;
    }
    return isANum; 
}

//perform calculation
const calc = (op, array) => {
    let result; 
    if(op == ADD) {
        result = array[0] + array[1];
    } else if(op == SUB) {
        result = array[0] - array[1];
    } else if(op == MULT) {
        result = array[0] * array[1];
    } else if(op == DIVIDE) {
        result = array[0] / array[1];

    }

    return result.toFixed(2);
}

const calculatin = () => {
    let done =  calc(whichOp(), getNumbers()); 
    return done; 
}

console.log("The result is: " + calculatin() + "!"); 