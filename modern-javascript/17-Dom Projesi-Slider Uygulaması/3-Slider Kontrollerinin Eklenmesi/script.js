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

showSlide(index);

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


