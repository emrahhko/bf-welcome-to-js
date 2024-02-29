// #todo

'use strict';

let input = prompt('enter something');

let response;
if (input === null) {
  response = ':(';
} else {
  let didConfirm = confirm('is this what you meant to input?\n-> ' + input);
  if (didConfirm === false) {
    response = 'try again';
  } else {
    response = 'great!';
  }
}

alert(response);

/*
  - mark each variable use with a different color (like in the ?variables lens)
  - use lines to connect each variable declaration to it's uses
  - put a mark by each line where `responses` could be used
  - put a mark by each line where `didConfirm` could be used
  - circle each conditional statement
  - identify each path through the program with a different color
  - find each user interaction
  - how can each interaction change which path the program takes?

  done with these questions?  try "ask me" and "random line"
*/

let input1 = prompt('enter something else');

let response1;
if (input1 === null) {
  response1 = ':(';
} else {
  let didConfirm1 = confirm('is this what you mean to input \n => ' + input1);
  if (didConfirm1 === false) {
    response1 = 'try again';
  } else {
    response1 = 'niceee!';
  }
}

alert(response1);
