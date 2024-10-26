/** Switch Statement */

// Simulate a traffic light using switch

let color1 = 'Yellow';
  let color=color1.toLowerCase();

switch (color) {
  case 'red':
    console.log('STOP! the light is red.');
    break;

  case 'yellow':
    console.log(' CAUTION! the light is yellow.');
    break;

  case 'green':
    console.log('GO AHEAD!');
    break;

  default:
    console.log('Invalid color');
}

function coffeeMachine(coffeeType) {
    let answer;
    coffeeType=coffeeType.toLowerCase();
    console.log(coffeeType);
    //Write your code here
    switch (coffeeType) {
        case 'regular':
            answer='$2.50';
            break;
        case 'latte':
            answer='$3.50';
            break;
        case 'cappuccino':
            answer='$4.00';
            break;
        case 'espresso':
            answer='$2.50';
            break; 
        default:
    }
	return answer;
}
let ans=coffeeMachine('REgular');
console.log(ans);