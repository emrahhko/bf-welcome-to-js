'use strict';

let language = 'JavaScript';

if (language[language.length - 1].toLowerCase() === 't') {
  console.log("the last character is 't'");
} else {
  console.log("the last character is not 't' ");
}

let lastChars = language[language.length - 1].toLowerCase();

console.log(lastChars);

if (lastChars === 't') {
  console.log("the last character is 't'");
} else {
  console.log("the last character is not 't'");
}

// access the last character of the string
//  then use strict equality to enter the conditional
// if (__) {
//   console.log(language);
// }
