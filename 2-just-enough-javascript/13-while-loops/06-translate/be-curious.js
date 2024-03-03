// #todo

'use strict';

/* Be Curious


  Data In:

  Data Out:

  Test Cases:

*/
debugger;
/* ---  ?  --- */
let input = null;
// input <- null
while (input === null || input === '') {
  input = prompt('enter something, it will become curious');
}
// WHILE: input === null
//   input <- prompt('enter something, it will become curious')
// :END WHILE

/* ---  ?  --- */
let output = '';

let index = input.length - 1;
while (index >= 0) {
  let nextChar = input[index];
  output = nextChar + '?' + output;
  index = index - 1;
}

alert(output);
// output <- input
// IF: input[input.length - 1] !== '?'
//   output <- output + '?'
// :END IF

/* ---  ?  --- */

// alert(output)
