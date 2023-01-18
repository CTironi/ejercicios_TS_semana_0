/*

4. Cálculo de promedio y comparación

1. Codifique una función llamada “promedio” que calcule el promedio de una cantidad
variable de argumentos utilizando el operador de propagación (...). La función debe
devolver el resultado como un número.

2. Codifique una función llamada “compararPromedio” que reciba un número (el
promedio) y otro número a comparar. Utilice una estructura de control de flujo para
determinar si el promedio es mayor o menor al número dado y devuelva el resultado en
forma de cadena de texto (“mayor” o “menor”).

3. Codifique una función llamada “promedioMayorMenor” que combine las funciones
anteriores, reciba un número a comparar y una cantidad variable de argumentos. Utilice el
operador spread para pasar los argumentos a la función “promedio”. Luego, utilice el
resultado de la función “promedio” y el número a comparar como argumentos para la
función “compararPromedio” y devuelva el resultado en una cadena de texto.

4. Invoque la función “promedioMayorMenor” pasando distintos conjuntos de números y
un número a comparar como argumentos, y verifique los resultados en la consola utilizando
una sentencia “console.log”.

*/

function promedio(...numeros : number[]){

    let suma = numeros.reduce((a , b) => a + b);
    return suma / numeros.length;
}

function compararPromedio(promedio : number , numeroComparar : number){
    if (promedio > numeroComparar) {
        return "mayor";
        } else {
        return "menor";
        }
}

function promedioMayorMenor(n : number , ...numeros2 : number[]){

    return compararPromedio(n , promedio(...numeros2)); 
}

//el primer numero que le pasamos al conjunto corresponde a n, y los demas corresponden a ...numeros2
//esto quiere decir, que por ejemplo, en el conjunto 1, comparamos si 5 es mayor o menor que el promedio de 10,11,3,4 
console.log(`Conjunto 1: ${promedioMayorMenor(5 ,10,11,3,4)} \nConjunto 2: ${promedioMayorMenor(1 ,20,30,40)} \nConjunto 3: ${promedioMayorMenor(40 ,3,2,1)}`)



