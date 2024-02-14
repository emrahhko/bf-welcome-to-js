'use strict';

/* Reverse

  Data In:


  Data Out:


  Test Cases:


*/
debugger;
/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = input + ' -> ' + reversed;
console.log(message);

/* --- display message to the user --- */

alert(message);

// My code

let reponse = null;
while (reponse === null) {
  reponse = prompt('enter some text to reverse');
  console.log(reponse);
}

let reverse = '';
for (let char of reponse) {
  reverse = char + reverse;
  console.log(reverse);
}

let msg = reponse + ' -> ' + reverse;
console.log(msg);

alert(msg);
