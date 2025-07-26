// let myName="hitesh"
// console.log(myName.length);


// console.log(myName.trueLength);

// const trueLength=function(){

// }
// let heros=["thor","spiderman"]
// let heroPower={
//     thor:"hammer"
//     ,
//     spiderman:"sling",
//     getspiderpower:function(){
//         console.log(`spider power is ${this.spiderman}`);
        
   // }
//}
// const user={
//     name:"chai",
//     email:"chai.com"
// }





// Object.prototype.hitesh=function(){
//     console.log(`hitesh is presennt in objects`);
    
// }
// Array.prototype.heyhitesh=function(){
//     console.log(`hitesh says hello`);
    
// }
// heroPower.hitesh()
// heroPower.heyhitesh() -- not have acess
//  const teacher ={
//     makeVideo:true
//  }
//  const teachingSupport={
//     isAvailable:false
//  }
//  const TASupport={
//     makeAssignment:'js assignment'
//     ,fulltime:true,
//     __proto__:teachingSupport
//  }

//  teacher.__proto__=user // prototypal INheritance ---
//  // modern syntax 



//  Object.setPrototypeOf(teachingSupport,teacher)//method) ObjectConstructor.setPrototypeOf(o: any, proto: object | null): any

//Sets the prototype of a specified object o to object proto or null. Returns the object o.
let anotherUser="chaiAurCode       "
String.prototype.trueLength=function()
{
    // console.log(`${this.name}`);
    
    console.log(`true lentgh is:${this.trim().length}`);
    console.log(this);
    
    
}
"chaiAurCode".trueLength()