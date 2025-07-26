// function user (email,password){ // it also behaves like the objject 
//     this._email=email;
//     this._password=password;
// Object.defineProperty(this, 'email',{
//     get :function(){
// return this._email.toUpperCase();
//     },
//     set:function(value){
//      this._email=value;
//     }
// })

// }
// const chai =new user("chai@chai.com","password")
// console.log(chai.email);



// .... function based syntax -----


//objecct _get_set.js-----------
const user={     // _password :- it seems like private property --
    _email:"abcdd@email.com",
    _password:"dubey123@",



    get email(){
     return this._email
    },

    set email(value){
     this.email=value
    }
}
const tea=Object.create(user)
console.log(tea._password);