// singleton object means that it is a single instance of an object

const tinderUser = {} // this is not a singleton object

tinderUser.name = 'John Doe';
tinderUser.id = '12345';
tinderUser.isloggedIn = false;;
// { name: 'John Doe', id: '12345', isloggedIn: false }

const regularUser = {
    email: "h@gmail.com",
    fullname: {
        username: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}
console.log(regularUser.fullname.username.firstName);

const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "three", 4: "four" };

// const obj3= {obj1, obj2}; // this is not a singleton object
// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// this returns an array of arrays




// api is an object 

{
    "name": "John Doe",
    "id": "12345",
    "isloggedIn": false,
}//json object notation keys and values both are strings

