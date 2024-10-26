/** PURE Functions  */

function calculate(num1, num2) {
  return num1 * num2;
}

console.log(calculate(4, 6));

const discount = 25;

function calcDis(price) {
  discount = discount - 5;
  return price - discount;
}


function removeVowels(obj) {
  return { value: obj.value.replace(/[aeiou]/gi, "") };
}

function removeVowels1(obj) {
  let newObj ='';
  for(let i=0; i<obj.length; i++)
      {
          if(obj.charAt(i)=='a' || obj.charAt(i)=='e'|| obj.charAt(i)=='i'|| obj.charAt(i) =='o'|| obj.charAt(i)=='u')
             {
                 continue;
             }
          else
              {
                  newObj=newObj+obj.charAt(i);
              }
      }
  // Return the new object
  return newObj;
}

let strObj = { value: "Hello World" };
//For pure function
newObj = removeVowels(strObj);
removeVowels(strObj);
console.log(strObj.value);

