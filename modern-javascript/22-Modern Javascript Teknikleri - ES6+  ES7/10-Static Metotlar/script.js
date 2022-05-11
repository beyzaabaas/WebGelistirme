//Static Methods
// class PersonES6{
//     constructor(name,job,yearOfBirth){
//         this.name=name;
//         this.job=job;
//         this.yearOfBirth=yearOfBirth;
//     }
//     calculateAge(){
//         return 2021-this.yearOfBirth;
//     }
// }
// var sum=new PersonES6("sümeyye","işsiz","2002");
// console.log(sum.calculateAge());
// console.log(sum); 

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    static distance(a,b){
        const dx=a.x-b.x;
        const dy=a.y-b.y

        return Math.hypot(dx,dy);//birbirine olan uzaklığını hipotenüsünü hesapladık.
    }
}
const d1=new Point(10,10);
const d2=new Point(20,20);

console.log(Point.distance(d1,d2));
//Oluşturduğumuz static metod herhangi bir point objesinin o anda oluşturulan instance yani class içerisindeki herhangi bir bilgiye ihtiyaç duymuyor.Dışarıdan oluşturmuş olduğumuz objeleri bu metod içerisine gönderiyoruz. Ve o noktalar üzerinden bi hesaplama yapıyoruz.
// Dolayısıyla static metodları bir yardımcı metod oluşturmak istediğimizde ya da veri tabıanına bağlanıp veri çekmek istediğimizde veya veri silmek istediğimizde kullanabiliriz.