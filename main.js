var titulo = document.querySelector(".titulo");
titulo.textContent = "Banana Nutrição";
console.log(titulo);

var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i < 5; i++) {
console.log(pacientes[i]);
}

var tdPeso = pacientes[i].querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = pacientes[i].querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = pacientes[i].querySelector(".info_imc");

var pesoEhValido = true;
var alturaEhValido = true;



var imc = peso / (altura * altura);

tdImc.textContent = imc;

if(peso = 0 || peso > 600) {
tdImc.textContent= "peso inválido!";
}
