const name= "hardi"
const repoCount = 10

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Call of Duty");
console.log(gameName);

console.log(gameName[0]); // get character at index 0
console.log(gameName.__proto__); // get prototype of the string objects
console.log(gameName.length);// get length of string
console.log(gameName.toUpperCase());// forcefully convert to upper case
console.log(gameName.toLowerCase());// forcefully convert to lower case
console.log(gameName.charAt(2)); // get character at index 2
console.log(gameName.indexOf("o")); // find index of first occurrence of "o"
console.log(gameName.lastIndexOf("o")); // find index of last occurrence of "o
console.log(gameName.substring(0, 4)); // get substring from index 0 to 4
console.log(gameName.slice(0, 4)); // get substring from index 0 to
// 4, similar to substring
console.log(gameName.split(" ")); // split string by space
console.log(gameName.replace("Call", "Battle")); // replace "Call" with "Battle
console.log(gameName.includes("Duty")); // check if "Duty" is present in the string
console.log(gameName.startsWith("Call")); // check if string starts with "Call"
console.log(gameName.endsWith("Duty")); // check if string ends with "Duty"
console.log(gameName.trim()); // remove whitespace from both ends of the string
console.log(gameName.trimStart()); // remove whitespace from the start of the string
console.log(gameName.trimEnd()); // remove whitespace from the end of the string
console.log(gameName.repeat(2)); // repeat the string 2 times3ii