// array 2 
// const names= ["one","two","three","four"];
// console.log(names+" original array");

// const newName=["four","three","two","one"];
// // console.log(newName+"another array");
// // console.log(newName.push(names));
// // console.log(newName);// it adds all the array in the last index of the array (treated like the single elements is get pushed)
//  let arr=newName.concat(names);// concat function always return a new array with adding all the elements in the array

//  console.log(arr);
//  console.log(newName);

//  const all=[...newName,...names];// using the spread operator // it creates a deep copy 
//  console.log(all);
//  console.log(newName);
//  console.log(names);
 
//  console.log(newName);
//  console.log(newName);
 let arr2=[1,2,3,4,[2,3,4],[0,9,8[6,5,4]]];// it converts nested array to the normal array 
//  console.log(arr2.flat());//return a new array  with all sub array elements concatinated into it  upto the specified depth
 
 const flatArray=arr2.flat(Infinity);
 console.log(flatArray);
 
 console.log(Array.isArray("dubey"));// false 
 // to convert into array
 console.log(Array.from("hitesh"));// it convert sting into the array 
 // from method can also convert the object into the array 
 console.log(Array.from({name:"dubey"}));// intresting -- array using keys/value  it has to be declared 
 
 
 // Array.of()  it returns a new array  from a set of eleements 
 let a=10;
 let b=20;
 let c=30;
 console.log(Array.of(a,b,c));
 
 
 
 
 


