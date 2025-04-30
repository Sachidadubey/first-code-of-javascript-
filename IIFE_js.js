// immediately invoked function expression 
//mostly used in file for the database ---> like whenever the website will lload the file will run immediately 
// to prevent our code from global scope pollution ()->definition ()->return /call
(function  chai() //- named iife
{
console.log("deb connected ");

})();
// IIFE arrow function 
((name)=>{  //- anonymous  IIFE
    console.log(`DB 2 connected succesfully by ${name}`)
    
})("sachida")