/* Data Types
    1. Object
    2. Primitive Datatypes
*/

/* *********************************** *
***        Primitive DataTypes       ***
/* *********************************** */

// Number (64 bit)

let num = 10;
console.log(typeof num);
num="raju";
console.log(typeof num);

// String
const firstName = "falak's book";
const lastname = 'Chandni';
const nickName = `Tom`;

console.log(typeof firstName);
console.log(typeof lastname);
console.log(typeof nickName);

// Boolean
let bool = false;
console.log(typeof bool);

// Undefined
let p;
console.log(typeof p);
console.log(p);

// Null
let q = null;
console.log(q);
console.log(typeof q);

// Symbol(ES6/2015)

// BigInt(ES2020)
let number1 = 10n;
console.log(typeof number1);


// Interesting Things
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE*10);

let num3 = Infinity

console.log(12/0);
console.log(188/Infinity);