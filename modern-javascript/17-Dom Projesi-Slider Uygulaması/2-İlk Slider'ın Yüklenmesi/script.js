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

var index=3;

document.querySelector(".card-title").textContent=models[index].name;
document.querySelector(".card-img-top").setAttribute("src",models[index].image);
document.querySelector(".card-link").setAttribute("href",models[index].link);
