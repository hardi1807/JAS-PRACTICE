// +++++++ do while loop  

let score = 8
do {
    console.log(score);
    score++
} while (score <= 10);


/* +++++++++++++++++for of

 for (const element of object) {
    console.log(element);
 }
  */

const Array = [1, 2, 3, 4]
for (const num of Array) {
    console.log(num);
}


//+++++++++++ maps = are use for only unique vslues and also print in the same order how you write 

const map = new Map()
map.set('IN', "India")
map.set('FR', "France")

console.log(map);


/* +++++ for in loop

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}
*/

const myobj = {
    js: 'javascript',
    cpp:'c++',
}

for (const key in myobj) {
    console.log(`${key} is for ${myobj[key]}`)
}

