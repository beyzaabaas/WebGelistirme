/*//Functions Declarations
function sum(a,b){
    var c=a+b;
    return c;
}
console.log(sum(10,20));*/

/*//Function Expressions //burada fonksiyonun ismini geriye bir değişken olarak döndürüyoruz.
const sum=function(a=0,b=0){//function(a,b) ye fonksiyonun argümanları deniliyor. parametrelere 0 es6 ile gelen bir özellik. Default parametresi deniyor. 
   
    var c=a+b;
    return c;
}
console.log(sum(10,30));
console.log(sum(10));//Az parametre yollarsak çıktı NaN olur.
console.log(sum(10,30,40));// Çok parametre göz ardı edilir.*/

function sumAll(){
    var top=0;
    for(let i=0;i<arguments.length;i++){
        top=top+arguments[i];
    }
    return top;
}
console.log(sumAll(10,20,30,40,50));