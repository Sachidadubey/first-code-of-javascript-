// stack & heap memory
// primitive dataTypes always use  stack memory 
// copy of value
// let myYoutubeChannel="hiteshkumar";// memory in the stack 
// let anotherName=myYoutubeChannel;// copy of the value
// anotherName="dubey"//copy of the real value gets changed 









// non -primitive datatype always use the heap memory
//reference of the original  value 
let obj={
    name:"ankush dubey",
    upi:"dubey@ybl"
}
let obj2=obj;
obj2.name="dubey";

console.log(obj.name);//dubey    value gets changed beacouse it is referenece variable
console.log(obj2.name);//dubey

