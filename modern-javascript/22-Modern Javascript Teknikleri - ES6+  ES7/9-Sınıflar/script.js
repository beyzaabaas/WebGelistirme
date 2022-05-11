//Classes
//ES5

var PersonES5=function(name,job,yearOfBirth){
    this.name=name;
    this.job=job;
    this.yearOfBirth=yearOfBirth;
}

PersonES5.prototype.calculateAge=function(){
    return 2021-this.yearOfBirth;
}

var beyz=new PersonES5("beyza","student","1998");
console.log(beyz.calculateAge());

//ES6
class PersonES6{
    constructor(name,job,yearOfBirth){
        this.name=name;
        this.job=job;
        this.yearOfBirth=yearOfBirth;
    }
    calculateAge(){
        return 2021-this.yearOfBirth;
    }
}
var sum=new PersonES6("sümeyye","işsiz","2002");
console.log(sum.calculateAge());
