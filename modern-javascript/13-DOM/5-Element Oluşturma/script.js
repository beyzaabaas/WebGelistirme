// Creating Elements

// create element
const li = document.createElement('li');//li etiketi oluşturduk

// add class
li.className='list-group-item list-group-item-secondary';//oluşturduğumuz li etiketine class veridk

// attribute
li.setAttribute('title','new item');//li attributeunun title özelliğine new item dedik.
li.setAttribute('data-id','5');//data-id sini 5 yaptık

// text node
const text = document.createTextNode('new item');//li etiketi içine text oluşturma işlemi
li.appendChild(text);//yukarıdaki texti li ile ilişkilendirmemiz gerekiyor. Bunu appendChild olarak li etiketinin bir alt elemanı olarak belirttik.

const a = document.createElement('a');//element oluşturup a içine attık.
a.setAttribute('href','#');//hrefinw # değeri verdik.
a.className='delete-item float-right';//classını diğer alar gibi belirttik
a.innerHTML='<i class="fas fa-times"></i>';//iconu innerhtml ile a etiketine ekledik.

// append a to li
li.appendChild(a);//buradada oluşturduğumuz a elamanını li ye ekledik.

// append li to ul
document.querySelector('#task-list').appendChild(li);//en son oluşturuduğumuz bu li elemanını task-list classına sahip ul içine ekledik.



console.log(li);