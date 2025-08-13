//function means a reusable block of code that performs a specific task

function sayMyName(){
    console.log("h");
    console.log("e");
    console.log("l");
    console.log("l");
    console.log("o");
}

// sayMyName()

function addTwoNumbers(a, b) {
    // console.log(a + b);
    let result = a + b;
    return result;   // after writing the return statmet, you can't pass any string

}

const result = addTwoNumbers(5, 10);
console.log("Result:",result);


function loginUser (userName){
    if(!userName){
        return "please enter a username";
    }
    return `${userName} just logged in`;
}
// console.log(loginUser("JohnDoe"));
console.log(loginUser(""));


// ... it called the rest parameter that is use for adding the numbers

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100, 200, 300, 400, 500));

const user ={
    userName: "JohnDoe",
    price: 100
};

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price} `);
}

handleObject(user);

const myNewArray = [1, 2, 3, 4, 5];

function returnvalue(getArray){
    return getArray[1];
}
console.log(returnvalue(myNewArray));
