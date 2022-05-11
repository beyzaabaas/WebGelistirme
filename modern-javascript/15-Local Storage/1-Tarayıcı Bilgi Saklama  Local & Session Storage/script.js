// LOCAL STORAGE//Belli url ile ilişkilendirilmiş yapıları tarayıcı kapansa bile saklamaya devam eder.
let val;

// set item
//Bilgileri tarayıcı hafıası içerisine bu şekilde ekleyebiliriz.
const firstName = localStorage.setItem('firstName','Sadık');//local storage set item içine yazdığımız yazıyı değişkene atadık.
const lastName = localStorage.setItem('lastName','Turan');
let hobies = ['sinema','araba','gezmek'];

// get item
val = localStorage.getItem('firstName');//girilen bilgileri çağırdık
val = localStorage.getItem('lastName');

// remove item
// localStorage.removeItem('firstName');//girilen bilgiyi sildik
// localStorage.removeItem('lastName');

// clear
// localStorage.clear();//bütün elemanları local içinden sildik.

// set array to storage
localStorage.setItem('hobies',JSON.stringify(hobies));//dstring değilde dizi olarak yazdırmak için JSON.stringify kullanırız.
val = JSON.parse(localStorage.getItem('hobies'));//burada dizi objesi olarak yazzdırdık.
console.log(val);
console.log(localStorage);
//local ve session arasındaki fark,tarayıcıdan tarayıcı bilgilerine girdiğimizde locala ulaşabiliriz, sessiona girilen bilgiler gözükmez.

// SESSION STORAGE//Tarayıcı kapandığı anda bilgiler gider.
// const city = sessionStorage.setItem('city','Kocaeli');
// const country = sessionStorage.setItem('country','Türkiye');
//  console.log(sessionStorage);