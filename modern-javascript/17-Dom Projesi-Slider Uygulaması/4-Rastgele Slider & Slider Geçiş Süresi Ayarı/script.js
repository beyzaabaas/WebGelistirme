 var models=[
    {
        name:"Bmw 418d",
        image:"img/bmw.jpg",
        link: "arabalar.com.tr"
    },
    {
        name:"Mazda cx-3",
        image:"img/mazda.jpg",
        link: "arabalar.com.tr"
    },
    {
        name:"Volvo s60",
        image:"img/volvo.jpg",
        link: "arabalar.com.tr"
    },
    {
        name:"Skoda Sunch",
        image:"img/skoda.jpg",
        link: "arabalar.com.tr"
    }

];

var index=0;
var slaytCount=models.length;
var interval;//clear interval yapacağız sebebi ise oka tıkladığımızda aynı anda random değiştirmeninde aktif olması, bu nedenle ok üstüne gelindiği anda clear interval uygulayacağız.
var settings={
    duration:"2000",
    random:false
};

init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click",function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector(".fa-arrow-circle-right").addEventListener("click",function(){
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval);
    })
});

document.querySelectorAll(".arrow").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
})

function init(settings){
    //burada random değeri true ise, üretmiş olduğu inceki sayıyı tekrar üst üste üretme ihtimali olduğundan  önceki değeri içinde tutacak bir değişken tanımlayıp do while ile eşit mi değil mi diye bakarız.
    var prev;
   // setTimeout- belli bir süre sonra başlayacak olan fonksiyonu belirtiyoruz. örneğin iki sn sonra başlıyo bir kere işletilip duruyor.
   //setInterval- ise clearinterval ile durdurmadığımız sürece tekrar ederek çalışır.
   interval=setInterval(function(){
    if(settings.random){
        do{
             //eğer varsayılan olarak true ise random index üretir
            index=Math.floor(Math.random()*slaytCount);
        }while(index==prev){
            prev=index;
        }
      
    }else{
        //değilse artan index yani sırayla gider.
        if(slaytCount==index){
            index=0;
        }
        showSlide(index);
        console.log(index);
        index++;
    }
    showSlide(index);
   } ,settings.duration)
}




function showSlide(i){
    index=i;
    if(i<0){
        index=slaytCount-1;
    }
    if(i>=slaytCount){
        index=0;
    }

    document.querySelector(".card-title").textContent=models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
    document.querySelector(".card-link").setAttribute("href",models[index].link);
    
}


