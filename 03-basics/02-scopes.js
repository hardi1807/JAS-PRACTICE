//scope {} 
//lexical scope {}
//block scope {}
//function scope {}
//global scope {}

let a = 300;

if (true){
    let a=10
    const b=20
    console.log("INNER:",a);

}
console.log(a);

// global scope is outside of the {} and block scope is inside {};

/*
in nested function the child scope can access variables from the parent scope
*/

function one(){
    const user ="hardi"
    function two(){
        const website ="youtube"
        console.log(user);
    }
    // console.log(website); // this will throw an error because website is not defined in this scope
    two();
}
one();


// +++++++++++++++++++++++++++imp+++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}
console.log(addone(5));

const addtwo = function(num){
    // where addtwo is hold a variable
    return num + 2;
}
console.log(addtwo(5));