import validator from './validator.js';

console.log(validator);
//Almacenar el numero de la tarjeta ingresado en el input Numero de tarjeta
const numeroTarjeta = document.getElementById('numCard');
numeroTarjeta.addEventListener('keyup',evaluarSoloNumeros);

function evaluarSoloNumeros(){
const valorNumeroTarjeta = numeroTarjeta.value;
const result = valorNumeroTarjeta.replace(/\D/g, "");
document.getElementById("numCard").value = result;

}

 function array(evaluarSoloNumeros){
    const convertirAUnArray = result.split("").reverse();

    console.log (convertirAUnArray);
 }

// Evalua si el campo esta vacio y si lo esta arroja una alerta 

function campoVacio(){
    const inputTarjeta = document.getElementById('numCard').value;
     if(inputTarjeta.length == 0){
       alert("Este campo esta vacio");
       return false;
     }
     
  }
  const boton = document.getElementById('button');
button.addEventListener('click',campoVacio);

/*
//convertir cadena a un array

  const cadena = evaluarSoloNumeros();
  const convertirAUnArray = cadena.split("").reverse();

  console.log(cadena);
}
*/