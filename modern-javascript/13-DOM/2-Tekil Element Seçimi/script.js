// Selecting Elements

// *** Single Elements

// document.getelementById()  //tek bir eleman seçerken bu metodu kullanıyoruz.
// let val;

// val = document.getElementById('header'); //sayfasının header kısmına ulaştık consoleda
// val = document.getElementById('header').id;//sayfanın header kısmının id sine ulaştık
// val = document.getElementById('header').className;//console da sayfanın class adına ulaştık

// val = document.getElementById('header');
// // val = val.id;
// // val = val.className;

// val.style.fontSize='45px';//sayfadaki header kısmının fontsizeını değiştirdik
// val.style.color='red';//headerın rengini değiştirebildik
// val.style.fontWeight='bold';//yazı stilini kalın yaptık 
// // val.style.display='none';

// document.getElementById('header').innerText='my ToDo App';//innertext özelliği header içerisindeki yazıyı değiştirmemize yarar. toDo app olan yazıyı my todo app yaptık.

// document.getElementById('header').innerText='<b>my ToDo App</b>';

// document.getElementById('header').innerHTML='<b>my ToDo App</b>';// burada html etiketi eklemek istersek inner.html kullanıyoruz. header içeriğini b(bold) etiketi içerisine almış olduk.
//console.log(val);

// document.querySelector() //alternatif kullanım.

console.log(document.querySelector('#header'));//esnek bir yapıya sahiptir. yine console ekranına idsi header olan kodları yazdırır.
console.log(document.querySelector('.card-header'));//classı card header olan kodları getirir.Eğer classı card-header olan iki eleman varsa bulduğu ilk elemanı ekrana getirir.
console.log(document.querySelector('div'));

document.querySelector('li').style.color='red';//li elamanında ilk bulduğu yeri yani ilk linin renginin kırmızı yaptık.
document.querySelector('li:last-child').style.color='blue';//li elemanının son elemanına mavi rengi verdik.
document.querySelector('li:nth-child(2)').style.color='yellow';//ikinci elemanı sarı yaptık.
document.querySelector('li:nth-child(3)').textContent='task item';//yazıyı task item olarak değiştiir.
document.querySelector('li:nth-child(4)').textContent='task item';

// document.querySelector('li').className='list-group-item list-group-item-primary';// burda li elamanını.classlarını alıp primary yerini secondary yaparak renk değiştirebiliriz.
//ancak bazı durumlarda var olan classı değiştirmek yerine yeni bir class eklemek isteyebiliriz. Böyle bir durumda ise aşağıdaki kullanımı yaparız.

document.querySelector('li').classList.add('active');//li etiketinin class listesine active classını ekledik.

// *** Multiple Elements

