var a=10;
var b=a;

console.log(a);
console.log(b);

var obj1={
    name:"beyza",
    age:23
}

var obj2=obj1;
obj1.age=24;

console.log(obj1.age);//çıktı 23 değil 24 olur çünkü güncellendi
console.log(obj2.age);


var num=50;
var account={
    name:"Samo",
    accountNumber:"224334"
}

function update(a,b){
    a=100;//num
    b.accountNumber="322222222";//account
}
//yukarıda oluşturduuğum fonksiyonda num aynı kaldı çünkü primitive tip fakat accountnumber değişti çünkü object ve heap bölümünde tutuluyor. Tek bir adreste tutuluyor
update(num,account);

console.log(num);
console.log(account);