window.onload = function(){
   var objDivSaida = document.getElementById("saida")
/*
   var i = 1
   while(i <= 10){
       objDivSaida.innerHTML += i+"<br>"
       i++
   }*/

   /*
   var i = 1
   do{
       objDivSaida.innerHTML += 1+"<br>"
       i++
   }while(i > 10)*/

/*
   for(var i = 1;i <= 10;i++){
    objDivSaida.innerHTML += i+"<br>"
   }*/

   var aLinguagens = ["Javascript",
                       "Java",
                        "PHP",
                        "Python"
]

for (sLinguagem of aLinguagens) {
    objDivSaida.innerHTML += sLinguagem+"<br>"
}
}