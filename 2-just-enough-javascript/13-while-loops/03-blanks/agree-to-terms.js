// #todo

'use strict';

debugger;

let loggedIn = false;

while (!loggedIn) {
  let didAgree = confirm('do you agree to our terms of service?');
  if (didAgree === true) {
    loggedIn = true;
  } else {
    alert('not an option, you must agree');
  }
}

alert('welcome to social media!');

let loggedIn1 = false;

while (!loggedIn1) {
  let didAgree1 = confirm(' again do you agree?');
  if ((didAgree1 = true)) {
    loggedIn1 = true;
  } else {
    alert('not possible, you must agree');
  }
}

alert('welcome my man!');

/* distractors:

    prompt

*/
