// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

let input = prompt('do whatever you want');

let message = 'your input is ';

if (input === null) {
  message = message + 'null';
  let maybeNot = '';
  if (input.length !== 0) {
    maybeNot = 'not ';
  }
  message = message + maybeNot;
} else {
  message = message + input;
}

alert(message);
