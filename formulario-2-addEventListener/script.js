const formulario = document.getElementById('form')

formulario.addEventListener('submit', function(evento){

  evento.preventDefault()
  
  const email = document.getElementById('email').value 
  const senha = document.getElementById('password').value 
  const estado = document.getElementById('estado').value 

  const cargo = document.querySelector('input[name="cargo"]:checked').value
  const habilidadesHTML = document.querySelectorAll('input[name="habilidades"]:checked')

  const habilidades = []

  habilidadesHTML.forEach((e)=>habilidades.push(e.value))

  const descricao = document.getElementById('descricao').value


  console.log('email:' + email);
  console.log('senha:' + senha);
  console.log('estado:' + estado);
  console.log('cargo:' + cargo);
  console.log('habilidades:' + habilidades);
  console.log('descricao:' + descricao);





})
