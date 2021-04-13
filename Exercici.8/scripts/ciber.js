
//Declacació variables

    var operador= prompt("¿Quina operació vols realitzar? (sumar / restar / multiplicar)");

        while (operador !== "sumar" && operador !== "restar" && operador !== "multiplicar") {
            operador= prompt("Introdueix un valor valid (sumar / restar / multiplicar)" );
        }

    var valor1= parseInt (prompt("Indica el primer valor."));

        while (isNaN(valor1) == true) {
            var valor1= parseInt (prompt("Indica valor numèric correcte."));
        }

    var valor2= parseInt (prompt("Indica el segón valor."));

        while (isNaN(valor2) == true) {
            var valor2= parseInt (prompt("Indica un valor numèric correcte."));
        }

//Funcions

    function sumar (valor1, valor2) {
        return valor1 + valor2;
    }

    function restar (valor1, valor2) {
        return valor1 - valor2;
    }

    function multiplicar (valor1, valor2) {
        return valor1 * valor2;
    }

//Condicionals

    if (operador== "sumar"){
        document.write("El resultat de la suma es " + sumar(valor1, valor2));
    }

    else if (operador== "restar"){
        document.write("El resultat de la resta es " + restar(valor1, valor2));
    }

    else {
        document.write("El resultat de la multiplicacó es " + multiplicar(valor1, valor2));
    }


