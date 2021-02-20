//Lo primero que vamos a hacer es obtener los componentes que vamos a usar a lo largo del proceso
/*Vamos a intentar obtener las variables ej: resultados que esta dentro de un span y tiene
 su id llamado resultado, de esta forma vamos a llamar a todos los componentes que se van a neceistar a lo largo
 del proyecto*/
var operandoA;
var operandoB;
var operacion;
function init() {
    /* Converti en variables a todos los elementos que voy a necesitar */
    var resultado = document.getElementById("resultado");
    var reset = document.getElementById("reset");
    var suma = document.getElementById("suma");
    var resta = document.getElementById("resta");
    var multiplicacion = document.getElementById("multiplicacion");
    var igual = document.getElementById("igual");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres"); 
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");

    //Teniendo los componentes lo siguiente es manejar los Eventos de javascript.
    /* Cuando oprimas un boton se imprima en la pantalla el boton seleccionado*/

    /*Cuando alguien presione un click en el boton uno, el texto de la mantalla que esta dentro de resultados
    va a ser igual a lo que ya tenia es decir el resultado.TextContent, esto es para q que se concatenen los numeros.*/
    uno.onclick = function (e) {
        resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function (e) {
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function (e) {
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function (e) {
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function (e) {
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function (e) {
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function (e) {
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function (e) {
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function (e) {
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function (e) {
        resultado.textContent = resultado.textContent + "0";
    }
    //Para el boton de reset, lo que vamos a hacer que en lugar de q concatene un numero en el panel de resultado
    /* lo que va a ahcer es llamar un funcion */
    reset.onclick = function (e) {
        resetear();
    }
    /*El boton de suma, multiplicacion division y resta vamos a haver uso de tres variables 
     va a ser el operado "a", operado "b" y el tipo de operacion que estamos hablando*/
    /*cuando el usuario aprete 1 y + se guarde que el operando 1 es decri el operando a y q cuando le damos el 
    boton + se guarde q el tipo de operacion es una suma y podamos eliminar el contenido del panel   */
    /* vamos a hacer cuando alguien presione el boton de suma, vamos a guardar el valor que se presiono  */
    suma.onclick = function (e) {
        operandoA = resultado.textContent;//cuando alguien presiona 1y la variable + ese uno se va a guardar en la variable a
        operacion = "+";//la operacion de la q estamos hablando, que se tiene q calcular es un +  
        limpiar();//para limpair el contenido del panel del resultado
    }
    resta.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function (e) {
        operandoA = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    /* el boton de igual va a guardar en la variable operandob va a ser igual a lo que tenga el panel de resultados */
    igual.onclick = function (e) {
        operandoB = resultado.textContent;
        resolver();
    }
    /*Entonces cuando aplique el boton 1 y el boton sumar, automaticamente cuando le aplique el sumar operandoA va 
    ser igual a 1 y la variable de operacion va a ser igual a +, entonces le aplico a + y cuando le aplique
    a + se me borraria 1 y puedo concatenar otro numero y ese otro numero cuando le presione al = el segundo numero
    va a ser igual al operandoB, entonces al momento q nocostros vamos a llamar a la funcion de resolver() 
    ya vamos a contar tanto con el operandoA como el operandoB como con operacion*/

}

//Definir los metodos

/*La funcion limpiar lo q va a ser unicamente es nuestro panel de resultados establecerlo a vacio, es decir,
borrar cualquier numero que tenga resultados */
function limpiar() {
    resultado.textContent = "";
}
/*La funcion de resetearlo que hace es tambien limpiar el panel de resultados pero tambien 
inicializa los operando  */

function resetear() {
    resultado.textContent = "";
    operandoA = 0;
    operandoB = 0;
    operacion = "";
}

/* La variable de resolver lo uqe va a hacer es que practicametne ya tiene las tres cosas que necesita para resolver 
 una operacion. Entonces cuando el = sea presionado ya sabemos con cual es el operandoA y que operacion
 se le va a realizar con respecto al operandoB  */
/* Para esto hicimos un switch que valida la variable de operacion. Por ultimo manda a llamar 
a la funcion resetear para volver a hacer las variables operandoA, operandoB y operacion y establece
el resultado de cada operacion dentro del panel de resultados  */

function resolver() {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "-":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "*":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
        case "/":
            res = parseFloat(operandoA) + parseFloat(operandoB);
            break;
    }
    resetear();
    resultado.textContent = res;
}










