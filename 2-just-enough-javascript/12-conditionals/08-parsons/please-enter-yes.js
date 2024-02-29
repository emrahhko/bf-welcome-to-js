'use strict';

/* parsons-collapse: hint
  1. gather user input
  2. check if the input is exactly "yes"
  3. alert your message to the user
*/

let input = prompt('please enter "yes"');

let output = '';
if (input.toLowerCase() === 'yes') {
  output = 'you entered "yes"';
} else {
  output = '"' + input + '" is not "yes"';
}

alert(output);

let input1 = prompt("please enter 'yes' ");

let output1 = '';
if (input1.toLowerCase() === 'yes') {
  output1 = "you entered 'yes' ";
} else {
  output1 = '"' + input1 + '"is not "yes"';
}

alert(output1);

// begin distractors

// if (input.toUpperCase() === 'yes') { // distractor

// } else if { // distractor

// output === 'you entered "yes"'; // distractor

// output === '"' + input + '" is not "yes"'; // distractor

// #todo
