//  learn to create singleton objects 
// const tinderuser=new object()
 const tinderuser={

}
tinderuser.id="12345"
tinderuser.name="sammy"
tinderuser.IsLogin=false;
console.log(tinderuser);
  

const regularUser={
    email:"dubeyjee1234@gmail.com",
    fullname:{
        userfullname:{
            firstName:"sachida ",
            lastName:"dubey"
        }
    }

}
console.log(regularUser.fullname.userfullname);
// optional chaining  conncept is also there 
  


const obj1={1:"a",1:"b"}
const obj2={3:"a",4:"b"}
// obj3={obj1,obj2}// it will return the object under the object  (it will add it to the last )

 // merge the objects 
 const object3=Object.assign({},obj1,obj2)// recomended to use a empty objeect 
 console.log(object3);
 // it  seems to the  {} -> target object , assigning objects 

 const obj3={...obj1,...obj2}// using the spred operator 
 console.log(obj3);


 // many objects in a single array 
 const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },{
        id:1,
        email:"h@gmail.com"
    },{
        id:1,
        email:"h@gmail.com"
    }
    ,{
        id:1,
        email:"h@gmail.com"
    }
 ]
  console.log(users[1].email);
  //
  console.log(tinderuser);
  console.log(Object.keys(tinderuser));// Object.keys - here it doesnt know which object we r going to be use so we pass the object name also 
  console.log(Object.values(tinderuser));
  console.log(Object.entries(tinderuser));// it creates entries in the first key then their values -
  console.log(tinderuser.hasOwnProperty('IsLogin'));/// true 

  
  

     

 



 
