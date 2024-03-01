'use strict';

let input = prompt('enter "cat"');

let path = 0;
if (input === 'cat') {
  path = 1;
} else if (input === null) {
  path = 2;
} else {
  path = 3;
}

console.log(path);

let input1 = prompt('enter "frog"');

let path1 = 0;

if (input1.toLowerCase() === 'frog') {
  path1 = 1;
} else if (input1.toLocaleLowerCase() !== 'frog') {
  path1 = 2;
} else {
  path1 = 3;
}

console.log(path1);
