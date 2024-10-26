/**Nested Loop */

//Print multiplication table of 4

console.log('Nested Loop');
//let tableOf=4;
for(let tableOf=2; tableOf<=10; tableOf++){
    for(let t=1; t<=10; t++){
        // console.log('${tableOf}*${t}=${tableOf*t}');
        console.log(tableOf+" * "+t+" = "+tableOf*t);
    }
    console.log("*****************");
}

function sumOfPrimeNumbers(limit) {
    let answer = 0;
   //Write your code below
      for (let i = 2; i <= limit; i++) {
      let isPrime = true;
          // Only check divisibility up to the square root of i
          for (let j = 2; j * j <= i; j++) {
                if (i % j === 0) {
                  isPrime = false;
                  break; // No need to check further if divisible
                }
          }
              if (isPrime) {
                answer += i;
           }
      }
    return answer;
  }
  console.log(sumOfPrimeNumbers(50));