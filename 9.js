var User = /** @class */ (function () {
    // public name: string;
    // // クラスをインスタンス化する
    // constructor(name: string){
    //     this.name = name;
    // }
    // 省略すると
    function User(name) {
        this.name = name;
    }
    // メソッド定義ファンクションキーワードいらない
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this.name);
    };
    return User;
}());
// インスタンス化する時は、newキーワード
var tom = new User("Tom");
tom.sayHi();
