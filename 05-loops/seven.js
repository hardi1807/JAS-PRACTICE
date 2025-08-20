// reduce

const myNums = [1,2,3]

/*
const mytotal = myNums.reduce (function(acc,currval){
    console.log(`acc: ${acc} and curr ${currval}`)
    return acc+currval
 },0) 
  */

const mytotal = myNums.reduce ( (acc,currval) => acc+currval, 0 )

 console.log(mytotal);

 const cart = [
    {
        item: "js",
        price: 100
    },
    {
        item: "py",
        price: 200
    },
    {
        item: "java",
        price: 200
    }
 ]

 const pay = cart.reduce ( (acc,item) => acc + item.price, 0)
 console.log(pay);