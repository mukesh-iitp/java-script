function movie3(title, year) {
  const movieObj = {
    title: title,
    year: year,
    getDetails() {
      console.log(`
                  Title: ${this.title}
                  Year: ${this.year}
                  `);
    },
  };
  return movieObj;
}

const movie4 = movie3('The Avengers', 2012);
console.log(movie4);
movie4.getDetails();

const movie5 = movie3('The Avengers', 2012);
console.log(movie5);
movie5.getDetails();

//Constructor Function

function Movie(title, year) {
  this.title = title;
  this.year = year;

  this.getDetails = function () {
    console.log(`
                  Title: ${this.title}
                  Year: ${this.year}
                  `);
  };
}

//new keyword

const movie6 = new Movie('Avatar', 2013);
console.log(movie6);
movie6.getDetails();


function main(){
  //Refactor the gadget constructor function
  function Gadget(brand, type) {
  this.brand = brand;
  this.type = type;

  // Refactor the describeGadget() method here
  this.describeGadget= ()=> {
    return `This gadget is a ${this.type} from ${this.brand}.`;
  };
};
  const gadget1 = new Gadget("sony","laptop");
  console.log(gadget1.describeGadget());
  // Do not modify the return statement
 return Gadget; 
}
main();

console.log('***********************');