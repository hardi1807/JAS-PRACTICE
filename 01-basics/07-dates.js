// Date Object in JavaScript


let mydate = new Date();
// console.log(mydate);//not readable
console.log(mydate.toString()); // readable format
console.log(mydate.toDateString()); //output day with date
console.log(mydate.toLocaleDateString()); // output is only date
console.log(mydate.toLocaleTimeString()); // output is only time
console.log(mydate.toISOString()); // output in ISO format


let mycreatedDate = new Date(2005,3,18); // year, month (0-indexed), day, hours, minutes, seconds
console.log(mycreatedDate.toString());
 
