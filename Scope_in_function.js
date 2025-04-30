// scope  of function in javascript   
//  (closure also comes under this )

 // { }->scope 
 //let a =10 :-  block level 


 //const b=20   :- block level (constant)


// var c=30     :-global scope 



           // scope and mini hoosting 


// function one()
// {
//     const username="hitesh"

//     function two()
//     {                      // it same happens in the closure  -- the
//     //  child function can have acess of the parents variaable and it saves 
//     // the data even after deallocating memory      
//     // 
//     // 
//     // const website="youtube"
//         console.log(username);
        
//     }
//     // console.log(website);
//     two()
    
// }
// one();



// AddOne(5)// it would return 6 -- it  can be hoist 
// // functions --
// function AddOne(num)  // this is the normal function in thee js 
// {
//     return num+=1
// }





// AddTwo(10)// it would return the num 12 -- it can't be  hoist because creating with  variables 

// const AddTwo= function (num)// this is also called as expression 
// {
//     return num+=2
// }





//  -----------------------------------------------------
// Arrow function ----
// this keyword - it tells us about current  context 

  const user={
  username:"dubey",
  price:999,
   
  message: function(){
    console.log(`${this.username} ,welcome to the website ${this}`);
    
  }
  }
  user.message()
  console.log(this);// empty object --- while in the browser it ewill return the document objects 


  const chai =()=>{// arrow function 

  }



  // const addTwo= (num1,num2)=>num1+num2//
   
   // if  paranthesis used with arrow function  no need to use return keyword 
   // while when we use curlybraces then we should have to use return keyword 

   const addTwo= (num1,num2)=>(num1+num2)
  console.log( addTwo(10,20)); // implicitely return 


  // why we use paranthesis instead of  curly brces --> beacouse  in the case of objectt we will not be able to return the object without using thee 
  //paranthesis it has to be bind -
  