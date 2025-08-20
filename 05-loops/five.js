/* 
+++++++++++++  FILTER

const newNums = myNums.filter( ()=>{})  /if we use {} then we have to write return for returning the value or else in one line we  only have to write the condition ;     */

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//const newNums = myNums.filter( (num)=> num>4)

const newNums = myNums.filter((num) => {
    return  num>6
})
console.log(newNums);




