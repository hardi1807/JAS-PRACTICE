/*  immediately invoked function expression (IIIFE)

it is user to remove the global polution of the code and syntax

()()
-the first is use to show the function 
-2nd is for execution   */


(function chai(){
    console.log(`DB CONNECTED`);
}) ();
// you have to end the immidiate fun with ; (this is named iife)



 ( (name) => {
    console.log(`it is the ${name}`)
 } ) ("hardi");

 // the object is call inside the function and data is in the execution ()

