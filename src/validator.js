const validator = { // Es un objeto con el cual podemos agrupar funciones

 isValid:function(creditCardNumber){


  const arrayCreditCardNumber = creditCardNumber.split("").reverse(); //convertir a un array
     //console.log(arrayCreditCardNumber);

    let arrayFinal = [];
   
    let pares = [];
    let impares =[];
    let suma = 0;
    
     
    for(let i = 0; i < arrayCreditCardNumber.length; i++){  
     
      if((i % 2) == 0){

          pares = arrayCreditCardNumber[i];
          pares = parseInt(pares);
          
           //console.log(pares);
          arrayFinal.push(pares);
      }
      else{
        impares = arrayCreditCardNumber[i]*2;

          if(impares > 9){
            impares = (impares-10)+1;
          }
             //console.log(impares);
             arrayFinal.push(impares);
       }
    }

       // console.log(arrayFinal);
      for (let j = 0; j < arrayFinal.length; j++){
           suma = suma + arrayFinal[j];
           
           }
          // console.log(suma);

           if (suma %10 == 0){
              return true;
            }
            else { 
              return false;
            }

         
    
    
  },

  maskify:function(creditCardNumber){ 
  
    const lastDigit = creditCardNumber.substring(creditCardNumber.length -4, creditCardNumber.length);
    const firstDigit = creditCardNumber.slice(0,creditCardNumber.length -4).replace(/[A-Za-z0-9]/g,'#');
    const hiddenCard = firstDigit + lastDigit;
    return hiddenCard;
  } 
};

 
export default validator; // export por default significa que se exporta automaticamente 
   
