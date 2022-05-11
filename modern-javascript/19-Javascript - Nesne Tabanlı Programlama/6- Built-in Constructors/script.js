//String

var str1="Beyza";
var str2= new String("Beyza");

console.log(str1);
console.log(typeof str1);//string çıktısı
console.log(str2);//string objesi ekrana yazar.
console.log(typeof str2);//obje çıktısı alırız

//if ile tip kontrolü yani === yaparsak str2 de false çevirir çünkü girilen değer string str2 object türündedir.
if(str1==="Beyza"){
    console.log("yes");
}
else{
    console.log("no");
}

String.prototype.repeat=function(n){
    return Array(n+1).join(this);
}
console.log("beyza".repeat(2));

//Number
var num1=10;
var num2=new Number(10);

//Boolean
var bool1=true;
var bool2=new Boolean(true);

//Object
var obj1={
    name:"Beyza"
}
var obj2=new Object({name:"Beyza"});

//Array
var arr1=["beyza","sümeyye","sido","samo"];
var arr2=new Array("beyza","sümeyye","sido","samo");

Array.prototype.remove=function(member){
    var index=this.indexOf(member);

    if(index>-1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr1.remove("sido"));