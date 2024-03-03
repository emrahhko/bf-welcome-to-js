'use strict';

/* Be Excited


  Data In:

  Data Out:

  Test Cases:

*/

/* ---  ?  --- */
let input = null;

while (input === null || input === '') {
  input = prompt('enter something, it will become excited');
}

let output = '';
let index = input.length - 1;

while (index >= 0) {
  let nextChar = input[index];
  output = nextChar + '!' + output;
  index = index - 1;
}

alert(output);
// input <- null
// WHILE: input === null
//   input <- prompt('enter something, it will become excited')
// :END WHILE

/* ---  ?  --- */

// output <- input
// IF: input[input.length - 1] !== '!'
//   output <- output + '!'
// :END IF

/* ---  ?  --- */

// alert(output)
