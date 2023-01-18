/*

1. Área de un círculo
Crear una función que calcule el área de un círculo dado su radio. Utiliza la fórmula: A = π * r^2

*/
function area(r) {
    return Math.PI * Math.pow(r, 2);
}
console.log("El \u00E1rea del c\u00EDrculo es: ".concat(area(5)));
