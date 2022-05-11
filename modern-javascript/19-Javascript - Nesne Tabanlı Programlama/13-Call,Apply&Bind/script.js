//Call, Apply, Bind
var welcome=function(a,b){
    console.log("welcome "+this.name+". Are you interested in "+a+" and "+b);
}

var beyz={name:"Beyza"};
var süm={name:"Verda"};

welcome.call(beyz, "asp.net","angular");
welcome.call(süm,"asp.net","angular");

welcome.apply(beyz,["asp.net","angular"]);
welcome.apply(süm, ["asp.net","angular"]);

//Eğer fonksiyon herhangi bir parametre almıyorsa apply ve call aynı işlevi görür.
//call ve apply arasındaki tek fark ise parametre aldığında call da normal yollarken apply da dizi şeklinde yollarız.


welcomeBeyz=welcome.bind(beyz);
welcomeBeyz("asp.net","angular");
//bind de ise geri bir değer dönecek fakat bunun için dönecek olan yeni bir değerdir. Var olan fonksiyonu kullanmayacağızda bu fonksiyonun aynısı girilen beyz objesi ile ilişkilendireceğiz.
