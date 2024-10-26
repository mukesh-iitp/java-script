
console.log('Object Lieterals')

const car = {
  name: 'BMW'
}

console.log(car.__proto__);

console.log('-------------------------------------------------')

function MotionPicture(title) {
  this.title = title;
  //   this.getDetails = function () {
  //     console.log(`Title: ${this.title}`);
  //   };
}

MotionPicture.prototype.getDetails = function () {
  console.log(`Title: ${this.title}`);
};

MotionPicture.prototype.year = 2012;

const movie9 = new MotionPicture('The Avengers');

movie9.year = 2012;
console.log(movie9);
console.log(movie9.__proto__);

const movie10 = new Movie('Avatar');
console.log(movie10);
console.log(movie10.__proto__.__proto__.__proto__);


// Instructions:
// 1. Refactor the Book constructor to add the method to the prototype chain instead of creating copies.
// 2. Ensure that isClassic method is accessible to all instances of Book object.


function Book(title, author, publicationYear) {
  this.title = title;
  this.author = author;
  this.publicationYear = publicationYear;

}
Book.prototype.isClassic = function () {
  const currentYear = 2023;
  const age = currentYear - this.publicationYear;
  if (age >= 50) {
    return "The book is from the classic collection";
  }


  return "The book is not a classic collection book";
};


// Create a few book objects
const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1990);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);


// Consoling output
console.log(book1.isClassic()); // Output: 63
//console.log(book2.calculateAge()); // Output: 74
console.log(book3.isClassic()); // Output: 98

