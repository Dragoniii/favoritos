/*
4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando

pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/

const pessoasDesempregadas = [];
const pessoasEmpregadasMenos2500 = [];
const pessoasEmpregadasMaiores2500 = [];

do {
  const id = Math.floor(Math.random() * 9000 + 1000);
  const idade = Math.floor(Math.random() * 58 + 18);
  const trabalhando = Math.random() > 0.3 ? true : false;
  const salario = trabalhando ? Math.floor(Math.random() * 2500 + 1320) : 0;
  const pessoa = trabalhando ? {id, idade, salario} : {id, idade};
  if (!trabalhando) {
    pessoasDesempregadas.push(pessoa);
  } else if (salario < 2500) {
    pessoasEmpregadasMenos2500.push(pessoa);
  } else {
    pessoasEmpregadasMaiores2500.push(pessoa);
  }
} while (Math.random() > 0.1);

console.log(pessoasDesempregadas);
console.log(pessoasEmpregadasMaiores2500);
console.log(pessoasEmpregadasMenos2500);
