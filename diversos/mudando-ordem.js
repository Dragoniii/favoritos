//criação de array e mudança de posição.

let numero = null;
const quantidade = 5;
const arrayOriginal = [];
const arrayInvertido = [];
const arrayOrdemAlfabetica = [];
const arrayOrdemCrescente = [];
const arrayAleatorio = [];
const resultado = [
  arrayOriginal,
  arrayInvertido,
  arrayOrdemAlfabetica,
  arrayOrdemCrescente,
  arrayAleatorio,
];

for (let i = 0; i < quantidade; i++) {
    do {
        numero = Math.floor(Math.random() * 999 + 1);
    } while (arrayOriginal.includes(numero));
    arrayOriginal.push(numero);
}


arrayInvertido.push(...arrayOriginal.slice().reverse());

arrayOrdemAlfabetica.push(...arrayOriginal.slice().sort());

arrayOrdemCrescente.push(
  ...arrayOriginal.slice().sort(function (a, b) {
    return a - b;
  })
);

for (let i = (Math.floor(Math.random() * arrayOriginal.length )); arrayAleatorio.length < arrayOriginal.length; i = (Math.floor(Math.random() * arrayOriginal.length ))) {
   if(!arrayAleatorio.includes(arrayOriginal[i])) {arrayAleatorio.push(arrayOriginal[i]);} 
}

console.log(resultado);
