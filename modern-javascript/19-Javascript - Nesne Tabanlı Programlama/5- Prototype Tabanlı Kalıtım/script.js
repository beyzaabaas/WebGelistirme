//Prototypal Inheritance

let Person=function(name,yearOfBirth,job){
    this.name=name;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
}

Person.prototype.calculateAge=function(){
    return 2021 - this.yearOfBirth;
}

let Teacher=function(name,yearOfBirth,job,subject){
    Person.call(this,name,yearOfBirth,job);
    this.subject=subject;
}


//Inherit the Person prototype methods //Burada prototype metodlarını aktarma işlemi yapacağız.
Teacher.prototype=Object.create(Person.prototype);

//tracher objesinin consturctor ı person objesinin constructoru sayılır, varsayılan olarak.Yani burada birebir 
//eşitleme yaptık persondan teachera aktardık ancak teacher objesinin constructoru person olmamalı. Çünkü teacher objesi 4 parametreli
//Bunun için eşitleme yapmalıyız.
//set teacher consturctor
Teacher.prototype.constructor=Teacher;

Teacher.prototype.greeting=function(){
    return "hello my name is"+this.name;
}

let beyz=new Teacher("Beyza",1998,"teacher","math");


console.log(beyz);
console.log(beyz.calculateAge());
