class user{
    constructor(username){
        this.username=username;

    }
    logme()
    {
        console.log(`username is${this.username}`);
        
    }
}
class teacher extends user{
constructor(username,email,password){
        super(username) 
        // it passwes the whole this to the user class and set tthe username directly 
        this.email=email
        this.passwrod=password
}
addcources()
{
    console.log(`new cource was added by ${this.username}`);

    
}
}
const chai=new teacher("chai","chai@techer.com","123")
chai.addcources();
const masalachai=new user("dubey")
masalachai.logme();
console.log(chai instanceof user);

