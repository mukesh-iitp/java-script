//IIFE (Immediately Invoked Function Expression )

(function(){
  console.log("IIFE");
})();

(function (a, b) {
  console.log(a ** b);
})(4, 2);

const user = (function () {
  const userData = {
    userName: 'John',
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName, updateAge };
})();

console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(3);


var counter = (function (){
  var count=0;
  return {
    increment:  function(){
      count++;
    },
    getcount:  function(){
      return count;
    }

  };
})();
counter.increment();
counter.increment();
console.log(counter.getcount());

// function main(){
  
//   const userAuth = (
//        let registeredUsers = [];
//     //Implement your IIFE here 
//     //It should return the registerUser function
//     function registerUser(username, password) {
//         if(checkCredentials(username,password)){
//           return `The user is already registered`;
//         }
//         else{
//         registeredUsers.push({ username: username, password: password });
//         return `The user have been added to the registeredUser array`;
//         }
//       }
  
//       function checkCredentials(username, password) {
//         for (let i = 0; i < registeredUsers.length; i++) {
//           if (
//             registeredUsers[i].username === username &&
//             registeredUsers[i].password === password
//           ) {
//             return true;
//           }
//         }
//         return false;
//       }
  
//       return {
//         registerUser: registerUser
//       };
//     }
//   )();
    

// console.log(userAuth.registerUser("user1","password123"));
// //Output: The user have been added to the registeredUser array
// console.log(userAuth.registerUser("user1","password123"));
// //Output : The user is already registered
// return userAuth;
// }