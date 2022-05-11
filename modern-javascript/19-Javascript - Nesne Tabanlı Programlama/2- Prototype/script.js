//Prototype

function Person(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
    return 2021-this.yearOfBirth;
}

Person.prototype.getName=function(){
    return this.name;
}

Person.prototype.lastName="Baş";

let beyz=new Person("Beyza",1998,"student");
console.log(beyz);
console.log(beyz.calculateAge());
console.log(beyz.getName());

//console.log(beyz.hasOwnProperty("name"));//beyz objesinin kendi bünyesinde bulunan bir değişken olduğu için true değeri gelir.
console.log(beyz.hasOwnProperty("lastName"));//burada ise false değeri gelir. Çünkü lastname bilgisi artık prototype içerinde yer alan bir bilgi
console.log(beyz.lastName);//yani ben hangi obje içerisinden ulaşırsam ulaşayım bana Baş bilgisini döndürecek.

//NOT: Prototype kısmına alınan özellikler,fonksiyonlar person objesine özel olur. Yani girilen bilgi direkt olarak aktarılır,değiştirilmez.
