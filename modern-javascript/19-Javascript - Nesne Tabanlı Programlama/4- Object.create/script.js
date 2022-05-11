//Object.create

let personProto={
    calculateAge : function(){
        return 2021-this.yearofBirth
    }
}

let beyz=Object.create(personProto);

beyz.name="Beyza";
beyz.yearofBirth=1998;
beyz.job="student";

//Farklı kullanım tarzı
let süm=Object.create(personProto,{
    name:{value :"Verda"},
    yearofBirth:{value:2002},
    job:{value:"student"}
});

console.log(beyz);
console.log(beyz.calculateAge());

console.log(süm);
console.log(süm.calculateAge());