/*

8. Crear un Palíndromo sin usar los métodos de los strings

1. Crear una función llamada "crearPalindromo" que reciba una cadena como
argumento.

2. La función debe devolver un arreglo con el resultado, ejemplo, sí se pasa la palabra
“HOLA” el resultado deberá ser: [H,O,L,A,L,O,H].

3. Llamar a la función "crearPalindromo" pasando diferentes palabras como argumentos
y comprueba los resultados.


*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function crearPalindromo8(text) {
    var array = __spreadArray([], text, true);
    for (var i = array.length - 2; i >= 0; i--) {
        array.push(array[i]);
    }
    return array;
}
console.log("Convertir en palindromos los string: \n HOLA: ".concat(crearPalindromo8('HOLA'), "\n cris: ").concat(crearPalindromo8('cris'), "\n que tal: ").concat(crearPalindromo8('que tal')));
