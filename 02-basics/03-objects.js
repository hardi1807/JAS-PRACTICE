// singleton object means that it is a single instance of an object 
// object literal

const mysymbol = Symbol("key1");

const person = {
  name: "Hardi",
  "full name": "Hardi Kumar",
  [mysymbol]: "mykey1",
  age: 25,
  location: "India",
  email: "hardi@example.com",
  isloggedIn: false,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday"],
}
console.log(person); // { name: 'Hardi', age: 25, location: 'India', email: '
console.log(person[mysymbol]);

Object.freeze(person); // makes the object immutable, no changes allowed
// person.age = 30; // This will throw an error in strict mode


person.greet = function() {
    console.log("hello person");
    }
// person.greet(); // This will not work because the object is frozen
console.log(person.greet()); // undefined
