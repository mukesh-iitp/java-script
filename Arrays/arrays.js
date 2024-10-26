/**Arrays in JS */

console.log("Arrays in JS");

const historyMarks=[10,20,13,14,15,9,8];
console.log(historyMarks);
console.log(historyMarks[5]);
console.log(historyMarks[historyMarks.length-1]);
console.log(historyMarks[8]);
historyMarks[0]=20;
console.log(historyMarks);

const studentDetails=["Alex", 1995, "Dancing", 87];
console.log(studentDetails);

const arr=new Array('Riya', 'Rahul', 'Sonam');
console.log(arr);

/**Arrays in jS are Dynamic*/
console.log("Arrays in jS are Dynamic");

const cities=[
    'Mumbai',
    'Delhi',
    'Calcutta',
    'Jaipur',
    'Chennai'
];

console.log(cities.length);
cities[2]='Kolkata';
console.log(cities);

/**Methods of Arrays */
console.log("Methods of Arrays");

/**Adding an element */
//push()
const teams=['CSK', 'RCB', 'MI', 'RR'];
//teams.push('GT');   //ad at end
//console.log(teams);
const pushArray=teams.push('GT');
console.log(pushArray); //returing lenght of new array

//unshift()
//teams.unshift('KKR');
const unshiftArray=teams.unshift('KKR'); //return lentgh of new array
console.log(unshiftArray);
console.log(teams); //added at start
console.log(teams.length);

/**Removing an element */
//pop
teams.pop(); //popping at the end
teams.pop();
console.log(teams);

//shift
teams.shift();
console.log(teams);

/** Check the element is present or not */
console.log('Check the element is present or not');
//indexOf()
const RCBIndex = teams.indexOf('RCB');
console.log(RCBIndex);
const gtIndex = teams.indexOf('GT');
console.log(gtIndex);

//includes()
const rcbIncludes = teams.includes('RCB');
console.log(rcbIncludes);

//slice() and splice()
console.log('slice() and splice()');
console.log(teams);
// console.log(teams.slice(1));
console.log(teams.slice(-1));
console.log(teams);

//splice()
teams.splice(2, 1, 'GT', 'LSG');
console.log(teams);

//concat()
const teams2 = [
  'India',
  'Austrailia',
  'New Zealand',
];
const mergedTeams = teams.concat(teams2);
console.log(mergedTeams);

/**Loop Over Arrays */
console.log('Loop Over Arrays');

const students=[
    'Tina',
    'Raj',
    'Bobby',
    'Seema',
    'Alex',
    'Sita'
]

// for(let i=0; i<students.length; i++){
//     console.log('Roll no '+(i+1)+': '+students[i]);
// }



//for .. in loop
console.log("For .. in Loop")
for (let i in students) {
    console.log(
      `Roll No ${Number(i) + 1}: ${students[i]}`
    );
  }
  
  //for .. of loop
  console.log("For .. of Loop")
  for (let student of students) {
    console.log(student);
  }
  

//Complete the findDuplicate function
// Do not alter the starter code.

let arr1 = [4, 2, 34, 4, 1, 12, 1, 4];
function findDuplicate(arr){
//Implement your function here
     var arrDup = [];
    for (var i in arr1) {
    if (arr.indexOf(arr1[i]) != i && arrDup.indexOf(arr1[i]) == -1) {
    arrDup.push(arr1[i]);
    }
    }
    return arrDup;
}    
console.log(findDuplicate(arr1));