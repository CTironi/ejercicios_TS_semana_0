/*

7. Crear un palíndromo usando los métodos de los strings

1. Crear una función llamada "crearPalindromo" que reciba una cadena de texto como
argumento.

2. La función debe devolver la cadena resultante, que es un palíndromo.

3. Llamar la función "crearPalindromo" pasando diferentes palabras como argumentos y
comprueba los resultados.

*/
function crearPalindromo(text) {
    var arrTexto = text.split('');
    arrTexto.reverse().shift();
    var palindromo = text + arrTexto.join('');
    return palindromo;
}
console.log("Convertir en palindromos los string: \n hola: ".concat(crearPalindromo('hola'), "\n cris: ").concat(crearPalindromo('cris'), "\n que tal: ").concat(crearPalindromo('que tal')));
