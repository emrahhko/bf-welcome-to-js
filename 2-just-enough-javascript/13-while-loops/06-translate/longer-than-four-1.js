// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/
let input = null;
// input <- ''
while (input === null || input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}

alert(input);
// WHILE: input !== null && input.length <= 4
//   input <- prompt('enter something longer than 4 characters')
// :END WHILE

// alert(input)
