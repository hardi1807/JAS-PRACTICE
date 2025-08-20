const myNums = [1,2,3,4,5,6,7,8,9,10]

 //const newNums = myNums.map ((num)=> num+10)
const newNums= myNums.map ( (num) => {
    return num +20
})
console.log(newNums); 

//+++++++++ chaining

const score = [1,2,3,4,5,6,7,8,9]

const newscore = score
            .map( (val)=> val+10)
            .map( (val)=> val+1)
            .filter( (val)=>  val >=41)// tjis is called the chain

console.log(newscore);     








