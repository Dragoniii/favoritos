//Reduce no array

const quantidade = 10;
const array = Array.from({ length: quantidade }, () => Math.floor(Math.random() * 9 + 1));
const soma = array.reduce((acc, num) => acc + num, 0);

console.log({ array, soma });
