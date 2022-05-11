var aracBilgisi=[{
    id="bmw116d_1234",
    model="116d",
    yil="2015",
    renk="white",
    servisKayitlari=[{
        id="bmw116d_1234_1",
        tarih="30.02.2016",
        km="1300km",
        ucret=900,
        servisDetayi=[
            {islem1="yağ değişimi",ucret="300"},
            {islem2="filtre değişimi",ucret="300"},
            {islem3="fren hidroliği",ucret="300"}
        ]
    },
    {
        id="bmw116d_1234_2",
        tarih="10.01.2017",
        km="2800km",
        ucret=1800,
        servisDetayi=[
            {islem1="yağ değişimi",ucret="305"},
            {islem2="filtre değişimi",ucret="350"},
            {islem3="fren hidroliği",ucret="350"}
        ]
    }
    
]
},
{
    id : 'bmw118i_123',
    model : 'bmw 118i',
    yil : 2015,
    renk : 'Beyaz',
    servisKayitlari : [
    {
        id : 'bmw118i_123_1',
        tarih : '20.01.2016',
        km : '13000',
        ucret : 900,
        detay :[
                { id : 'bmw118i_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                { id : 'bmw118i_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                { id : 'bmw118i_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
               ]
        },
        {
            id : 'bmw116d_123_2',
            tarih : '10.01.2017',
            km : '28000',
            ucret : 1800,
            detay : [
                    { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                    { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                    { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                    { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
            ]
        }
    ]
},
{
    id : 'bmw320d_123',
    model : 'bmw 320d',
    yil : 2015,
    renk : 'Beyaz',
    servisKayitlari : [
    {
        id : 'bmw320d_123_1',
        tarih : '20.01.2016',
        km : '13000',
        ucret : 900,
        detay :[
                { id : 'bmw320d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
                { id : 'bmw320d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
                { id : 'bmw320d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
               ]
        },
        {
            id : 'bmw116d_123_2',
            tarih : '10.01.2017',
            km : '28000',
            ucret : 1800,
            detay : [
                    { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
                    { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
                    { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
                    { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
            ]
        }
    ]
}
]
console.log(aracBilgileri[0]);
console.log(aracBilgileri[0].id);
console.log(aracBilgileri[0].model);
console.log(aracBilgileri[0].renk);
console.log(aracBilgileri[0].servisKayitlari);
console.log(aracBilgileri[0].servisKayitlari[0]);

console.log(aracBilgileri[0].servisKayitlari[0].km);
console.log(aracBilgileri[0].servisKayitlari[0].ucret);
console.log(aracBilgileri[0].servisKayitlari[0].detay[0].ucret);