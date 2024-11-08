var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  //Extraindo os dados digitados no formulário
var paciente = obtemPacienteDoFormulario(form);



 //Criando a linha e as células da tabela do novo paciente
  var pacienteTr = montaTr(paciente);

var erros = validaPaciente(paciente);

if(erros.legth > 0){
exibeErros(erros);
return;
}


  //Aqui adicionamos a linha com todos os seus dados na tabela do "HTML";
  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
  form.reset();
});

function exibeErros(erros){
var u1 = document.querySelector();

}


function obtemPacienteDoFormulario(form) {

  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }

 return paciente;
}

function montaTr(paciente){

var pacienteTr = document.createElement("tr");
pacienteTr.classlist.add("paciente");

  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  pacienteTr.appendChild(montaTd(pacient.imc, "info-imc"));

return pacienteTr;
}


function montaTd(dado, classe){
var td = document.createElement("td");
td.textContent = dado
td.classList.add(classe);

return td;
}

function validaPaciente(paciente){
var erros = []

if(!validaPeso(paciente.peso)){
erros.push("Peso Invalido!")
}

}