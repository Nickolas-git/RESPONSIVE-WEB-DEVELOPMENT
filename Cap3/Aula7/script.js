
   /* function aloMundo(){
        objResultado = document.getElementById("resultado")
        objResultado.innerHTML += "Alô Mundo!<br>"
    }*/

   /* function soma(num1, num2){
        objResultado = document.getElementById("resultado")
        objResultado.innerHTML += (num1 + num2)+"<br>"
    }*/

    function soma(num1, num2){
        return num1+num2
    }

window.onload = function(){

    objBotao = document.getElementById("botao")
    objBotao.onclick = function(){
        objResultado = document.getElementById("resultado")
        objResultado.innerHTML += soma(soma(3,5),8) +"<br>"
    }
}