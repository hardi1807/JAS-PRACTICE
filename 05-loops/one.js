/*  for loop
    i stands for index

 for (i=0; i<= 1; i++){
     const element =i;

 }
     */

for (let i=1; i<=10; i++){
   // console.log(`outer loop value: ${i}`);
    for (let j=1; j<=10; j++){
      //  console.log(`inner loop value ${j} and inner loop ${i}`);
      //console.log(i + '*'+ j +'=' + i*j);
    }
}
 
let myArray= ['batman','flsh','thor']
console.log(myArray.length);

for (i=0; i<myArray.length; i++){
    const element = myArray[i];
    console.log(element);
}

//+++++++++ break and continue

for (let i=1; i<=20; i++){
    if(i==5){
        console.log(`detected 5`);
        break  //(stop after 5 )
      //  continue (continue after conoling the 5)
    }
    console.log(`value is ${i}`);
}
