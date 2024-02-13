'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/

debugger;

let a = 'y';
let b = 'x';
let t = '';

console.log(a, b, t);

t = a;
a = b;
b = t;

console.log(a, b, t);

// what did you do in this program?
// what are the final values of `a` and `b`?
// how are they changed from the initial values

// is it possible to swap a and b without using t?

// My code

let month1 = 'september';
let month2 = 'july';
let month3 = ' ';

console.log(month1, month2, month3);

month3 = month1;
month1 = month2;
month2 = month3;

console.log(month1, month2, month3);

let color1 = 'black';
let color2 = 'red';
let color3 = ' ';

console.log(color1, color2, color3);

color3 = color1;
color1 = color2;
color2 = color3;

console.log(color1, color2, color3);
