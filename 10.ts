

class User{

    constructor(private _name:string){
    }
    get name(){
        return this._name;

    }
    set name(newValue: string){
        this._name = newValue;
    }

    public sayHi(): void{
        console.log("hi! i am "+this._name)
    }
}

var tom = new User("Tom")
console.log(tom.name);
tom.name = "TOM"
tom.sayHi();