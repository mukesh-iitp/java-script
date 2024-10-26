function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;
}
Vehicle.prototype.getVehDetails = function () {
  console.log(
    `Name: ${this.name}\nColor: ${this.color}\nWheels: ${this.wheels}`
  );
};

function Car1(color, brand, seats) {
  Vehicle.call(this, 'car', 'Blue', 4);
  this.brand = brand;
  this.seats = seats;
}

Car1.prototype = Object.create(Vehicle.prototype);

Car1.prototype.getDetails = function () {
  console.log(`
      The ${this.color} ${this.name} is of ${this.brand} company.
      It has seating for ${this.seats} people`);
};

const car2 = new Car1('Black', 'Audi', 5);
car2.getDetails();
console.log(car2);
console.log(car2.__proto__);
car2.getVehDetails();
