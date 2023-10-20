

class User{
    // public name: string;
    // // クラスをインスタンス化する
    // constructor(name: string){
    //     this.name = name;
    // }
    // 省略すると
    constructor(public name:string){
        
    }

    // メソッド定義ファンクションキーワードいらない
    public sayHi(): void{
        console.log("hi! i am "+this.name)
    }
}

// インスタンス化する時は、newキーワード
var tom = new User("Tom")
tom.sayHi();