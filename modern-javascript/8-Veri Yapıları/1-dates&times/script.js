//date object
let d=new Date();
let birthday=new Date(1998,9,12);

//set methods 
//set gette girilen değeri değiştirmek için kullanılır.

d.setFullYear(2023);
d.setMonth(5);
d.setDate(20);
d.setHours(10);


//get methods
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());

console.log(d.getFullYear()-birthday.getFullYear());

console.log(d);
console.log(typeof d);