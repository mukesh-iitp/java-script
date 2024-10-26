/** Default Parameters */
console.log("Default Parameters");
// function sum(num1, num2)
function sum(num1 = 0, num2 = 0) 
{
  console.log(`Sum of the numbers is: ${num1 + num2}`);
}

sum(4, 5);
sum(4); //Nan without default parameters.
sum();
