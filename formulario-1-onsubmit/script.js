// Código usando evento de onsubmit com botão do tipo submit

function enviarFormulario(event) {
  event.preventDefault();
  console.clear();
  console.log("Nome", event.srcElement.nome.value);
  console.log("Email", event.srcElement.email.value);
  console.log("Experiencia", event.srcElement.experiencia.value);
  console.log("Nascimento", event.srcElement.nascimento.value);
  console.log("Sobre mim", event.srcElement.sobremim.value);
  console.log("Ultimo cargo", event.srcElement.ultimo_cargo.value);
  console.log("Pretensão salarial", event.srcElement.pretensao_salarial.value);
  console.log("Cargo", event.srcElement.cargo.value);
  const checkboxs = Array.from(event.srcElement.linguagens);
  const checkboxsFormatados = checkboxs.map((linguagem) => {
    return `${linguagem.value} | ${linguagem.checked}`;
  });
  console.log("Linguagens", checkboxsFormatados);
  console.log("Dominio em JS", event.srcElement.dominio_js.value);
}

// Código usando addEventListener de onsubmit

// const formularioEl = document.getElementById('formulario')
// formularioEl.addEventListener('submit', enviarFormulario)
