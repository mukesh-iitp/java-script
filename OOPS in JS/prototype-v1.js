function Cinema(title) {
  this.title = title;
}

const movie7 = new Movie('The Avengers');

movie7.year = 2012;
console.log(movie7);
console.log(movie7.__proto__);

const movie8 = new Movie('Avatar');
console.log(movie8);
console.log(movie8.__proto__.__proto__);
console.log(Object.__proto__);
console.log(movie8.__proto__.__proto__.__proto__);
