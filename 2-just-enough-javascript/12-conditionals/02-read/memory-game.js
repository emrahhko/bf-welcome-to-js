// #todo

'use strict';

let thingToRemember = prompt(
  'enter some text, then remember it.\n\n' +
    'if you remember it correctly you win',
);

if (thingToRemember !== null) {
  let displayTheText = confirm(
    'would you like to see your text one more time?',
  );
  if (displayTheText) {
    alert(thingToRemember);
  }

  let guess = prompt('now try to remember what it was:');
  if (guess !== null && guess === thingToRemember) {
    alert('you win!');
  } else {
    alert('try again.');
  }
}

alert('good bye');

/*
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - how many scopes are there?
  - how many variables are declared in each scope?
  - how many semi-colons are there in this program?
  - how many conditionals are there in this program?
  - mark each possible path through this program
  - how does each interaction influence the path taken?

  done with these questions?  try "ask me" and "random line"
*/
let thingToRemember1 = prompt(
  'enter some other text, then remember it \n' +
    'if you remember it correctly you win',
);

if (thingToRemember1 !== null) {
  let displayTheText1 = confirm('would you like to see your text again?');
  if (displayTheText1) {
    alert(thingToRemember1);
  }
  let guess1 = prompt('now try to remember what it was;');
  if (guess1 !== null && guess1 === thingToRemember1) {
    alert('you win!');
  } else {
    alert('try again.');
  }
}

alert('goodBye');
