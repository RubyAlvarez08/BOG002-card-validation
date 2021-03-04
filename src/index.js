/*con esta importacion de modulos lo que se esta haciendo
es llamar el objeto validator que se encuentra en el archivo
validator.js
 */
import validator from './validator.js';

// validator.isValid();
// validator.maskify();
  
const submitNumCard = document.getElementById('button');

 
submitNumCard.addEventListener('click',getInput);
;



function getInput(){ // El formulario no se envia si cumple con las sgtes condiciones
    
  const creditCardNumber = document.getElementById('numCard').value;
  
  //FILTRO DE TIIPO TEXTO

  //FILTROS PARA NUMERO DE TARJETA
  if(creditCardNumber == ""){ // aqui evaluamos si el campo esta vacio
    alert('El numero de tarjeta es obligatorio');
    // return -> romper el codigo
    return
  }

  if((creditCardNumber.length > 16) || (/\D/.test(creditCardNumber))  ){ // aqui validamos el rango de digitos ingresados y si los digitos ingresados son diferentes a numeros 
    alert('Verifique la información ingresada {solo digitos[0-9]}');
    return 
  }


  
  submitNumCard.addEventListener('click',notValid());

  function notValid(){
    if(validator.isValid(creditCardNumber) == false){
    document.getElementById("isn'tValid").textContent = "Esta tarjeta no es valida, Verifique la informacion";
    }
    
  }
 

  submitNumCard.addEventListener('click',siValid());

  function siValid(){
    if(validator.isValid(creditCardNumber) == true){
      document.getElementById("isValid").textContent = validator.maskify(creditCardNumber);
      }

  }

  


}  




 





        