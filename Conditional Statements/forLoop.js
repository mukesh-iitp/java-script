/**Iterations - For Loop */

console.log("Iterations - For Loop");
//pring a message 10 times;

for(let i=1; i<=10; i++){
    console.log("10 times");
}


//print a series of number from 1 - 20
let j;
for (j = 1; j <= 20; j++) {
  console.log(j);
}

//print all the even numbers between 1 - 50
let k = 2;
for (; k <= 50; ) {
  console.log(k);
  k += 2;
}

//prime or not
let num = 7;
let isPrime = true;
for (let i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log('Prime');
} 
else
  console.log('Not Prime');

// Function to check if a number is composite
function isCompositeNumber(number) {
    if (number <= 1) {
      return 'Not a composite number';
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return 'Composit number'; // Found a divisor other than 1 and itself
      }
    }
 
    return "Not a composite number"; // Number is not divisible by any number other than 1 and itself
  }
console.log(isCompositeNumber(13));

function compoundInterest (principalAmount , annualInterestRate , numberOfYears)
{ 
    let answer=principalAmount;
 //Write your code here
 	for(let i=1;i<=numberOfYears;i++)
        {
            answer=answer+(answer*annualInterestRate);
           // principalAmount=answer;
        }
  return answer;
}
console.log(compoundInterest(500,0.08,5));