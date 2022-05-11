// Arrays

let names = ['çınar','sena','ada','yiğit'];
let years = [2017,1970,1990,1998];
let mix = ['sadık','turan',1983,null,undefined,['sinema','kitap']];

// // get array item
// console.log(names[0])
// console.log(names[3])

// // set array item
// names[names.length]='emel';// dizinin bir sonraki indexine emeli atar

// // add item
// years.push(1986);//dizinin en sonuna yazar
// years.unshift(1986);// dizinin ilk indeksine yazar

// // remove item
// years.pop();//dizinin son elemanını siler
// years.shift();// dizinin ilk indeksini siler

// //indexof
// let index = names.indexOf('ada');//dizide ada varsa indeks numarasını getirir
// console.log(' index : '+index);

// // reverse
// names.reverse();//dizi elemanlarını ters çevirir.yani sondan başa yazar

// // sort
// years.sort();//küçükten büyüğe yazar

// //concat
// let val = years.concat(names);//dizileri birleştirir
// console.log(val);

// splice
// console.log(names);
// names.splice(0,1);//dizinin 0. elemandan itibaren 1. indeksi sil 

function over18(year){
    let age = 2018 - year;
    return age>=18;
}

// find
// let val = years.find(over18);

// filter
let val = years.filter(over18);

console.log(val);

console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);
