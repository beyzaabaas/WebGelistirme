//Reference Error 
//TypeError
//SyntaxError
//URIError

// Bunların en temeli ERROR dur.
var user={
    name:"Beyza BAŞ"
}


try{
    //console.log(myFunction());
    console.log(user.name);//Burada user objesinin name parametresini yazar.
    console.log(user.email);//Burada çıktı undefined olur. Yani öyle bi değişken olmadığı için undefined çıktısı verir.Biz bunu hata olarak algılatabiliriz. 
    if(!user.email){//eğer userın email alanı null ise
        throw new SyntaxError("User has no email");//ekranda sytnax hatası yazsın
    }
}
catch(e){
    console.log(e);//hatanın tipini ve mesajı ekrana yazdırır
    console.log(e.message);//hatanın sadece mesaj kısmını yazdırır.
    console.log(e.name);//hatanın türünü ekrana yazdırırız.
    console.log(e instanceof ReferenceError);//true değeri döner.
    console.log(e instanceof TypeError);//False değeri gelir.
    console.log(typeof e);//e nin türünü yazdırır. Çıktı object olur.
}

finally{
    console.log("Finally block");
}
//Eğer bir hata varsa catch kısmı çalışır sonra finaly kısmı da çalışır. hata yoksa catch çalışmaz finally çalışır.
