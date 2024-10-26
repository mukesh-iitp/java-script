/** Higher Order Functions */
console.log('Higher Order Functions');
//Function accepting a function as an argument
//or A function that returns a funtion

// function higherOrder(fn){
//   return;
// }

const inputs = [2, 5, 7, 8, 9, 12, 20];

function calculate(input, operation) {
  const output = [];
  for (let number of input) {
    output.push(operation(number));
  }
  return output;
}

function cubic(number) {
  return number * number * number;
}

function squareN(number) {
  return number * number;
}

const cube3 = calculate(inputs, cubic);
console.log(cube3);
const square2 = calculate(inputs, squareN);
console.log(square2);


//Complete the createUserObjects function
//Do not alter the starter Code
const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
function createUserObjects(ids,names,images){
    //Implement your function here
    return ids.map((id, index) => {
      return {
            id: id,
            name: names[index],
            image: images[index]
            };
    });
}