// /// 
// //singleton object :-onject created  using constructor (it is only one objcet )
// // literals object;-multiple instances can be posiible  (cant be singleton)


// /// constructor : singleton object 
//  // object literals 
//  // objects=key ,value
// // how to declare symbol
 const MySymbol=Symbol("key1")// syntax of symbol declaration 
 const Jsuser={name:"dubey",
    age:26,
    loaction:"jaipur",
    email:"google.com",
    isLoggedIn:false,
    LastInDays:["monday","tuesday"],
    "fullName" :"dubeyjee",
    // declare symbol under object =[MySmbol]:"mykey1"     learn to use this syntax[]
[MySymbol]:"mykey1"

 };
//  //Object.create()//  singleton object crreated using constructor

//  console.log(Jsuser["email"]);
//  console.log(Jsuser["fullName"])   - recomended to use like this not with the dot oprator 

// console.log(typeof Jsuser[MySymbol]);

//  Jsuser.email="hsjhajdhjdj@gmai.com"
 //lock the value 
//  Object.freeze(Jsuser)// no chnages occure after this
  console.log(Jsuser);
  Jsuser.Greeting =function()
  {
console.log("hello js user ")
console.log(`helllo js user ,${this.name}`);// this keyword is used  to acess the keys value of same object 


  }
  console.log(Jsuser.Greeting());
 
