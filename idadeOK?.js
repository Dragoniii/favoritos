const idade = Math.floor(Math.random() * 90 + 10);
const resultado1 = (idade >= 18 && idade <= 49) ? 'Pode sair só.' : 'Não pode sair só.';
const resultado2 = (idade < 18 || idade > 49) ? 'Não pode sair só.' : 'Pode sair só.';
const resultado = {idade, resultado1, resultado2}

console.log(resultado);
