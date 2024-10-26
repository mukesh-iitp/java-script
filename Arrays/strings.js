/**Traversing a String */

console.log('Traversing a String');

function countChars(str, ch){
    let count=0;
    for(let i=0; i<str.length; i++){
        //console.log(str.charAt(i));
        if(str.charAt(i)===ch)
            count++;

    }
    console.log('Occurance count of '+ch+' is: '+count);
}


let str='JavaScript is an dynamically typed language';
let charToFind='a';
countChars(str,'a');

//calculate no of words present in the string.
function countWords(str) {
    let count = 0;
    for (let i =0 ;i<str.length ; i++)
     {
       if (str[i]==" ")
         count++;
     }
     console.log('Occurance count of words is: '+count);
  }
countWords(str);
countWords('');


/**Method of String */
console.log('Method of String');

//includes()
console.log('includes()');
console.log(str.includes('is'));
console.log(str.includes('iS'));


//replace()
console.log('replace()');
//replace first occurance of word and return the new string
console.log(str.replace('is','was')); 


//replaceAll()
console.log('replaceAll()');
console.log(str.replaceAll('a', '@'));


//trim()
//remove the leading and trailing spaces of string
console.log('trim()');
strtemp='    Ram is a good Boy.  ';
console.log(strtemp.trim());


//substring()
console.log('substring()');
console.log(str.substring(3));
console.log(str.substring(3,12));
console.log(str.substring(-4));
console.log(str.substring(-4,12));
console.log(str.substring(-4,-12));


//slice()
console.log('slice()');
console.log(str.slice(3));
console.log(str.slice(3,12));
console.log(str.slice(-9));
console.log(str.slice(-9,-3));
// console.log(str.slice(-4,12));

//split()
console.log('split()');
let words=str.split(" ");
console.log(words);
