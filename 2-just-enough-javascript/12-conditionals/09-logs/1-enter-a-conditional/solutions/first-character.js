'use strict';

let language = 'JavaScript';
// let language1 = 'assembly';

if (language[0].toLowerCase() === 'j') {
  console.log("The first character is 'j'");
} else {
  console.log("The first character is not 'j'");
}

// access the first character of the string
//  then use strict equality to enter the conditional

let firstChars = language[0].toLowerCase();
console.log(firstChars);

if (firstChars === 'j') {
  console.log("The first character is 'j' ");
} else {
  console.log("The first character is not 'j' ");
}
