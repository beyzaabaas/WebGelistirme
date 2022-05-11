//Demo: Functions

//Kullanıcı bankamatiğe gelip hesabından çekmek istediği miktarı girecek, bu miktar hesabında varsa kullanıcıya verilecek yoksa, ek hesap kontrol edilecek.
var hesapA={
    ad:"Beyza Baş",
    hesapNo:"12345678",
    bakiye: 2000,
    ekHesap:1000
}
var hesapB={
    ad:"Verda Baş",
    hesapNo:"12345679",
    bakiye:3000,
    ekhesap:2000
}

function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`);
    if(hesap.bakiye>=miktar){
        hesap.bakiye=hesap.bakiye-miktar;
        console.log("Paranızı alabilirsiniz.");
    }
    else{
        var toplam=hesap.bakiye+hesap.ekHesap;
        if(toplam>=miktar){
            if(confirm("Ek hesabınızı kullanmak ister misiniz?")){
                console.log("Paranızı alabilirsiniz.");
                var bakiye=hesap.bakiye;
                var ekHesap=miktar-bakiye;
                hesap.bakiye=0;
                hesap.ekHesap=hesap.ekHesap-ekHesap;
            }
            else{
                console.log("İşlem iptal edildi.");
            }
        }
        else{
            console.log("Üzgünüz bakiyeniz yetersiz.");
        }
    }
}
paraCek(hesapA,2000);
paraCek(hesapA,1000);