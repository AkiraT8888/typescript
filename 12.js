//クラス
//メソッド、変数の集まりをメンバという
//クラスに紐づく変数、静的メソッドをメンバという
//クラス変数　static
// 静的メンバにアクセスするにはクラス名が必要
var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
        User.count++;
    }
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    // クラスに紐づくメソッド
    User.showDescription = function () {
        console.log("this class is about users");
    };
    User.count = 0;
    return User;
}());
var tom = new User("Tom");
var bob = new User("Bob");
console.log(User.count);
User.showDescription();
