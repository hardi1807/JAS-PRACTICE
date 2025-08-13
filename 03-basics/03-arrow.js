// this keyword is use for the current contex

const user ={
    userName:"hardi",
    price:100,

    welcomemsg: function(){
        console.log(`${this.userName},welcome to the website`); 
        // console.log(this); it shows the whole this contex     
    }
}

user.welcomemsg()
user.userName ="priyanshu"
user.welcomemsg()

console.log(this); // that shows the {} bcz value is otside the current contex

// function one(){
//     // console.log(this);
// }
// // one() 

// const chai = function(){
// // console.log(this); // this also shows the undefined
// }
// // chai()



// ++++++++++++++++arrow function   ()=>{}  +++++++++++++++++++++++++++++++

const addTwo =(num1,num2) => num1+num2  
console.log(addTwo(4,3))

//(implicent line means one line ststment in this you dont have to write the return)

// for returning the object you have to write object into the ({})

// also when you {} then you have to write return inn () return is not required

