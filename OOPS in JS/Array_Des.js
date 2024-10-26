const fruits = [
  'Apple',
  'Mango',
  'Kiwi',
  'Berry',
  'banana',
  'lichi',
];

//Binding Pattern

const [p, , , k] = fruits;
console.log(p, k);

const [l, m, ...[, be, ba]] = fruits;
console.log(ba);
