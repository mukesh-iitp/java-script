/** Operators in JS */

// 1. Assignment Operator(=)
console.log("1. Assignment Operator (=)");
let a = 10;
let b = a;
let c = (a = 20);

console.log(a);
console.log(b);
console.log(c);

// 2. Arithematic Opeartors (+, -, *, /, %)
console.log("2. Arithematic Opeartors (+, -, *, /, %)")
console.log(10 + 2);
console.log(10 - 2);
console.log(10 * 2);
console.log(10 / 2);
console.log(11 % 2);

// 3. More Arithematic Operators (++, --, +, -, **)
console.log("3. More Arithematic Operators (++, --, +, -, **)");
let i = 2; 
console.log(i);//2
i = i + 1; //i=3
i++;    //i=3
console.log(i++); //i=4
i=i++; //i=4
console.log(i);//5
console.log(++i); //i=6
console.log(i ** 3); 

i=6;
console.log(i);
i=i-1; //i=5
i--; //i=5
console.log(i); //i=4;
console.log(i--); //i=4;
i=--i; //i=2
console.log(--i); //i=1;

// 4. Augmented Assignment Opeartor
// (+=, -=,*=, /=,.....)
console.log("4. Augmented Assignment Opeartor (+=, -=,*=, /=,.....)");
i = i+3; //i=4
i += 3; //i=7

console.log(i); //i=7


// 5. Comparison Operator
//(==, !=, <, <=, >, >=, ===, !==)
console.log("5. Comparison Operator (==, !=, <, <=, >, >=, ===, !==)");
console.log(5 == 6);
console.log(5 != 5);
console.log(5 <= 5);

console.log('5' == 5);
console.log('5' === 5);
console.log('6' != 6);
console.log('6' !== 6);

let birthYear = 17;
let rightToVote = birthYear >= 18;
console.log(rightToVote);

// 6. Logical Operators (&&, ||, !)
console.log("6. Logical Operators (&&, ||, !)");
let grade = 65;
let scholarship = 80;
let eligile = grade > 60 && scholarship > 70;
console.log(eligile);

let m1 = 55;
let m2 = 55;
let m3 = 45;
let eligibility = m1 > 60 || m2 > 60 || m3 > 60;
console.log(eligibility);

let rightToGiveVote =false;
console.log(!rightToGiveVote)


console.log("Interesting in Java Script");
console.log("In && operator -  last truthy and first falsy value returned");
console.log(1 && 3);
console.log(3 && 1 && 4 && 7);
console.log(3 && 1 && 4 && 7 && 0 && 6 && 5);
console.log(3 && 1 && 4 && null && 7 && 0 && 6 && 5);

console.log("In || operator -  last truthy and first falsy value returned");
console.log(0 || null || undefined || false || NaN );
console.log(0 || "String" || null || undefined || false || NaN );

