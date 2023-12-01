const valorEl = document.getElementById('valor')
let valor = 0

function aumentarValor() {
  valor++
  valorEl.innerHTML = valor
}

function diminuirValor() {
  valor--
  valorEl.innerHTML = valor
}