//Call Back Function

function MultipleByTwo(a,b,c,callback){
    let arr=[];

    if(callback && typeof callback==="function"){// eğer tanımlanan callback parametresi fonksiyonsa işlemi yap dedik, kontrolü sağladık. Böylece girilen değer farklıysa işlemi yapmyacak.
        for(let i=0;i<3;i++){
            arr[i]=callback(arguments[i]*2);
        }
        return arr;
    }
    
}

function addOne(a){
    return a+1;
}
function addTwo(a){
    return a+2;
}
function addThere(a){
    return a+3;
}

//let val=MultipleByTwo(5,10,20,addTwo);
let val=MultipleByTwo(5,10,20,function(a){//Bu da tek kullanımlık fonksiyon diyebiliriz gönderilen değeri beşle toplıcak, eğer tek seferlik bir kullanım gerketiren işlem yapmamız gerekiyorsa bunu kullanabiliriz
    return a+6;
})
console.log(val);

let vall=addOne(10);
console.log(vall);

/*for(let i=0;i<3;i++){
    val[i]=addOne(val[i]);
}
console.log(val);*/

//callback değişkenine fonksiyon atabiliriz. bir yukarıda yapılana ekstradan gerek yok
//Callback parametresi atadığımız zaman ekstra fonksiyon yazmaya gerek kalmadan yazılan fonksiyonu callback ile fonksiyon içerisinde tekrarlayaak işleme sokabiliriz.
