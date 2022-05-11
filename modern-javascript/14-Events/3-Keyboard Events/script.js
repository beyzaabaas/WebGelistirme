// Keyboard Events

const input = document.querySelector('#txtTaskName');//sayfadaki inputu idsi ile çağırdık
const form = document.querySelector('form');//sayfadaki formdan bir nesneyi çağırdık.
const select = document.querySelector('#select');//select idli nesneyi çağırdık

// input.addEventListener('keydown',eventHandler);//input kutusuna gelip bir harfe bastığımızda keydown eventi gerçekleşir.
// input.addEventListener('keyup',eventHandler);//bir tuşa bastığımızda keydown olayı tuştan elimi kaldırdığım anda keyup olayı gerçekleşir.
// input.addEventListener('keypress',eventHandler);
// input.addEventListener('focus',eventHandler);//kullanıcı input içerisine geldiği anda gerçekleşen bir olaydır.Mousela inputa tıkladığımız anda focus olayı çalışırç
// input.addEventListener('blur',eventHandler);//mouse ile inputa focus olup. mouse ile input dışına çıktığımız ana blur olayı gerçekleşir.
// input.addEventListener('cut',eventHandler);//inputa girilen herhangi bir kelimeyi ctrl-x lediğimiz anda cut olayı gerçekleşir.
// input.addEventListener('paste',eventHandler);//inputa herhangi bir kelimeyi ctrl-v lediğimiz anda paste olayı gerçekleşir.
// input.addEventListener('select',eventHandler);//inputa girilen değerden herhangi bir kısmını seçtiğimiz anda select olayı gerçekleşir.
// form.addEventListener('submit',eventHandler);//elimizde bi formumuz var ve form içerisinde bulunan submite tıkladığımız anda formdaki bilgi, formun adresine gönderiliyor.
//formadaki bilgi servera gönderiliyor fakat. Sayfa refresh oluyor.Sayfanın refresh olmasını istemezsek, preventDEfaultu fonksiyon içerisine yazarız.

select.addEventListener('change',eventHandler);//select kutusundan herhabgi bir değeri seçip değiştirdiğimi vakit change olayı gerçekleşir.

function eventHandler(e){
       console.log('event type '+ e.type);//eventın typeını yazdırır.
    // console.log('key code :'+e.keyCode);//klavyedeki tuşun keycodunu ekrana yazar. Örneğin a tuşununu key kodu 65.
       console.log('value :'+e.target.value);//eventin içinden target value ile girilen harfi ya da rakamı yazdırma işlemini yaptık. 

    // e.target.style.backgroundColor='yellow';//focus olduğumuz anda arkaplanın rengini değiştirir.

    e.preventDefault();//sayfa refresh olmasın diye yazdığımız kod.
}