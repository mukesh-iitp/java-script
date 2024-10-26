//constructor function
function Vehicle(name, color, wheels) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;

    // this.getDetails = function () {
    //     console.log(`
    //       The ${this.name} is ${this.color} in color.
    //       It has ${this.wheels} wheels
    // `);
    // };
}

Vehicle.prototype.getDetails = function(){
        console.log(`
          The ${this.name} is ${this.color} in color.
          It has ${this.wheels} wheels
    `);
}

const car = new Vehicle('Car', 'blue', 4);
car.getDetails();
console.log(car.hasOwnProperty('getDetails'));

//Class expressions
// const Vehicle = class{
    
// }



//Classes in JS

class VehicleCl{
    //Properties
    //static
    static vName='Static Name';

    //Private
    #regNumber; //this is private to class

    //By default public in nature
    name;
    color;
    wheels;
    //Constructors (optional)
    constructor(name, color, wheels, number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number;
    }

    //Private Methods
    #getNumber(number){
        return number;
    }
    //Methods
    getDetails(){
        console.log(
            `The ${this.name} is ${this.color} in color.\n
            It has ${this.wheels} wheels
            The registration no is ${this.#getNumber(this.#regNumber)}.` //Private property accessible inside the class
        );
    }

    //static Method
    static showMsg(){
        console.log('This is static method of Class');
    }
}

//instantiating a class
const veh1=new VehicleCl('Scooter','Grey',2, 8866);
veh1.getDetails();
console.log(veh1.hasOwnProperty("name"));
console.log(veh1.hasOwnProperty("getDetails"));

console.log(veh1);



function main() {
    // Implement your class here
    class Person {
        name;
        age;
        gender;

        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }

        speak() {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
        }
    }

    class Student {
        person;
        major;
        gpa;

        constructor(person, major, gpa) {
            this.person = person;
            this.major = major;
            this.gpa = gpa;
        }

        study() {
            console.log(`I am studying ${this.major} and my GPA is ${this.gpa}.`);
        }

        speak() {
            console.log(`Hello, my name is ${this.person.name} and I am ${this.person.age} years old.
                I am also a student studying ${this.major}.`); 
        }
    }

    return { Person, Student };
}

// Usage example:
const { Person, Student } = main();

const person1 = new Person("John", 20, "M");
person1.speak();

const stud1 = new Student(person1, "CS", 9);
stud1.speak();
stud1.study();


//Encapsulatoin in JS
console.log('Encapsulation in JS')

veh1.name = "Car";  //here name is accessable to anyone
veh1.getDetails();

//By default properties are public and optional in nature
//To make a property private in js we need to mention hash(#) sign before the property.

// console.log(veh1.#regNumber); //#regNumber is no accessible outside the class
//veh1.#regNumber=2233; 
// veh1.#getNumber();


// veh1.showMsg();
VehicleCl.showMsg();
console.log(veh1.vName);
console.log(VehicleCl.vName);



