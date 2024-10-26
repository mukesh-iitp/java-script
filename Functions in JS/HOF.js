/** JS Higher Order Functions */

//map()
console.log('map()');
const inputs1 = [2, 4, 6, 8, 7];

// const squaredArray = inputs.map(function (
//   currentElement
// ) {
//   return currentElement * currentElement;
// });

const squaredArray = inputs1.map(
  (num) => num * num
);

console.log(squaredArray);
