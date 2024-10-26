/**Methods in String in JS */

let str1='JavaScript is wonderful!';
let str2="It is dynamically typed.";
console.log(str1.__proto__);

console.log(str1.charAt(1));
console.log(str1.charAt(54)); //empty output
console.log(str1.concat(str2));
console.log(str1.length);   //length is a property
console.log(str1.indexOf('S'));
console.log(str1.indexOf('s'));
console.log(str1.indexOf('a')); //will return first occurance index
console.log(str1.indexOf('i'));
console.log(str1.indexOf('is'));
console.log(str1.indexOf('i',8));

console.log(str1.lastIndexOf('i'));

console.log(str1.toLowerCase());