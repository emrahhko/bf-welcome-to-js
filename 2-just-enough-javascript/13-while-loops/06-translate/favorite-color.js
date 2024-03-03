// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   ?   --- */
// let input = '';
// let message = 'your favorite color is ';
// // message <- 'your favorite color is '
// while (input === null || input === '') {
//   input = prompt('what is your favorite color? ');
// }

// let response = confirm("is '" + input + "' correct? ");
// if (response === true) {
//   message = message + input;
// } else {
//   message = "don't lie enter your favorite color.";
// }

// alert(message);

let message1 = 'your favorite color is ';

while (true) {
  let input1 = prompt('what is your favorite color? ');

  if (input1 === null) {
    alert('there is no escape');
    continue;
  } else {
    let favoriteColor = confirm('is this correct? ' + input1);

    if (favoriteColor) {
      message1 += input1;
      break;
    } else {
      alert('no, then enter your favorite color.');
      continue;
    }
  }
}

alert(message1);

// unconfirmed <- true

// WHILE: unconfirmed
//   input <- prompt('what is your favorite color?')
//   IF: input === null
//     alert('there is no escape')
//   ELSE:
/* ---   ?   --- */
//     confirmed <- confirm('is this correct? "' + input + '"')
//     IF: confirmed === true
//       message <- message + input
//       unconfirmed <- false
//     :END IF
//   :END IF
// :END WHILE

/* ---   ?   --- */

// alert(message)
