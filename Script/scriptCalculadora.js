// function sumar(){
   // var num2 = parseFloat(document.getElementById("num2").value);
    //document.getElementById("resultado").innerHTML = resultado;	
//}
//function restar(){
    //var num1 = parseFloat(document.getElementById("num1").value);
    //var num2 = parseFloat(document.getElementById("num2").value);
    //var resultado = num1 - num2;
    //document.getElementById("resultado").innerHTML = resultado;
//}

//function multiplicar (){
    //var num1 = parseFloat(document.getElementById("num1").value);
    //var num2 = parseFloat(document.getElementById("num2").value);
    //var resultado = num1 * num2;
    //document.getElementById("resultado").innerHTML = resultado;	
//}
//function Dividir ()
//{
   // var num1 = parseFloat(document.getElementById("num1").value);
    //var num2 = parseFloat(document.getElementById("num2").value);
    //var resultado = num1 / num2;
    //document.getElementById("resultado").innerHTML = resultado;
//}
//function mostrarAlerta() {
   // if (num1 + num2){
       
   // }
   // alert("Su nombre es: " + nombre + " " + apellido);
//}

function calcular(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operador = document.getElementById("operador").value;
    var resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
    }

    alert("El resultado es: " + resultado);
}
   
  
  