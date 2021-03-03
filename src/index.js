/*con esta importacion de modulos lo que se esta haciendo
es llamar el objeto validator que se encuentra en el archivo
validator.js
 */
import validator from './validator.js';


    
     const submitNumCard = document.getElementById('button');
      submitNumCard.addEventListener('click',getInput);
      
     function getInput(){ // El formulario no se envia si cumple con las sgtes condiciones
      const creditCardNumber = document.getElementById('numCard').value;

      if(creditCardNumber == ""){ // aqui evaluamos si el campo esta vacio
        alert('Este campo es obligatorio');
    
    }

      else if((creditCardNumber.length > 16) || (/\D/.test(creditCardNumber))){ // aqui validamos el rango de digitos ingresados y si los digitos ingresados son diferentes a numeros 
        alert('Verifique la información ingresada');
        
    }
    console.log(validator.isValid(creditCardNumber));
    console.log(validator.maskify(creditCardNumber));
  
}







