/* Functions in JS */

const sum1 = sum(5, 6); //possible because funtions are hoisitic in js
console.log(sum1);

//Function Declaration
function sum(a, b) {
  return a + b;
}

const addition = sum(6, 8);
console.log(addition);


// console.log(sum2(1, 8));  //values can't be used before creation

// Function expression
var sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(1, 8));
console.log(sum2());
console.log(sum2(8));
