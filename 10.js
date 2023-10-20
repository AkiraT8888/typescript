var User = /** @class */ (function () {
    function User(_name) {
        this._name = _name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (newValue) {
            this._name = newValue;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.sayHi = function () {
        console.log("hi! i am " + this._name);
    };
    return User;
}());
var tom = new User("Tom");
console.log(tom.name);
tom.name = "TOM";
tom.sayHi();
