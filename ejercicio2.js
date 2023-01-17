/*

2. Potencia
Crear una función que calcule el resultado de elevar un número dado a una potencia dada.
Utiliza la fórmula: base^exponente

*/
function calculo(base, exponente) {
    return Math.pow(base, exponente);
}
console.log("El resultado es ".concat(calculo(5, 2)));
