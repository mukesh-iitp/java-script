/**Type Conversion */

console.log("Type Conversion");

/**Converting to String */
console.log("converting to string. Method: String()");
//String();
console.log(100); //number
console.log(String(100));   //string
console.log(true);
console.log(String(true));
console.log(null);
console.log(String(null));
console.log(undefined);
console.log(String(undefined));

//toString()
console.log("Method: toString()");
console.log((123).toString());
console.log((true).toString());
//console.log((null).toString()); //Type Error
// console.log((undefined).toString()); //Type Error


/**Converting to a Number */
console.log("Converting to a Number. Method: Number()");
console.log(Number('25'));
console.log(Number('Value'));
console.log(Number(true));
console.log(Number(false));

//Unary + Operator --- works on Variables
console.log("Unary + Operator ");
let d="123";
console.log(+d);
let e="123Palak";
console.log(+e);

//parseFloat
console.log("***parseFloat***");
let num4=1.2;
console.log(num4);
console.log(parseFloat('123.45'));
console.log(parseFloat('123.45f'));
console.log(parseFloat('f123.45'));
console.log(parseFloat('123f.45'));
console.log(parseFloat(1/3));


//parseInt
console.log("***parseInt***");
console.log(parseInt('12345'));
console.log(parseInt('12345f'));
console.log(parseInt('f12345'));
console.log(parseInt('12f345'));
console.log(parseInt('123.45'));


/**Converting to Boolean */
//Boolean()
console.log("Converting to Boolean. Method: Boolean()");
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(3));
console.log(Boolean(null));
console.log(Boolean(undefined));