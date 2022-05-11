//Maps : key/value pairs(collection)
let val;

const numbers=new Map();

numbers.set(1,"one");
numbers.set("2","two");
numbers.set(3,"three");
numbers.set("four","four");

val=numbers;
//Seçme işlemlerini key değerlerine göre yaparız
val=numbers.get(1);
val=numbers.get("2");
val=numbers.get("four");
val=numbers.size;//Bir metod değil propertydir.(4 elemanlı olduğunu bize söyler)
val=numbers.has(1);//1 keyine sahip eleman var mı yok mu diye kontrol edip bool türünde bir çıktı verir.
val=numbers.delete("four");//Elemanı silme işlemini yaptık
val=numbers.has("four");
//numbers.clear();

for(var [key,value] of numbers){
    console.log(key+" = "+value);
}

for(var [key,value] of numbers.entries()){
    console.log(key+" = "+value);
}

for(var key of numbers.keys()){
    console.log(key);
}

for(var value of numbers.values()){
    console.log(value);
}

numbers.forEach(function(key,value){
    console.log(key+" = "+value);

});

var first=new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"]
]);

var second=new Map([
    [4,"four"],
    [5,"five"]
]);

var merged=new Map([...first,...second]);
console.log(merged);