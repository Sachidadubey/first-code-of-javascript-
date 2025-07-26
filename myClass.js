// class user{
//     constructor (username,email,password){
//         this.email=email;
//         this.password=password;
//         this.username=username;
//     }
//     encryptPassword(){
//         return `${this.password}abc` 
//     }
// changeUserNmae(){
//     return `${this.username.toUpperCase()}`
// }
// }
// const chai=new user("chai","chai123@gmail.com","dubey123@")
// console.log(chai.encryptPassword());
// console.log(chai.changeUserNmae());
//  behind the scene 

function user (username,email,password)
{
      this.email=email;
        this.password=password;
        this.username=username;
}
user.prototype.encryptPassword=function(){
     return `${this.password}abc` 
    
}
const tea=new user("tea","chai123@gmail.com","dubey123@")
console.log(tea.encryptPassword());
// console.log(tea.changeUserNmae());





