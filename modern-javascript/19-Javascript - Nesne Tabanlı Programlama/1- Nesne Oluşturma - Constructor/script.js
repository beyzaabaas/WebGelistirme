/*function Person(firstName,lastName,job){
    this.firstName=firstName;
    this.lastName=lastName;
    this.job=job;
    console.log(this);
}
let beyz=new Person("Beyza","Baş","Student");*/

/*function Person(firstName,lastName,job){
    this.firstName=firstName;
    this.lastName=lastName;
    this.job=job;
}
let beyz=new Person("Beyza","Baş","Student");
let süm=new Person("Vizyonsuz","Köpke","İşsiz");

console.log(süm.firstName+" "+süm.lastName);*/

function Person(firstName,lastName,job,yearOfBirth){
    this.firstName=firstName;
    this.lastName=lastName;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
    this.calculateAge=function(){
        return 2021-this.yearOfBirth;
    }
}
let beyz=new Person("Beyza","Baş","Student",1998);
console.log(beyz.calculateAge());