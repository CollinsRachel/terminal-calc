var readlineSync = require('readline-sync');
 
// Wait for user's response.

const whichOp = () => {
    const DIVIDE = '/';
    const ADD = '+';
    const SUB = '-';
    const MULT = '*';

    let opChoice = readlineSync.question("What operation would you like to perform? ");
    if (opChoice === DIVIDE || opChoice === ADD || opChoice === SUB || opChoice === MULT) {
        console.log("they've entered a valid operand");
    } else {
        console.log("That is not a valid operation");
        whichOp();
    }
}
whichOp();

 