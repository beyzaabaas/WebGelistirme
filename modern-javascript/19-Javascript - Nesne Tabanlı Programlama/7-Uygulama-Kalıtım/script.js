//Person Constructor
function Person(name){
    this.name=name;
}

Person.prototype.Introduce=function(){
    console.log("Hello my name is "+this.name);
}

//Teacher Constructor
function Teacher(name,branch){
    Person.call(this,name);
    this.branch=branch;
}
Teacher.prototype=Object.create(Person.prototype);//Burada teacherın prototypeına personun prototypını kopyaladık, teachera sağlıklı ulaşmak için tacherın protosuna teacher ataması yapmalıyız.
Teacher.prototype.constructor=Teacher;
Teacher.prototype.teach=function(){
    console.log("I teach "+ this.branch);
}

//Student Constructor
function Student(name,number){
    Person.call(this,name);
    this.number=number;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.study=function(){
    console.log("My student number is "+this.number + " Ive already studied hard");
}

//Headmaster Constructor
function Headmaster(name,branch){
   //iki farklı objeyi çağırmak yerine zaten teachera namei yollamıştık, onu çekmemiz yeterli
    Teacher.call(this,name,branch);
}
Headmaster.prototype=Object.create(Teacher.prototype);
Headmaster.prototype.constructor=Headmaster;
Headmaster.prototype.shareTask=function(){
    console.log("ıve already shared all the work");
}


let p1=new Person("Beyza");
p1.Introduce();

let t1=new Teacher("Ayşe","math");
t1.Introduce();
t1.teach();

let s1=new Student("Süm","1234");
s1.Introduce();
s1.study();

let h1=new Headmaster("Hulusi","null");
h1.Introduce(); //persondan getirdik
h1.teach();     //Teacherdan getirdik
h1.shareTask(); //Headmasterın kendi protosu