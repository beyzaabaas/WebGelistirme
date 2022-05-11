document.getElementById('myBtn').addEventListener('click',function(e){
//documente ulaşıp ordanda butona ulaşıp click olayı olduğunda gerçekleşmesini istediğimiz fonksiyonu ekledik.
    var name = document.getElementById('name');//namei name değişkenine
    var age = document.getElementById('age');//age classlı inputu age değişkenine
    var errors = document.getElementById('errors');//errors classlı inputu errors adlı değişkene çağırıp attık.
    errors.innerHTML = '';//Bütün olaylardan sonra sayfası temizlemek için yazdık
    try{
        if(name.value.length === 0){//eğer namein girilen uzunluğu 0 sa 
            throw new Error('name is required');//bu erroru ver
        }

        if(name.value.length > 20){//eğer namein valuesu 20 den büyükse
            throw new Error('name is too long');//isim uzun hatası ver
        }

        if(age.value.length === 0){//eğer yaş girilmemişse 
            throw new Error('age is required');//bu hatayı ver
        }

        if(isNaN(age.value)){//eğer girilen değer numeric değilse
            throw new Error('age is not numeric');//yaş numeric değil de 
        }

        console.log('form is submitted');//trydaki hatalar olmazsa form kaydedildi mesajı console a yazdırılsın.

    } catch(err){//fırlatılan hatayı yakaladık
        errors.innerHTML = err.message;//ve html sayfasında yukarıda atadığımız error değişkenine catch de yakalanan err mesajı attık.
    }finally{//en sonunda da hata yakalasa da yakalamasa da name ve age inputlarını boşalttık.
        name.value = '';
        age.value = '';
    }
    e.preventDefault();
});