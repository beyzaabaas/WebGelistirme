//Arrow Functions

//ES5
let welcomeES5= function(){
    console.log("Hello from ES5");
}
welcomeES5();

//ES6
let welcomeES6=() =>{//fonksiyon içeriğini bir değişken içeriine alıyoruz o yüzden eşittir diyoruz ve fonksiyon parametre almadığı için parantez açıp kapamak zorundayız.
    console.log("Hello from ES6");//parantezler içindeki kod satırı tek satır olacaksa köşeli patantez kullanmayabiliriz.
}
welcomeES6();

//with parameters
//ES5

let multiplyES5=function(x,y){
    return x*y;
}
console.log(multiplyES5(5,10));

//ES6
//let multiplyES6=(x,y)=> x*y;//köşeli parantez kullanmayacaksak bu şekil yapabiliriz tek satırda
//let multiplyES6=(x,y)=>{return x*y};//Fakat köşeli parantez kullanacaksak return dememiz gerekiyor.

let multiplyES6=(x,y)=>x*y;
console.log(multiplyES6(5,6));

//ES5
let splitES5=function(text){
    return text.split(' ');
}
console.log(splitES5("modern javascript kursu"));

//ES6
let splitES6=text=>text.split(' ');
console.log(splitES6("modern javascript kursu"));

//Object Literals
//ES5
let getProductES5=function(id,name){
    return{
        id:id,
        name:name
    }
}
console.log(getProductES5("1","Samsung s8"));

//ES6
let getProductES6=(id,name)=>(
    {
        id:id,
        name:name
    }
);
console.log(getProductES6("2","Iphone 7"));

//ES5
const phones=[
    {name:"Iphone 8",price:6000},
    {name:"Iphone 7",price:5000},
    {name:"Iphone 6",price:4000},
    {name:"Iphone 5",price:3000},

];
let priceES5=phones.map(function(phone){
    return phone.price;
});
console.log(priceES5);

//ES6
let priceES6=phones.map(phone=>phones.price);
console.log(priceES6);

//Filtreleme yapmak istersek
//ES5
const arr=[1,2,3,4,6,7,8,9,34,56,61,44,32,47,8];

let evenES5=arr.filter(function(a){
    return a%2==0;
})
console.log(evenES5);

//ES6
let evenES6=arr.filter(a=>a%2==0);
console.log(evenES6);

