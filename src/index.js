/*con esta importacion de modulos lo que se esta haciendo
es llamar el objeto validator que se encuentra en el archivo
validator.js
 */
import validator from './validator.js';

console.log(validator);



    
      const submitNumCard = document.getElementById('button');
      submitNumCard.addEventListener('click',getInput);
      
function getInput(){ // El formulario no se envia si no cumple con las sgtes condiciones
    const creditCardNumber = document.getElementById('numCard').value;

    if(creditCardNumber == ""){ // aqui evaluamos si el campo esta vacio
        alert('Este campo es obligatorio');
        return false;
    }
    else if((creditCardNumber.length > 16)||(/\D/.test(creditCardNumber))){ // aqui validamos el rango de digitos ingresados
        alert('Verifique los datos ingresados');
        return false;
    }
    else 
    return true;
   

}
       







