'use strict';

/* Flip Five

  Data In:


  Data Out:


  Test Cases:


*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 5 characters long --- */

  if (input !== null && input.length === 5) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);

// My code (it's a copy paste of yours)

let reponse = null;
while (reponse === null) {
  reponse = prompt(
    'enter something. \n\n if it has 7 characters it will be reversed',
  );
  console.log(reponse);
}

let mess = '';
if (reponse.length === 7) {
  for (let character of reponse) {
    mess = character + mess;
    console.log(mess);
  }
} else {
  mess = reponse;
  console.log(mess);
}

alert(mess);
