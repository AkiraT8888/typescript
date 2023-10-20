//クラス
//メソッド、変数の集まりをメンバという
//クラスに紐づく変数、静的メソッドをメンバという
//クラス変数　static
// 静的メンバにアクセスするにはクラス名が必要

class User{

    constructor(protected _name:string){
        User.count++;
    }
   

    public sayHi(): void{
        console.log("hi! i am "+this._name)
    }

    static count: number = 0;
    // クラスに紐づくメソッド
    static showDescription(): void{
        console.log("this class is about users");
    }
}
var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription();

