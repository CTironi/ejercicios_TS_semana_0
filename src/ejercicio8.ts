/*

8. Crear un Palíndromo sin usar los métodos de los strings

1. Crear una función llamada "crearPalindromo" que reciba una cadena como
argumento.

2. La función debe devolver un arreglo con el resultado, ejemplo, sí se pasa la palabra
“HOLA” el resultado deberá ser: [H,O,L,A,L,O,H].

3. Llamar a la función "crearPalindromo" pasando diferentes palabras como argumentos
y comprueba los resultados.


*/

function crearPalindromo8(text: string){

    let array: string[] = [...text];

    for (let i = array.length - 2; i >= 0; i--) {
        array.push(array[i]);
    }

    return array;

}

console.log(`Convertir en palindromos los string: \n HOLA: ${crearPalindromo8('HOLA')}\n cris: ${crearPalindromo8('cris')}\n que tal: ${crearPalindromo8('que tal')}`)