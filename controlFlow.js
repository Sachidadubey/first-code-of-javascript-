//    
//  truthy or falsi values --
// falsei values -- false , 0,-0,BigInt 0n,null,undefinned ,nan

// truthy values:- empty array ,"0",'false' ," ",[ ],{ },function (){}
// .   

// nullish coalescing operator (??):null undefined 
let val1;
val1=5??10
val1=null ??10 //10
val1=undefined ?? 20 // 20  it should always take first value but not null or undefined if values are there 
// .
console.log(val1);
// 
//  ternary operator ----- shorthand of if else
// condition ? true:false
// .
const iceTeaPrice=100
iceTeaPrice <=80 ?console.log("less than 80") :console.log("more than 80");
;

