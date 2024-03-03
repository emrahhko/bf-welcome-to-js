// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */
let input = null;
// input <- null
while (input === null) {
  input = prompt('enter something');
}

let output = '';

if (input === '') {
  output = 'you entered nothing :(';
} else {
  output = 'Niceee you entered something -> "' + input + '"';
}

alert(output);
// WHILE: input === null
//   input <- prompt('enter something')
// :END WHILE

/* ---   ?   --- */

// output <- ''

// IF: input === ''
//   output <- 'you entered nothing :('
// ELSE:
//   output <- 'thank you for something!'
// :END IF

/* ---   ?   --- */

// alert(output)
