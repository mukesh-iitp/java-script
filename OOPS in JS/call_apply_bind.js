const car3 = {
  name: 'car',
  color: 'black',
  getDetails(brand, seats) {
    console.log(
      `
      This is a ${this.color} ${this.name} of ${brand} company.
      It has ${seats} seats`
    );
  },
};

const bus = {
  name: 'bus',
  color: 'blue',
};

car3.getDetails('Audi', 5);

car3.getDetails.call(bus, 'Star', 50);
car3.getDetails.apply(bus, ['Gold', 30]);

const veh1 = car3.getDetails.bind(bus);
console.log(veh1);
veh1('silver', 20);
veh1('bronze', 45);


function User(displayName) {
  this.displayName = displayName;
}

const systemCredentials = {
  username: "system",
  password: "pass123"
};

User.prototype.login = function (enteredUsername, enteredPassword) {
  if (this.username === enteredUsername && this.password === enteredPassword) {
    console.log("Login successful!");
  } else {
    console.log("Login failed!");
  }
};

// Example usage with bind:
const user1 = new User("John Doe");
const loginFunction = user1.login.bind(systemCredentials);

loginFunction("system", "pass123"); // Expected output: "Login successful!"
loginFunction("wrongUsername", "wrongPassword"); // Expected output: "Login failed!"

