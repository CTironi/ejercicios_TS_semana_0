/*

6. Saber sí es un palíndromo.

1. Crear una función llamada "esPalindromo" que reciba una cadena como argumento.

2. Sí las cadenas son iguales, la función debe devolver "true" indicando que la cadena es
un palíndromo. Sí las cadenas son diferentes, la función debe devolver "false" indicando
que la cadena no es un palíndromo.

3. Llamar a la función "esPalindromo" pasando diferentes palabras y frases como
argumentos y comprueba los resultados.


*/

function esPalindromo(palabra: string){

    let arrPalabra: string[] = palabra.split("");
    arrPalabra.reverse();
    let revPalabra: string = arrPalabra.join("");

    if(palabra == revPalabra){
        return true;
    }return false;
}

console.log(`Son palindromos: \n ana: ${esPalindromo("ana")}\n tenet: ${esPalindromo("tenet")}\n cris: ${esPalindromo("cris")}\n hola: ${esPalindromo("hola")}`)