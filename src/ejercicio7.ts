/*

7. Crear un palíndromo usando los métodos de los strings

1. Crear una función llamada "crearPalindromo" que reciba una cadena de texto como
argumento.

2. La función debe devolver la cadena resultante, que es un palíndromo.

3. Llamar la función "crearPalindromo" pasando diferentes palabras como argumentos y
comprueba los resultados.

*/

function crearPalindromo(text: string){

    let arrTexto: string[] = text.split('');
    arrTexto.reverse().shift();
    let palindromo: string = text + arrTexto.join('');

    return palindromo;
}

console.log(`Convertir en palindromos los string: \n hola: ${crearPalindromo('hola')}\n cris: ${crearPalindromo('cris')}\n que tal: ${crearPalindromo('que tal')}`)