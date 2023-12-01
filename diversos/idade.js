const dia = Math.floor(Math.random() * 31 + 1);
const mes = Math.floor(Math.random() * 12 + 1);
const ano = Math.floor(Math.random() * (new Date().getFullYear() - 1923) + 1922);

function calcularIdade(dataNascimento) {
  
  let hoje = new Date();
  let nascimento = new Date(dataNascimento);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  let verificarMes = hoje.getMonth() - nascimento.getMonth();

  let diaNascimento = nascimento.getDate();
  let hojeDia = hoje.getDate();

  if (verificarMes < 0 || (verificarMes === 0 && hojeDia < diaNascimento)) {
    idade = idade - 1;
  }
  console.log(dataNascimento);
  console.log(hoje);
  return idade;
}

console.log(calcularIdade(`${ano}-${mes}-${dia}`));
