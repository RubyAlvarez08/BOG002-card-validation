import validator from './validator.js';

console.log(validator);
//Almacenar el numero de la tarjeta ingresado en el input Numero de tarjeta
const numeroTarjeta = document.getElementById('numCard');
numeroTarjeta.addEventListener('keyup',evaluarSoloNumeros);

function evaluarSoloNumeros(){
const valorNumeroTarjeta = numeroTarjeta.value;
const result = valorNumeroTarjeta.replace(/\D/g, "");
document.getElementById("numCard").value = result;

console.log(valorNumeroTarjeta);

}
