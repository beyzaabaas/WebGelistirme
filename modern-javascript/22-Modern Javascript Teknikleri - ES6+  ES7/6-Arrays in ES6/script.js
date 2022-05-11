//Arrays in ES6

const boxes=document.querySelectorAll(".box");

let boxesES5=Array.prototype.slice.call(boxes);
/*//ES5
boxesES5.forEach(function(box) {
    box.style.backgroundColor="green";
});
console.log(boxesES5);*/

//ES6
//Array.from(boxes).forEach(box=>box.style.backgroundColor="green");

/*//ES5
for(let i=0;i<boxesES5.length;i++){
    if(boxesES5[i].className=='box blue'){
        continue;//break dersek döngüden çıkar o yüzden continue dedik
    }
    boxesES5[i].textContent="I'm changed"
    boxesES5[i].style.backgroundColor="blue";
}*/

/*//ES6
var boxesES6=Array.from(boxes);
for(let box of boxesES6){
    if(box.className=='box blue'){
        continue;
    }
    box.textContent="I'm changed";
    box.style.backgroundColor="blue";
}*/

//FROM
//let arr=Array.from("Modern Js");çıktı="m","o","d","e","r","n"," ","j""s" olur.
//Yani diziye dönüştürür.
const products=[
    {name:"Samsung S6",price:1000},
    {name:"Samsung S7",price:2000},
    {name:"Samsung S8",price:3000}
]
console.log(Array.from(products,prd=>prd.name=="Samsung S8"));//dizide var mı fşn diye kontrol ettik.
console.log(products.find(prd=>prd.name=="Samsung S7"));
console.log(products.filter(prd=>prd.name=="Samsung S8"));//obje türünde gelir bu elemandan ikitane olsa onları obje halinde getirir.
console.log(products.findIndex(prd=>prd.price==2000));//index numarasını yolladık.

let numbers=["a","b","c"];

let entries=numbers.entries();
for(let i of entries){
    console.log(i);//hem indexkleri hem de value değerlerini yazdırmak için entries
}

let keys=numbers.keys();
for(let i of keys){
    console.log(i);//sadece indexleri yazdırdık.
}

let values=numbers.values();
for(let i of values){
    console.log(i);
}