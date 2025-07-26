function setUserName(username)
{
    // complex dbcalls
console.log("called");

this.username=username;
}
function createusers(username,email,passwrod){
    setUserName.call(this ,username)// passing all the object as a this 
this.email=email
    this.passwrod=passwrod
}
const chai=new createusers("chai","chai@123","djijd")
console.log(chai);
