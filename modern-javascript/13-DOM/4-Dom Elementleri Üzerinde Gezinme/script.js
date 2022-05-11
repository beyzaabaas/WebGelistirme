// Traversing the Dom

let val;

let list = document.querySelector('.list-group');//classı list-group olan elemente ulaştık.NodeList olarak karşımıza geldi.

val = list;

val = list.childNodes;//ul nesnesinin alt elamanlarına ulaştık. Text li vs geldi
val = list.childNodes[0];//ul nesnesinin 0 indeksine ulaştık.
val = list.childNodes[0].nodeName;//ul nesnesinin 0 indeks elemanın nodeName ismi karşımızıa gelir*#text*
val = list.childNodes[0].nodeType; // text //Burada 3 değerini alırız.Js de node tipleri 1-2-3 gibi gösterilir. 1:nodeType ı elemenet 2:nodeType ı attribute 3:nodeType ı text 8:nodeType ı comment(yorum satırı).
val = list.childNodes[1].nodeType; // element// çıktısı 1
//alt elemanlara elementlerle ulaşırsak html collection olarak .children deriz. 
val = list.children;//proto kısmında textNode değil html collection gelir.
val = list.children[0];
val = list.children[2];

val = list.children[2].textContent='new item';//2.indeksin içeriğini new item yaptık
val = list.children[3].children;//3. indeksteki li nin altındaki a etiketi gelir.

val = list.firstChild;//li nin ilk alt nodeu gelir. Burada node elementi 
val = list.firstElementChild;//nodeun ilk etiketi (a etiketi) gelir.Burada ise ilk etiket karşımıza gelir.

val = list.lastChild;//son eleman için 
val = list.lastElementChild;

val = list.childElementCount;//Ulaştığımız list elemanın kaç tane elementi olduğunu söyler. Çktısı 4

val = list.parentNode;//ulaştığımız list bir ul nesnesi,bunun bir üst nodeu div card nesnesi. Çıktısı div card olur.
val = list.parentElement;//Bir üst elementi getirir.
val = list.parentElement.parentElement;//burda da parentın parentını aldık. div card-mt3 ün parentı container p-3 gelir karşımıza.

val = list.children[0].nextSibling;//ulaştığımız listin ilk li elemanının bir sonraki nesnesine ulaşırız. li nin bir altında text node olduğu çıktısını alırız.
val = list.children[0].nextElementSibling;//burda da ilk li elemnetinden bir sonraki elementi yani li elemanı karşımıza gelir.

val = list.children[1].previousSibling;//Burdada 1. indeksten bir önceki nesneye ulaşırız.
val = list.children[1].previousElementSibling;//Burada da 1. indeksten bir önceki elemente ulaştık.
//console.log(val);



for(let i=0; i<list.childNodes.length;i++){
   
    if(list.childNodes[i].nodeType===1){
        
        console.log(list.childNodes[i]);
    }

}//Ulaştığımız list elamanının alt nesnelerinden element olanalarını yazdırdık. nodeType===1 demek yani node tipi element olan nesneleri getir demek..



