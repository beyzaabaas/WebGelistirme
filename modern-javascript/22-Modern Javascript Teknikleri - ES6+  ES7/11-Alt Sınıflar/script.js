//Sub Classes
//ES5
function PersonES5(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
}

PersonES5.prototype.sayHi=function(){
    return `Hello I'm ${this.firstName} ${this.lastName}`;
}

function CustomerES5(firstName,lastName,phone,userName){
    PersonES5.call(this,firstName,lastName);
    this.phone=phone;
    this.userName=userName;
}
CustomerES5.prototype=Object.create(PersonES5.prototype);

var customer=new CustomerES5("Beyza","Baş","12345","beyzaabaas");
console.log(customer.sayHi());

//ES6
class PersonES6{
    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    sayHi(){
        return `Hello I'm ${this.firstName} ${this.lastName}`;
    }
}
class CustomerES6 extends PersonES6{//person classını customer classına extend ettik kalıtımı es6 da böyle gerçekleştirdik
    constructor(firstName,lastName,phone,userName){
        super(firstName,lastName);//persondaki bilgileri customere super ile çağırdık.
        this.phone=phone;
        this.userName=userName;
    }
    static getTotal(){
        return 1000;
    }
}
var customer=new CustomerES6("Sidal","Çakıl","123456","sido");
console.log(customer.sayHi());
//console.log(customer.getTotal());
//yukarıdaki gibi yazdırdığımızda hata alırız çünkü oluşturulan static metod bir instance metodu değil,yani oluşturulan instancenin bir elemanı değil.
console.log(CustomerES6.getTotal());