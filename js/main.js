
/*
Ejercicio 1: Verificar si un número es positivo, negativo o cero

Escribe una función llamada verificarNumero que reciba un número como argumento y devuelva si el número es positivo, negativo, o cero.
*/


function verificarNumero(n){

    let mensaje;
    
    if(n!=0){
        if(n>0){
            mensaje="Es positivo";
        }else{
            mensaje="Es negativo";
        }
    }else{
        mensaje="Es cero";
    }  

    return mensaje;
}

console.log(verificarNumero(-20));


/*
Ejercicio 2: Edad legal para votar

Escribe una función llamada puedeVotar que reciba la edad de una persona y devuelva si una persona tiene 18 años o más y devuelva "Puede votar" o "No puede votar".

*/


function puedeVotar(edad){
    let mensaje;
    edad>=18? mensaje="Puede votar":mensaje="No puede votar";

    return mensaje
}

console.log(puedeVotar(17));


/*Ejercicio 3: Mayor de dos números Escribe una función llamada mayorDeDos que reciba dos números y devuelva el mayor de los dos. Si son iguales, devuelve un mensaje indicando que son iguales.*/

function mayorDeDos(n1,n2){

    let mensaje;
    if(n1===n2){
        mensaje="Son iguales";
    }else{
        if(n1>n2){
            mensaje="El mayor de los dos es "+n1;
        }else{
            mensaje="El mayor de los dos es "+ n2;
        }
    }

    return mensaje;

}
 console.log(mayorDeDos(2,8));


 /*
 Ejercicio 4: Determinar si un número es divisible por 5

Escribe una función llamada esDivisiblePorCinco que reciba un número y devuelva true si el número es divisible por 5 o false si no lo es.
 */

function esDivisiblePorCinco(num){

    let mensake;
    if(num%5==0 && num!=0){
        mensaje="Es divisible por 5";
        return mensaje
    }else{
        return false;
    }
}

console.log(esDivisiblePorCinco(15));


/*Ejercicio 5: Clasificar nota de examen

Escribe una función llamada clasificarNota que reciba una nota entre 0 y 100 y devuelva una clasificación: */

function clasificarNota(num){

    let mensaje;

    switch (num){
        case num>=90: mensaje="Excelente";
            break;
        case num>=70 && num<90: mensaje="Buena";
            break;
        case num>=50 && num<70: mensaje="Regular";
            break;
        default: mensaje="Insuficiente";
    }

    return mensaje;
}

console.log(clasificarNota());

