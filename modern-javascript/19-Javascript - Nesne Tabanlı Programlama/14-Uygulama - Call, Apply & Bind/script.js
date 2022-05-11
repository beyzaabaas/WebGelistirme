// Demo : Numeric Range

var num ={//max min değer belirledik
    min : 0,
    max : 100,
    checkNumericRange : function(value){//fonksiyon yazdık 
        if (typeof value !== 'number'){
            return false;
        }else{
            return value>=this.min && value<=this.max;
        }
    }
}

console.log(num.checkNumericRange(20));//true
console.log(num.checkNumericRange(-20));//false

var num1 = {min : 10 , max : 30};//yeni obje oluşturduk

console.log(num.checkNumericRange.call(num1,65));//num objesinin fonksiyonunu num1 objesine çağırdık ve değeri atadık.
console.log(num.checkNumericRange.apply(num1,[52]));//yukarıdaki işlemin aynısı apply ile yaptık.

var checkNumber = num.checkNumericRange.bind(num1);//bind ile numun fonksiyonunu num1 e attık.

console.log(checkNumber(56));//onuda checkNumber fonksiyonuna atıp yazdırdık.


