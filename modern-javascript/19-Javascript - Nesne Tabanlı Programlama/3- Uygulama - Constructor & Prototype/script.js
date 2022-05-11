function Employee(name,salary){
    if(!(this instanceof Employee)){//eğer girilen nesne employee den türeyen bir nesne değil ise new anahtar sözcüğünü kendimiz oluşturuyoruz. instanceof bu işe yarıyor arada
        return new Employee(name,salary);
    }
    this.name=name;
    this.salary=salary;
}

Employee.prototype.calculateSalary=function(){
    var month=new Date().getMonth()+1;
    var tax=0;
    
    total=this.salary*month;

    if(total<=20000){
        tax=total*0.2;
    }
    else if(total>20000 && total<=30000){
        tax=total*0.25;    
    }
    else{
        tax=total*0.3
    }
    return {
        tax:tax,
        paid:total-tax
    }
}


var emp1= Employee("Beyza",6000);//burda new yazmayı unuttuk misal, yukarıda yazdığımız if vei nstance of muhabbetinde new employee döndürmesini istediğimiz için sıkıntı olmadı.
console.log(emp1.calculateSalary());

var emp2=new Employee("Verda",5000);
emp2_salary=emp2.calculateSalary();
console.log(`${emp2.name} isimli personel toplam ${emp2_salary.tax} ₺ vergi kesintisi ile ${emp2_salary.paid} ₺ maaş almıştır.`);