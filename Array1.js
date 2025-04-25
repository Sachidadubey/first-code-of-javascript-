// // indexed collection of homogeneous data elements 
//  let arr=[ 0,1,2,3,4,5];// resizable array in javascript
//  // always  access with the use of index 
//  // always create shallow copy 
//  // same reference   

//  //index starts from 0 

//  const myarr= new Array(1,2,3,4);
//  console.log(myarr);

//  myarr.push(0);//insert at last 
//  console.log(myarr);
//  myarr.push(7);//insert at last 
//  console.log(myarr);
//  console.log(myarr.pop());// remove 7 
//  myarr.unshift(9)//add elements at first 
//  console.log(myarr);
//  myarr.shift()// remove first element
//  console.log(myarr);
//  console.log(myarr.includes(9));
//  console.log(myarr.indexOf(-1));



//  const newArr=myarr.join()//  it typecast the data type array to the string and also bind them 
//  //(copy the array)
//  console.log(newArr);
//  console.log(typeof newArr);// type = string 


 // slice , splice 
//  const myarr=new Array(0,1,2,3,4,5);
//  const myn1= myarr.slice(1,3)// it just copy the arrow from the zeroth index to the second index 

//  console.log(`the real array ,${myarr}`);

//  console.log(myn1);
// // splice 
// const arr2=myarr.splice(1,3);// it returns the value from the '0 th' index to the 3rd index 
// // it also manipulates the real arraay  

// console.log(arr2);
// console.log(`the real array ,${myarr}`);

// it changed the real array named myarr---

let arr = [10, 20, 30, 40];  
console.log(arr.splice(0, 3));  
console.log(arr); // Output: [30, 40]  

 const myarr=[0,1,2,3,4,5];
 console.log(myarr.slice(0,2));
 
 console.log(myarr.splice(0,2));// removes the first n element  
 // it takes two parameter first 1= starting index from where  element has to be removed 
 // second how many numbers it has to be removed 
 console.log(myarr);

 
 
 
 
 
 
 

 
 
