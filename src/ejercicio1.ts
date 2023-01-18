/*

1. Área de un círculo
Crear una función que calcule el área de un círculo dado su radio. Utiliza la fórmula: A = π * r^2

*/

function area(r : number){
    return Math.PI * Math.pow(r , 2)
}

console.log(`El área del círculo es: ${area(5)}`);