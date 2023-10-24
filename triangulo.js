//15. Triângulos:
//a. A < B + C e B < A + C e C < A + B. 


const ladoA = Math.floor(Math.random() * 5) + 1;
const ladoB = Math.floor(Math.random() * 5) + 1;
const ladoC = Math.floor(Math.random() * 5) + 1;
const eTriangulo = (ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB);
const eEquilatero = eTriangulo && (ladoA === ladoB) && (ladoB === ladoC);
const eIsoceles = eTriangulo && !eEquilatero && ((ladoA === ladoB) || (ladoB === ladoC) || (ladoA === ladoC));
const eEscaleno = eTriangulo && !eEquilatero && !eIsoceles;
const eRetangulo = eTriangulo && (
    (Math.pow(ladoA, 2) === Math.pow(ladoB, 2) + Math.pow(ladoC, 2)) ||
    (Math.pow(ladoB, 2) === Math.pow(ladoA, 2) + Math.pow(ladoC, 2)) ||
    (Math.pow(ladoC, 2) === Math.pow(ladoA, 2) + Math.pow(ladoB, 2))
);


const resultado = {ladoA, ladoB, ladoC, eTriangulo, eEquilatero, eIsoceles, eEscaleno, eRetangulo}
console.log(resultado);