/** Break Vs Continue */
console.log("Break Vs Continue");
const inputs = [
  11,
  32,
  12,
  45,
  65,
  94,
  7,
  78,
  10,
  100,
  131,
  67,
  81,
  92,
  53,
];
const evenNumbers = [];

for (let i of inputs) {
  if (i % 2 !== 0) {
    continue;
  }
  evenNumbers.push(i);

  if (evenNumbers.length === 5) {
    break;
  }

  console.log(evenNumbers);
}
console.log(evenNumbers);




function sumOfArray(arr2){
    
  let sum=0

  for (let i of arr2) {
    if (i % 2 === 0 && i%5!==0) 
      sum+=i;
    //console.log(sum);
  }
  return sum;
}

let arr2=[1,6,8,3,5,20,10];
console.log(sumOfArray(arr2));
