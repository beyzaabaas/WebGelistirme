const taskList = document.querySelector('#task-list');//ul nesnesini aldık

// ** removing element
// taskList.remove();//ul nesnesini sildik
// taskList.childNodes[7].remove();//7.indexteki elemanı sildik
// taskList.children[3].remove();//ul nin üçüncü indeksini sildik
// taskList.removeChild(taskList.children[3]);//yukarıdaki işlemin aynısının alternatifi

// ** removing attribute
// taskList.children[1].removeAttribute('class');//tasklistin 1.indeksteki elemanının class attributesini sildik.
// for(let i=0;i<taskList.children.length;i++){
//     taskList.children[i].removeAttribute('class');
// }//for döngüsü ile tasklist altındaki bütün li elemanlarının class attributesini sildik.

// ** Replacing Elements
// const cardHeader = document.querySelector('.card-header');//card-header classına sahip div etiketini seçip aldık.

// create element
// const h2 = document.createElement('h2');//h2 elementi ouşturduk.
// h2.setAttribute('class','card-header');//eklediğimiz h2 elementinin classına card-header ekleme işlemi
// h2.appendChild(document.createTextNode('My List'));//yeni text nodeu oluşturduk. My list yazıyo

// const parent = document.querySelector('.card');//card classını seçtik.parenta attık.
// parent.replaceChild(h2,cardHeader);//replaceChild metodu divin yerine oluşturduğumuz h2 yi eklemek için kullanılır.

// console.log(cardHeader);


// ** Classes

let val;

link = taskList.children[0].children[0];//tasklistin çocuğunun çocuğuna ulaştık. divin altındaki liye ulaşıp linin childı a etiketine ulaştık.

// val = link.className;//classın bütün classlarını getirdi
// val = link.classList;//class listleri getirdi
// val = link.classList[0];
// val = link.classList[1];

link.classList.add('new');//linkin classına yeni bir new classı ekledik.
link.classList.remove('new');//eklediğimiz elemanı sildik.

// Attributes
val = link.getAttribute('data-id');//data id attributesini getirdi
val = link.getAttribute('href');//hrefini getirdi
val = link.setAttribute('href','http://sadikturan.com');//href atributesini değiştirdik.
val = link.hasAttribute('data-val');//bir attributesi var mı yok mu onu getirir. true false olarak dönüş yapar.


console.log(val);