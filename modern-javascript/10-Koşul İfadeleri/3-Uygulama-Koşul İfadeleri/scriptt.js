// var trafigeCikis= new Date("04/20/2019");
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs=Date.now() - trafigeCikis.getTime();
// var trafiktekiGun=Math.floor(trafiktekiMs/(1000*60*60*24));
// console.log(trafiktekiGun);

// if(trafiktekiGun<365)
// {
//     console.log("1.servis bakım süreniz geldi");
// }
// else if(trafiktekiGun>365 &&trafiktekiGun<=365*2){
//     console.log("2.servis bakım süreniz geldi");
// }
// else if(trafiktekiGun>365*2 &&trafiktekiGun<=365*3){
//     console.log("3.servis bakım süreniz geldi");
// }
// else{
//     console.log("Hatalı gün");
// }

var result =prompt("who's there ?");
if(result=="cancel"){
    console.log("Canceled");
}
else if(result=='other'){
    console.log("I don't know you");
}
else if(result=="admin"){
    var password=prompt("password?");
    if(password=='12345'){
        console.log("welcome!");
    }
    else if(password=='cancel'){
        console.log("Canceled");
    }
    else{
        console.log("wrong password...");
    }
}
console.log(result);