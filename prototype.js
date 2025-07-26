function  multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);// it returns a empty object 
 // it stores   the context of the fucntion and the properties of the this keyword 

 function createUser (username,score)
 {
    this.username=username;
    this.score=score;
 }
 createUser.prototype.icrement=function()
 {
//    this.score++
 }  
  createUser.prototype.printMe=function()
  {this.score++
    console.log(`score is ,${this.score}`); // this mtlb jis-- jisne v cll kiya hai uska --
    
  }
 const chai= new createUser("chai",25)
 const tea= new createUser("tea",250)
//  chai.increment()
 chai.printMe()


