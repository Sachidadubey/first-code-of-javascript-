// change the math py values 
const decsryptor=Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Math.PI);
Math.pi=5;
console.log(decsryptor);
const myNewObject=Object.create(null)
const chai={
    name:"ginger chai"
    ,price:250,
    isAvailable:true
}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// Object.defineProperty(chai,"name",{
//     writable:true,
//     enumerable:false,
//     configurable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for (let [key,value] of Object.entries(chai)) {
    console.log(key);
    console.log(value);
    
}