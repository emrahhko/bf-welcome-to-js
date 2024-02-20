'use strict';

debugger;

/*  Stepping Through

  click the [debug] button to start the program in your debugger

  see the little arrow at the top of the pane on the right?
    it looks like this:  ->·
    this evaluates one statement at a time

  your challenge: step through to each commented line and pause
    look around the debugger, what do you see?

*/

let didClickOk = confirm('please click "ok":');

// this line display popup that ask to user  click on "ok".
// the result is stored on the variable "didClickok"

// if else statement to check the result of "didClikOk"

if (didClickOk !== true) {
  alert(':(');
  // if the user didn't ok this part (if) of the code block is executed
} else {
  alert('thank you!');
}
// if the user did click ok this (else) part of the code block is executed.
