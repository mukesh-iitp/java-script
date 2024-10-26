/**Functions in JS */
console.log("Functions in JS");

//creation definition of a function
function greetUser(){
    console.log("Hello User! Welcome to this app.")
}

//call or invoke the function.
greetUser();
greetUser();
//certain lines of code
greetUser();

/**Function with parameters */
// console.log("Function with parameters");
// function greetUser(userName){
//     console.log("Hello "+userName+"! Welcome to this app.")
// }

// greetUser("Ravi");
// greetUser("Riya");


console.log("Function with parameters");
function greetUser(userName, medium){
    console.log("Hello "+userName+'! Welcome to this '+medium+'.');
}

greetUser("Ravi", "Apple");
greetUser("Riya","Website");


function printDetails(name){
    console.log('Name:'+name);
    calculateAge(1994);
}

function calculateAge(birthYear){
    console.log(2024-birthYear);
}

printDetails('Ravi');