
import validator from './validator.js';

// Abrir ventana modal con formulario de tarjeta de credito
const cerrar = document.querySelectorAll('.close')[0];
const abrir = document.getElementById('agregar-tarjeta');
const modalPadre = document.querySelectorAll('.modal-padre')[0];
const modalHijo = document.querySelectorAll('.modal-hijo')[0];

abrir.addEventListener('click', function(){

modalPadre.style.opacity = "1";
modalPadre.style.visibility = "visible";
modalHijo.classList.toggle('modal-close');


// Evaluar tarjeta
const recibirNumero = document.getElementById('button');
recibirNumero.addEventListener('click',getInput);

function getInput(){ 
    
  const creditCardNumber = document.getElementById('numCard').value;

  //FILTROS PARA NUMERO DE TARJETA
  if(creditCardNumber == ""){ 
     document.getElementById("tarjeta").textContent= "Este campo es obligatorio";
    return;
  }

  if((creditCardNumber.length > 16) || (/\D/.test(creditCardNumber))){ // aqui validamos el rango de digitos ingresados y si los digitos ingresados son diferentes a numeros 
    document.getElementById("tarjeta").textContent= "Verifique los valores ingresados";
    return;
  }


  
  recibirNumero.addEventListener('click',notValid());

  function notValid(){
    if(validator.isValid(creditCardNumber) == false){
    document.getElementById("isn'tValid").textContent = "Esta tarjeta no es valida, Verifique la informacion";
    }
    
  }
 

  recibirNumero.addEventListener('click',siValido());

  function siValido(){
    if(validator.isValid(creditCardNumber) == true){
      

      const valida = document.getElementById("isValid");
      valida.innerHTML = validator.maskify(creditCardNumber);

      valida.style.background = "rgb(3, 27, 37)";
      valida.style.width = "40%";
      valida.style.height ="50%";
      valida.style.color ="aqua";
      valida.style.display = "flex";
      valida.style.flexBasis = "column";
      valida.style.justifyContent = "space-evenly";  
      
      
      const parrafo = document.createElement("p");
      parrafo.innerHTML = "Su tarjeta es valida";
      document.getElementById('isValid').appendChild(parrafo);

      const botton = document.createElement("button");
      botton.innerHTML = "Pagar"
      document.getElementById('isValid').appendChild(botton);
      
      }

  }

  
}  


});

cerrar.addEventListener('click', function() {
modalHijo.classList.toggle('modal-close');
modalPadre.style.opacity = "0";
modalPadre.style.visibility = "hidden";
});

  









        