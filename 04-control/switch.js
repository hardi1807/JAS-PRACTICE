/*   switch (key){
    case CaSeValue;
    break;
    default;
    break;
}   */

const month = 3

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("undefind");
        break;
}

// if we does't  weite the break then after the right answer all cases are print  'ACCEPT' default. 

// in switch case we use ultiple cases to solve at one time

// if we have string value then write    case :"string"





//+++++++++++++++++++++++truthy and false value++++++++++++++++


/*  FALSE = false, 0 -0 bihint ""  null  undefined  NaN
 TRUE = "0", 'FALSE', [] {} function()    */


//++++++++++++++++++++ nullish colescing opretor (??):  null is undefined

let val;
// val= 5 ?? 10
val = null ?? 15  // null is not defining also undefined
console.log(val);




//++++++++++++++++++++++  TURNIARY OPRETOR  +++++++++++++++++++++++++++++

// condition ? true : false (console.log)

const iceprice =100
iceprice >=80? console.log("you are right") : console.log("yu are wrong")