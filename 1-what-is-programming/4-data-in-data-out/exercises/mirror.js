'use strict';

/* Mirror

  Data In:


  Data Out:


  Test Cases:


*/

/* --- gather user input --- */
debugger;

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);

// My code

let reponse = null;
while (reponse === null) {
  reponse = prompt('enter some text to mirror');
  console.log(reponse);
}

let miroir = ' | ';
for (let character of reponse) {
  miroir = character + miroir + character;
  console.log(miroir);
}

alert(miroir);
