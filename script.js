var readlineSync = require('readline-sync');
 
// Wait for user's response.

const whichOp = () => {
    const DIVIDE = '/';
    const ADD = '+';
    const SUB = '-';
    const MULT = '*';


    //take out next line to adjust program to take entire statement ?
    let opChoice = readlineSync.question("What operation would you like to perform? ");
    if (opChoice === DIVIDE || opChoice === ADD || opChoice === SUB || opChoice === MULT) {
        console.log("valid operand");
        getNumbers();

    } else {
        console.log("That is not a valid operation");
        whichOp();
    }
}

/* const getNumbers = () => {
     et  numX = readlineSync.question("Please enter a number: ");
     //if this number is a valid number execute code block
    const numbersArr = [];
    let currArrLength = numbersArr.length;
        if(!isNaN(numX) && currArrLength < 3) {
            numbersArr.push(numX);
        } else {
            console.log("Please enter a valid number.");
            getNumbers();
        }
    console.log(numbersArr);
}
  */


//take in two numbers and push them to an array
//call verifNums
const getNumbers = (num1, num2) => {

}
//takes in an array itterates through it and verfies that the elements are 
//numbers
const verifNums = (Array) => {

}

whichOp();
 