class user{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get password(){
        return this._password.toUpperCase();
    }
    set password(value){
        this._password=value.toUpperCase();
    }
     get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value.toUpperCase();
    }
}
const hitesh =new user("hitesh@gmail.com","dubey")
console.log(hitesh.password);
console.log(hitesh.email);