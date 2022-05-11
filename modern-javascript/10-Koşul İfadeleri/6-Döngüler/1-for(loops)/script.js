Loops

/*//for loop
for(let i=1; i<=10; i++){
   
     if(i==3){
         console.log('en sevdiğim rakam :'+i);
         continue;//bu metod i üç olduğunda ekrana en sevdiğim rakam:3 dedikten sonra tekrar 3 ü yazmasın diye kullanılır. kod tekrarını iptal eder.
     }
     if (i==6){
         console.log('en sevmediğim rakam : 6');
         break;//bildiğimiz gibi döngüyü sonlandırır.
     }
     console.log(i);
}*/

/*//while loop
for (let i=0; i<10;i++){
    console.log(i);
}
let i=0;
while(i<10){
    console.log(i);
    i++;
}*/

/*//do-While loop
let i=0;
do{
  console.log(i);
  i++;
}while(i<10)*/

/*let sonuc=1;
for (let i=10;i>0;i--){
    if(i%2==1){
        sonuc*=i;
    }
}
console.log(sonuc);*///10 dan 1 e kadar tek sayıların çarpımı

/*let val='\n';
for (let i=0;i<10;i++){
    for(let j=0;j<10;j++){
         val +='* ';  
    }
    val+='\n';
}
console.log(val);*///iç içe for döngüsü