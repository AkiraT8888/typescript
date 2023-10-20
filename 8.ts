// 引数、戻り値が異なる同名の関数を定義できる
// function add(a: number, b:number):number;　//シグニチャー
// function add(a: string, b:string):string;


function add(a: any, b: any):any {
    if(typeof a == "string" && typeof b == "string"){
        return a + " " + b;
    }
    return a + b;
}

console.log(add(5,3));
console.log(add("Hello","World"));


// シグニチャー以外の引数型で実行するとコンパイルエラー
console.log(add(3,"world"));
