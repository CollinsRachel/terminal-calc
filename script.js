var readlineSync = require('readline-sync');

// Wait for user's response.

const DIVIDE = "/";
const ADD = "+";
const SUB = "-";
const MULT = "*";

const whichOp = () => {

//take out next line to adjust program to take entire statement ?
  const opChoice = readlineSync.question("What operation would you like to perform? ");
  if (opChoice === DIVIDE || opChoice === ADD || opChoice === SUB || opChoice === MULT) {
    return opChoice;
  } else {
    console.log("This is not a valid operation");
    return whichOp();
  }
}

//take in two numbers and push them to an array
//call verifNums
const getNumbers = () => {
  const NUMS = [];
  const INVALID = "Please enter a valid number. "
  
  while(NUMS.length <= 2){
    if(NUMS.length === 0) {
    num = readlineSync.questionInt("Please enter the first number: ");
    if(isNaN(num)){
      console.log(INVALID);
    }else {
      NUMS.push(num);
    }
  }

    if(NUMS.length === 1) {
      num = readlineSync.questionInt("Please enter the second number: ");
      if(isNaN(num)){
        console.log(INVALID);
      }else {
        NUMS.push(num);
      }
    }
  break;
  }
  return NUMS;
}

//perform calculation
const calcu = (op, array) => {
  let result;
  if (op === ADD) {
    result = array[0] + array[1];
  } else if (op === SUB) {
    result = array[0] - array[1];
  } else if (op === MULT) {
    result = array[0] * array[1];
  } else if (op === DIVIDE) {
    result = array[0] / array[1];

  }

  return result;
}

const calculatin = () => {
  let done = calcu(whichOp(), getNumbers());
  return done;
}

console.log("The result is: " + calculatin() + "!");