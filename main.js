var titulo = document.querySelector(".titulo");
titulo.textContent = "joao Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i ++) {
  console.log(pacientes[i]);
  
  var tdPeso = pacientes[i].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;
 
 var tdImc = pacientes[i].querySelector(".info-imc");

 
console.log(peso);
console.log(altura);

var pesoEhValido = true;
var alturaEhValida = true;


if(peso < 0 || peso > 600) {
   tdImc.textContent = "Peso inválido!";
   pesoEhValido = false;
   pacientes[i].classList.add("dados-invalidos");
   }
 
if(altura < 0 || altura > 2.80) {
  tdImc.textContent = "altura inválida!"
  alturaEhValida = false;
  pacientes[i].classList.add("dados-invalidos");
}

if (pesoEhValido && alturaEhValida) {
 var imc = calculaimc (peso, altura);
  tdImc.textContent = imc.toFixed(2);
}

function calculaimc(peso, altura){
var imc = 0
imc = peso / (altura * altura);
return imc;
}
