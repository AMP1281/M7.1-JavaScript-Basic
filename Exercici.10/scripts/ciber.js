

//Variable primer valor operación
    var valor = "";

//Función concatena los numeros
    function functionDisplay(numero){
        display.value = valor + numero;
        valor=display.value;
    }

//Funciones operaciones:
    function sumar () {
        valor1 = display.value;
        valor="";
        operador="sumar";
    }

    function dividir () {
        valor1 = display.value;
        valor="";
        operador="dividir";
    }

    function multiplicar () {
        valor1 = display.value;
        valor="";
        operador="multiplicar";
    }

    function restar () {
        valor1 = display.value;
        valor="";
        operador="restar";
    }

//Función resultado:
function resultado(){
    valor2 = display.value;

    if (operador== "sumar"){
        display.value= parseInt(valor1) + parseInt(valor2);
    }

    else if (operador== "dividir"){
        if (valor2 == 0) {
            display.value="No es posible dividir por cero";
        } 
        else {
            display.value= parseInt(valor1) / parseInt(valor2);
        }
    }

    else if (operador== "multiplicar"){
        display.value= parseInt(valor1) * parseInt(valor2);
    }

    else {
        display.value= parseInt(valor1) - parseInt(valor2);
    }
}

//Función limpiar (tecla C):
function limpiar(){
    display.value="";
    valor="";
}



