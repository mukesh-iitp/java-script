/** Conditionals in JS */

/** if Statement */
console.log("if Statement");
// Print Number is even if Number is even

// let num1 = prompt('Please enter the number');
let num1=12;
if (num1 % 2 == 0) {
  console.log('Number is even');
}
console.log('Outside if');

/** if-else Statement */
console.log("if-else Statement");

let num2 = 11;
if (num2 % 2 == 0) {
  console.log('Even.');
} else {
  console.log('Odd.');
}

console.log('Outside if-else');



/**Email vaildation check. */
console.log("Email vaildation check.")

//Email Verification
// Input an email
// Length of the email > 11
// after . only 2 or 3 characters allowed
// minimum 3 characters between @ and .

// const email = prompt('Enter the email address');
let email="mukesh@gmail.com";
email.indexOf
const emailLen = email.length;
const dotIndex = email.lastIndexOf('.');
const atIndex = email.lastIndexOf('@');
const lastIndex = emailLen - 1;
if (
  emailLen < 11 ||
  lastIndex - dotIndex < 2 ||
  lastIndex - dotIndex > 3 ||
  dotIndex - atIndex < 3
)
  console.log('Invalid Email');
else
  console.log('Valid email');

