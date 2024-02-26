// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('HackYourFuture'.includes('rFu')); // true
console.log('HackYourFuture'.includes('ture')); // true
console.log('HackYourFuture'.includes('Hac')); // true

console.log('HackYourFuture'.includes('Urf')); // false
console.log('HackYourFuture'.includes('CKy')); // false
console.log('HackYourFuture'.includes('Ure')); // false

console.log(' ByeBye'.includes(' Bye')); // true
console.log('. Car-Wash'.includes('. Car')); // true
console.log('3+1'.includes('+')); // true

console.log('Hint'.includes('hi')); // false
console.log('Ronald'.includes('road')); // false
console.log('image'.includes('Ima')); // false
