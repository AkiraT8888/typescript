// 関数

var add = function(a:number,b:number = 10):number{
    if(b){
        return a+b;
    }else{
        return a+a;
    }
    return a + b;
 }



var add2 = (a:number,b:number = 10):number =>{
    if(b){
        return a+b;
    }else{
        return a+a;
    }
    return a + b;
 }



var add3 = (a:number,b:number = 10):number => a + b;
 


 console.log(add(5,3));
 console.log(add(5));