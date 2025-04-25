// Dates 
let mydate =new Date()//
console.log(mydate.toString());//Fri Apr 25 2025 09:08:30 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toLocaleString());//4/25/2025, 9:08:30 AM
console.log(typeof mydate);//object type of 
let myCreatedDate= new Date(2023,0,23);
console.log(myCreatedDate.toDateString());//Mon Jan 23 2023
let date= new Date("01-23-2024");// mm-dd-yy
console.log(date.toLocaleString());
let MYtimestamp=Date.now();
console.log(MYtimestamp);
console.log(myCreatedDate.getSeconds());//
// for getting secconds 
console.log(Math.floor(Date.now()/1000));//
date.toLocaleString('default',{wekday:"long"
})// customize the toLocaleString 







