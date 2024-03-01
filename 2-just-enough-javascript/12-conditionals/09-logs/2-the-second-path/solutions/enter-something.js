'use strict';

let input = prompt('enter something');

let path = 0;
if (input === null) {
  path = 1;
} else if (input === '') {
  path = 2;
} else {
  path = 3;
}

console.log(path);

let input1 = prompt('enter something else');

let path1 = 0;

if (input1 === null) {
  path1 = 1;
} else if (input1 === '') {
  path1 = 2;
} else {
  path1 = 3;
}

console.log(path1);
