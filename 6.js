// 関数
function add(a, b) {
    if (b === void 0) { b = 10; }
    if (b) {
        return a + b;
    }
    else {
        return a + a;
    }
    return a + b;
}
console.log(add(5, 3));
console.log(add(5));
