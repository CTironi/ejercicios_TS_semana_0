/*

3. Obtener el número mayor

1. Redacte una función llamada 'obtenerMayor' que acepte una cantidad variable de
argumentos y devuelva el valor máximo entre ellos. Utilice el operador spread (...) para
recibir los argumentos en un arreglo.

2. La función debe devolver el valor de la variable “mayor” al final del ciclo de iteración.

3. Invoque la función “obtenerMayor” pasando distintos conjuntos de números como
argumentos y verifique los resultados en la consola utilizando una sentencia
“console.log”.


*/
function obtenerMayor() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var mayor = Math.max.apply(Math, numeros);
    return mayor;
}
console.log("Conjunto 1: ".concat(obtenerMayor(5, 10, 11, 3, 4), " \nConjunto 2: ").concat(obtenerMayor(1, 2, 3, 4), " \nConjunto 3: ").concat(obtenerMayor(4, 3, 2, 1)));
