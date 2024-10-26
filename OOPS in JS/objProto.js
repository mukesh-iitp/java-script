const car1 = {
  getDetails(name) {
    console.log(`Your car is ${name}`);
  },
};

const car2 = Object.create(car1);
console.log(car2);
console.log(car2.__proto__);
car1.getDetails('Audi');

//Object.assign

const user={
  name: 'Ravi',
  age: 25,
  email: 'ravi@mail.com'
};

const updates={
  address: 'New Delhi'
};

function updateProfile(user, updates) {
  // Implement the code here
  return Object.assign({}, user, updates);
}

console.log(user);
const updatedProfile=updateProfile(user, updates);
console.log(updatedProfile);

function freezeProfile(user) {
  // Implement the code here
    return Object.freeze(user);
}




