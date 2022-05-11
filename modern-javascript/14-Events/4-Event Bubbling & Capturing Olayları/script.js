// Event Bubbling

const form = document.querySelector('form');
const cardBody= document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


/*// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();//formun dışındaki nesnelerin tetiklenmesini engellemek için kullandık.
// });

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// });

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// });

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// });*/ //Yukarıda çağırdığımız nesnelere fonksiyon yazdık ve event ile bir click olayı verdik. Click olduğu anda tetiklenen nesnelerin çıktısını aldık.
//Yani bizim en içte tıkladığımız eleman aynı zamanda diğer elemanın kapsamında olan bir eleman olduğu için. Onlarada click olayı gerçekleşmiş olur. Buna event bubbling denir.Yani içten dışa doğru bir aktarım söz konusu.


// Event Capturing

// form.addEventListener('click',function(e){
//     console.log('form');
//     e.stopPropagation();
// },true);

// cardBody.addEventListener('click',function(e){
//     console.log('card body');
//     e.stopPropagation();
// },true);

// card.addEventListener('click',function(e){
//     console.log('card');
//     e.stopPropagation();
// },true);

// container.addEventListener('click',function(e){
//     console.log('container');
//     e.stopPropagation();
// },true);

// const deleteItems = document.querySelectorAll('.fa-times'); //li deki iconları seçebilmek için all dedik. ve iconları çağırdık. Nodelist olarak karşımıza gelir.

// deleteItems.forEach(function(item){
//     item.addEventListener('click',function(e){
//         console.log(e.target);
//     })
// });

const ul = document.querySelector('ul');// ul yi çağırdık

ul.addEventListener('click',function(e){//ul ye click olayı gerçekleştiğinde
    
    if(e.target.className==='fas fa-times'){//ul nin altındaki icon nesnesine geçiş için if koşulu kullandık.
        e.target.parentElement.parentElement.remove();//burada iconun bir üstündeki a nesnesine ve a nesnesinin bir üstündeki li nesnesine ulaşıp, click işlemi gerçekleştiği andan silme olayını gerçekletirdik.
        e.preventDefault();//refresh edip her seferinde scrollbar aşağı inmesin diye yaptık.
    }
});



