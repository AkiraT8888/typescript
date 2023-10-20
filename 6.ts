// 関数
 function add(a:number,b:number = 10):number{
    if(b){
        return a+b;
    }else{
        return a+a;
    }
    return a + b;
 }

 console.log(add(5,3));
 console.log(add(5));