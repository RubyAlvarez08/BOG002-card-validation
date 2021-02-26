/*con esta importacion de modulos lo que se esta haciendo
es llamar el objeto validator que se encuentra en el archivo
validator.js
 */
import validator from './validator.js';

console.log(validator);



    
      const submitNumCard = document.getElementById('button');
      submitNumCard.addEventListener('click',validarCantidadDeDigitos);
      
function validarCantidadDeDigitos(){ // El formulario no se envia si no cumple con las sgtes condiciones
    const numeroTarjeta = document.getElementById('numCard').value;

    if(numeroTarjeta == ""){ // aqui evaluamos si el campo esta vacio
        alert('Este campo es obligatorio');
        return false;
    }
    else if(numeroTarjeta.length > 16){ // aqui validamos el rango de digitos ingresados
        alert('Verifique la cantidad de digitos ingresados');
        return false;
    }
    else 
    return true;
  
}
        const valorInput = document.getElementById('numCard');
        valorInput.addEventListener('keyup',evaluarSoloNumeros)
      
function evaluarSoloNumeros(){ // evalua que solo se ingresen valores numericos
  const valorNumeroTarjeta = valorInput.value; //Almacena el valor en el input numero de Tarjeta
  const expRegul = valorNumeroTarjeta.replace(/\D/g, ""); // condicionamos al usuario a solo ingresar numeros y en caso de que ingrese otro caracter no numerico sea remplazado con un espacio
  document.getElementById("numCard").value = expRegul;

console.log(valorNumeroTarjeta);
}



