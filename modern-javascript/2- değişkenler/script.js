// Değişkenler

var age;
console.log(age) // undefined tanımlama yapılmamış değişken

age = 20;
console.log(age) // 20

var fullname = 'Beyza Baş';
console.log(fullname) // Beyza Baş

/*
 Değişken Tanımlama Kuralları
 ** Değişken isimleri rakam ile başlayamaz.
    var 1yas; => hatalı
    var yas1; => geçerli
    var _yas; => geçerli
    
 ** Komut isimleriyle tanımlama yapılamaz. Örneğin if kelimesi dğeişken ismi olamaz.
 ** Büyük küçük harf duyarlılığı vardır.

    var firstName = 'Sadık';
    var FirstName = 'Çınar';
    
    Farklı değişken isimleridir.
 ** Değişken isimlerinde türkçe karakter kullanmamalıyız.   
*/
