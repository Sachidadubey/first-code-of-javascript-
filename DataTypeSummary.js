// how data will be stored or how data will be  acessd 
//on this basis dataTypes divided into two parts 
// 1> primitive 
//:=   string , number , booolean , null ,undefined ,symbol(unique),bigInt,
//  const score=100

//  const scorevalue=100.3
//  const isLoggedIn=false;
//   const outsideTemp=null;


// javascript is dynamically typed language 


 // symbol  (used for uniquely identify)
//   const id= Symbol('12345')
//   const anotherId=Symbol('12345')
//   console.log(id==anotherId);//false 
//   console.log(id);  (symbol (12345))
//   console.log(anotherId); (symbol (12345))
  
  
  



//2> non -primitive (reference type)=
 // arrays ,objects ,functions

 const heros =["shaktimaan ", "naagraj", "doga"];// array

 const object={ // object 
    name:"anything",
    age:22,


 }
   const myFunction=function ()
  {
  console.log("hello dost ");

  }
myFunction();
  console.log(myFunction);
  

