/** Ternary Operator */
console.log('Ternary Operator');
let number1 = 10;
let number2 = 599;
let number3 = 50;
let greater = 
  number1 > number2
    ? number1 > number3
      ? number1
      : number3
    : number2 > number3
      ? number2
      : number3;

// if (num1 > num2) {
//   greater = num1;
// } else {
//   greater = num2;
// }

console.log('Greater number is ' + greater);
