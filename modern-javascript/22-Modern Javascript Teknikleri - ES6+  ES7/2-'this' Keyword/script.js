//'this' Keyword

//ES5
//Dediğim olay tam burada oluyor, functionlar ayrı bir context oluşturdukları için function altındaki function this anahtarını tanımıyor ES5 te bunun için çözüm ilk functionun altında var x adında bir değişken tanımlayıp thisi onun içerisine atmaktır.
/*let list={
    category:'phone',
    names:['Iphone 8','Samsung S8','Iphone 7'],
    call:function(){
        var self=this;
        this.names.map(function(name){
            console.log(`${self.category} ${name}`);
        })
    }
}
list.call();
*/

//ES6 //es6 da function için yeni bir context oluşturulmaz bu yüzden thisi değişkene atamadan this yazarak kullanabiliriz
let list={
    category:'phone',
    names:['Iphone 8','Samsung S8','Iphone 7'],
    call:function(){
        this.names.map((name)=>{
            console.log(`${this.category} ${name}`);
        })
    }
}
list.call();

//ES5
/**function Game(){
    this.live=0;
    this.addLive=function(){
        var self=this;
        this.OneUp=setInterval(function(){//sayıyı bir artırarak ekrana yazdıracak, setInterval ms cinsinden belirlenen fonksiyonu tekrarlar,
            console.log(++self.live);//yukarıda oluşturduğumuz livei artırıyoruz.
        },1000)
    }
}
let player=new Game();
player.addLive();**/

//ES6
function Game(){
    this.live=0;
    this.addLive=function(){
        this.OneUp=setInterval(()=>{
            console.log(++this.live);
        },1000)
    }
}
let player=new Game();
player.addLive();

