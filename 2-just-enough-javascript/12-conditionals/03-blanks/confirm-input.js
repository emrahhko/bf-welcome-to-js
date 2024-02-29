// #todo

'use strict';

let input = prompt('enter something');

let response = ':(';
if (input !== null) {
  let didConfirm = confirm('is this what you meant to input?\n-> ' + input);
  if (didConfirm === true) {
    response = 'great!';
  } else {
    response = 'try again';
  }
}

alert(response);

let input1 = prompt('enter something else');

let response1 = ':(';
if (input1 !== null) {
  let didConfirm1 = confirm('is this what you mean to enter? \n=>' + input1);
  if (didConfirm1 === true) {
    response1 = 'Niceee!';
  } else {
    response1 = 'try one more time';
  }
}

alert(response1);

/* distractors:


    True

    Null


*/
