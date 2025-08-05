let score="0"
console.log( typeof score);


let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

/*
Converting string to number

"33" => 33
"33abc" => NaN (Not a Number)
true => 1
false => 0
null => 0

*/

let isloggedIn = 1;
let booleanIsLoggedIn = Boolean(isloggedIn);
console.log( booleanIsLoggedIn);
 
/*
Converting number to boolean

1 => true
0 => false
"abc" => true
"" => false
null => false
undefined => false
NaN => false
*/

//                  opretions

let str1= "hello"
let str2= " i am"
let str3= str1+str2
console.log(str3); // "hello i am"

console.log("2" + 2); // "22"
console.log(1+1+"2"); // "22"
console.log(1+"2"+1); // "121"


