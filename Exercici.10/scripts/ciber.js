

//Variable primer valor operación
var valor = "";

//Función concatena los numeros
function functionDisplay(numero){
    document.getElementById("display").value = valor + numero;
    valor=document.getElementById("display").value;
}

//Funciones operaciones:

function sumar () {
    valor1 = document.getElementById("display").value;
    valor="";
    operador="sumar";
}

function dividir () {
    valor1 = document.getElementById("display").value;
    valor="";
    operador="dividir";
}

function multiplicar () {
    valor1 = document.getElementById("display").value;
    valor="";
    operador="multiplicar";
}

function restar () {
    valor1 = document.getElementById("display").value;
    valor="";
    operador="restar";
}

//Función resultado:
function resultado(){
    valor2 = document.getElementById("display").value;

    if (operador== "sumar"){
        document.getElementById("display").value= parseInt(valor1) + parseInt(valor2);
    }

    else if (operador== "dividir"){
        if (valor2 == 0) {
            document.getElementById("display").value="No es posible dividir por cero";
        } 
        else {
            document.getElementById("display").value= parseInt(valor1) / parseInt(valor2);
        }
    }

    else if (operador== "multiplicar"){
        document.getElementById("display").value= parseInt(valor1) * parseInt(valor2);
    }

    else {
        document.getElementById("display").value= parseInt(valor1) - parseInt(valor2);
    }
}

//Función limpiar (tecla C):
function limpiar(){
    document.getElementById("display").value="";
    valor="";
}



