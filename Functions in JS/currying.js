// Currying in JS
console.log('Currying in jS')
// function add1(a, b, c) {
//   return a + b + c;
// }
// console.log(add1(2, 3, 4));

// function add2(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add2(2)(3)(4));

// function power(a,b){
//     return b ** a;
// }

function power(b) {
  return function (a) {
    return a ** b;
  };
}

const square = power(2);

console.log(square);

console.log(square(4));
console.log(square(3));
console.log(square(11));

const cube = power(3);
console.log(cube(4));
console.log(cube(2));




function pizzaPricing(size) {
  const basePrice = {
    small: 8.0,
    medium: 10.0,
    large: 12.0
  };

  return function (selectedToppings) {
    return function (quantity) {
      const toppingsCost = selectedToppings.length * 1.5;
      const totalPrice = basePrice[size] + toppingsCost;
      return (totalPrice * quantity).toFixed(2);
    };
  };
}
