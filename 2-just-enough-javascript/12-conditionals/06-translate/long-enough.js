// #todo

'use strict';
/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */

debugger;

let input = prompt('enter anything longer than 5 characters');

let message = 'you canceled';

if (input !== null) {
  if (input.length < 5) {
    message = 'too short';
  } else if (input.length > 5) {
    message = 'long enough';
  } else if (input.length === 5) {
    message = 'exactly FIVE !!';
  }
}

alert(message);

/* ---   ?   --- */
//     message <- 'too short'
//   ELSE: IF: input.length > 5
/* ---   ?   --- */
//     message <- 'long enough'
//   ELSE:
/* ---   ?   --- */
//     message <- 'exactly 5!'
//   :END IF
// ELSE:
/* ---   ?   --- */
//   message <- 'you canceled :('
// :END IF

/* ---   ?   --- */

// alert(message)
