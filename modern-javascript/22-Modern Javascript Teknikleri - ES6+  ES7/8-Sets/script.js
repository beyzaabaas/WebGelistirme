//Sets (Colection - Unique value)

let val;
var mySet=new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2);//Böyle bir durumda tekrar ekleme yapmaz, çünkü set metodu tekil kullanımlar içindir. BU collection içinde tekil bilgiler tutabiliriz
mySet.add("iki");
mySet.add({a:1,b:2});

var obj={a:1,b:2};//Yukarıd var olan elemanı obj ile tekrar ekleyebildik çünkü objenin referansı farklı bir değere karşılık geliyor.Adresler farklı
mySet.add(obj);

val=mySet.has(1);
val=mySet.has(3);

val=mySet.size;
mySet.delete(1);

console.log(val);
console.log(mySet);

for(let item of mySet){
    console.log(item);
}

//SEtlerde key ve valuelar aynı değeri temsil eder.
for(let item of mySet.keys()){
    console.log(item);
}
for(let item of mySet.values()){
    console.log(item);
}
for(let [key,value] of mySet.entries()){
    console.log(key,value);
}

console.log(Array.from(mySet));//mySeti diziye çevirdik.

let mySet2=new Set([1,2,3,4]);
console.log(mySet2);

//intersect
var intersect=new Set(Array.from(mySet).filter(x=>mySet2.has(x)));//oluşturduğumuz mySeti bir dizi içerisine attık filter metodu ile bu mySeti x e attık yani,sonrasında x mySet2 nin içersinde var mı diye kontrol ettik.
console.log(intersect);//mySet ve mySet2 ile kesişen yani aynı olan değerleri yazdırdık.

var intersect=new Set([...mySet].filter(x=>mySet2.has(x)));
console.log(intersect);//yukarıdaki örneğin alternatifi es6

//difference
var difference=new Set([...mySet].filter(x=>!mySet2.has(x)))
console.log(difference);
//Oluşturduğumuz mySet ve mySet2 arasındaki farklar aldık yani mySet'te olup mySet2 de olmayanları :)


//NOT: filter metodu arrayle gelen bir metoddur. Dolayısıyla önce setimizi arraye çevirmemiz gerekir. Ya da ES6 :)