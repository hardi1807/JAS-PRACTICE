// javascript arrays are resizable
// the copy document can make shallow copie

const myArr = [1,2,3,4]
const myHero = ["Superman", "Batman"]

const myArr2 = new Array(1,2, 3, 4, 5)
console.log(myArr[2]);// 3
console.log(myHero[1]); // Batman


//++++++++++array methods++++++++++++++

myArr.push(5); // adds 5 to the end of the array
myArr.pop(); // removes the last element (5)
myArr.unshift(0); // adds 0 to the beginning of the array
myArr.shift(); // removes the first element (0)

// slice creates a shallow copy of the array

console.log(myArr.includes(2)); // true
console.log(myArr.indexOf(3)); // 2

const newArr = myArr.join(", "); // joins the array elements into a string
console.log( newArr); 
console.log(myArr);



/* slice() creates a shallow copy of the array
    splice() modifies the original array by adding/removing elements


    */
console.log("A", myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1); 
console.log("B", myArr); // original array remains unchanged

const myn2 = myArr.splice(1, 3); // removes elements from index 1 to 3
console.log(myn2); // [2, 3] - removed elements
console.log("C", myArr); // original array is modified 