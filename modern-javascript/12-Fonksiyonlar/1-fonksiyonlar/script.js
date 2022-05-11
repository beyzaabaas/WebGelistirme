//Functions

function yasHesapla(dogumYili){
    return 2021-dogumYili;
}

let yasBeyza=yasHesapla(1998);
let yasVerda=yasHesapla(2002);

console.log(yasBeyza);
console.log(yasVerda);

function emekliligeKacYilKaldi(dogumYili,isim){
    let yas=yasHesapla(dogumYili);
    let emeklilik=65-yas;

    if(emeklilik>0){
        console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı`  );
    }
    else{
        console.log("zaten emeklisin");
    }
}

emekliligeKacYilKaldi(1998,"Beyza");
emekliligeKacYilKaldi(2002,"Verda");