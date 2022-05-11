/*const person={
    firstName: "Beyza",
    lastName: "Baş",
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`
    },
    setFullName:function(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
}

//person.firstName="Süm";
person.setFullName("Sidal Çakıl");
console.log(person.getFullName());
//Burada bir değer get etmek içinde set etmek içinde ayrı ayrı tanımlamalar yaptık bunllara gerek yok aşşada daha kolayını yapcaz.
*/
/*const person={
    firstName: "Beyza",
    lastName: "Baş",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
}
person.fullName="Serkan Aylanşık";
console.log(person.fullName);*/

//bunu object.defineProperty ile de yapabiliriz.
const person={
    firstName: "Beyza",
    lastName: "Baş"
}
Object.defineProperty(person,'fullName',{
    writable:true,
    get function () {
        return `${this.firstName} ${this.lastName}`
    },
    set function (value) {
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }

})
person.fullName="Buğlem Kışla";
console.log(person.fullName);

//Fakat burda object.defineProperty özelliği dışarıdan değer almaya varsayılan olarak kapalıdır, yani set etme olayının çalışması için writable ı true yapmamız gerekir. Eğer false yaparsak da set metodu kullanılamaz.
//Özetleyecek olursak bu özellik okuma özelliğini sahiptir,fakat yazma özelliği bulunmaz bunu açmak için fonksiyon içine writable true demek gerekir