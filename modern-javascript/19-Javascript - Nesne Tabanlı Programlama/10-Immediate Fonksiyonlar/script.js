//Immediate Functions


/*(function(){

})();*/

/*(function(){

}());*/ //immediatenin iki farklı kullanımı var sondaki parantezler bi o da :)

(function(name){
        var days=["Sunday",",Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        var today=new Date();
    
        var msg="Welcome " +name+ ". Today is "+days[today.getDay()];
        console.log(msg);
}("Beyza"));

//fonksiyona bir isim vermemize gerek yok. Sadece bir kere çalışacak. Parametre belirtmemiz gerekirse yine function parantezleri içerisine yazacağız.Ve değişkeni alttaki parantezde belirtmemiz gerekir.name için yapalım.