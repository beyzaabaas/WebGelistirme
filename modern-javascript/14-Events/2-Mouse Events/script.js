// Mouse Events

const btn = document.querySelector('#btnDeleteAll');
const ul = document.querySelector('#task-list');

// click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

// double click
// btn.addEventListener('dblclick',eventHandler);//DBLCLİCK olayı clickte bir kere tıklamamı olayın gerçekleşmesi için yeterliyken dblclickte çift tıklamada olay gerçekleşir.

//mouse down
// btn.addEventListener('mousedown',eventHandler);//mousea tıklanınca mousedown olayı gerçekleşir.
// //mouse up
// btn.addEventListener('mouseup',eventHandler);//mousea tıklanınca down olayı gerçekleşirken mousea tıklamayı bıraktığımız anda mouseup olayı gerçekleşir.

// // mouseenter//
//herhangi bir koordinat içerisine mouse ile girdiğimiz anda olay tetiklenir.
// ul.addEventListener('mouseenter',eventHandler);
// // mouseleave
//girdiğimi koordinattan mouseu çıkardığımız anda olay tetiklenir.
// ul.addEventListener('mouseleave',eventHandler);

// // mouseover
//ul nesnesinin çerçevesine yani li ler arasında gezindiğimzde mouseover olayı gerçkeleşir
// ul.addEventListener('mouseover',eventHandler);
// // mouseout
//çerçeveden çıkarken ise mouse out olay gerçekleşir.
// ul.addEventListener('mouseout',eventHandler);

//mouseenter mouseleave ve mouseover mouseout arasındaki fark, li nesnesinin çerçevesi içinde başka bir elemana geçtiğimiz anda mouseout ve moouseolayı tekrar çalışır.

// mouse move  //mouse oynadığı sürece event gerçekleşir.
const h5=document.querySelector('h5');//h5 aldık.
ul.addEventListener('mousemove',eventHandler);

function eventHandler(event){
    console.log(`event type : ${event.type}`);//EVENTIN OLAYINI YAZDIRDIK

    h5.textContent=`Mouse X : ${event.offsetX } Mouse Y : ${event.offsetY }`;
    //mousun x ve y koordinatları üzerindeki konumunu h5 e yazdırdık.
}