// Event Listeners

const btn = document.querySelector('#btnDeleteAll');// üzerinde işlem yapacağımız butonu seçtik
const btn2 = document.querySelector('#btnAddNewTask');

//click yerine mousehover olayını da tanımlayabiliriz.
btn.addEventListener('click',function(e){//bir olay yani event oluşturmak için, addEventListener kullanırız.
  //kullanıcı click yaptığı zaman olacak işlem 
    let val;

    val = e;//event objesini vale atıp vali ekrana yazdırdık.

    val = e.target;//target özelliği hangi butona tıklandığının çıktısını verir.
    val = e.target.id;//tıklanan objenin id bilgisini alırız.
    val = e.target.classList;//objenin class listini alırız.
    val = e.type;//objenin typının click olduğunu söyler.

    console.log(val);

    e.preventDefault();//llinke tıkladığımızda hrefteki linke gitmesinin önünü kesmek için kullanırız.butona tıklandığında linke gitmez.Ve sayfa refresh olma eğiliminden çıkar.

});

// btn.addEventListener('click',btnClick);//bir buton için iki tane click olayı atayabiliriz
// btn.addEventListener('click',btnClick2);
// btn2.addEventListener('click',btnClick);

// function btnClick(){//fonksiyonu dışarıda oluşturup btnclick ile eventte çağırabilriz.
//     console.log('btn clicked');
// }//fonksiyonu dışarda oluşturma sebebim, aynı fonksiyonu başka bir eventte kullanmak istersem, kolaylık olsun diye.

// function btnClick2(){
//     console.log('btn 2 clicked');
// }