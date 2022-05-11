// Selecting Elements

// *** Single Elements
//    *** document.getElementById()
//    *** document.querySelector()

// *** Multiple Elements

// class name
// document.getElementsByClassName()// birden fazla elemente ulaşmak istersek bunu kullanırız.

let val;

//val = document.getElementsByClassName('list-group-item');//documentteki list grup itema ulaştık
// val = document.getElementsByClassName('list-group-item')[0];//sıfırıncı indekse ulaştık

// val = document.getElementsByClassName('list-group-item')[2];//ikinici indekse ulaştık.

// val = val[2];

// val[1].style.color='blue'; //classı list group item olan elemanların birinci indeksindeki textin rengini blue yaptık
// val[1].style.fontSize='25px';//birinci indeksin fontunu büyüttük.
// val[2].textContent='new item';//ikinci indeksin yazı içeriğini new item yaptık

// for(let i=0; i<val.length;i++){
//     console.log(val[i].style.color='red');
//     console.log(val[i].textContent='new item');
// }//burada döngü kullanmadaki amaç eğer list-group-item classlı bütün elemanlara ayını işlemi uygulayacaksak bir döngü oluşturur ve fazla kod yazmayız.



// document.getElementsByTagName()//alternatif kullanım

// val = document.getElementsByTagName('li');// sayfadaki bütün li etiketlerini yukarıda yaptığımız gibi html collection olarak alabiliriz.
// val = document.getElementById('task-list').getElementsByTagName('a');// Bütün sayfadaki a etiketlerini seçmek yerine classı task-list olan ul etiketleri altındaki a etiketlerini seçip işlem yaptık.


// document.querySelectorAll()// Bu da çoklu seçimde bir başka alternatiftir. Teklide selector varken çoklu element seçiminde selectorall deriz.

// val = document.querySelectorAll('li');//Bütün li elemanlarını seçeriz. Ama bu sefer elemanlar colleciton olarak değil nodeList olarak gelir.
//NodeListin proto yapısında foreach vardır. Elimize gelen nodeList üzerinden for döngüsü kullanmak yerine foreach kullanabilirz.

// val.forEach(function(item,index){
//     item.textContent= `${index} - hello`;
// });//Elemanlara ulaşıp elemanların index numaralarını yazdırıp text içeriğini hello olarak değiştirdik.

val = document.querySelectorAll('li:nth-child(even)');//ulaştığımız tüm li elemanlarının sadece çift olanlarını yazdırailiriz.

val.forEach(function(item){//yukarıda ulaştığımız çift elemanların arkaplan rengini değiştirdik.
   item.style.background='#ccc';
});

console.log(val);



 