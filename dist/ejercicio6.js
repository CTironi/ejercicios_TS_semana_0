/*

6. Saber sí es un palíndromo.

1. Crear una función llamada "esPalindromo" que reciba una cadena como argumento.

2. Sí las cadenas son iguales, la función debe devolver "true" indicando que la cadena es
un palíndromo. Sí las cadenas son diferentes, la función debe devolver "false" indicando
que la cadena no es un palíndromo.

3. Llamar a la función "esPalindromo" pasando diferentes palabras y frases como
argumentos y comprueba los resultados.


*/
function esPalindromo(palabra) {
    var arrPalabra = palabra.split("");
    arrPalabra.reverse();
    var revPalabra = arrPalabra.join("");
    if (palabra == revPalabra) {
        return true;
    }
    return false;
}
console.log("Son palindromos: \n ana: ".concat(esPalindromo("ana"), "\n tenet: ").concat(esPalindromo("tenet"), "\n cris: ").concat(esPalindromo("cris"), "\n hola: ").concat(esPalindromo("hola")));
