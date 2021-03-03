const validator = { // Es un objeto con el cual podemos agrupar funciones

 isValid:function(creditCardNumber){

  let arrayCreditCardNumber = creditCardNumber.split("").reverse(); //convertir a un array
     console.log(arrayCreditCardNumber);

    let arrayFinal = [];
   
    let pares = [];
    let impares =[];
    let suma = 0;
    
     
    for(let i = 0; i < arrayCreditCardNumber.length; i++){  
     
      if((i % 2) == 1){
          impares = arrayCreditCardNumber[i]*2;
          //console.log(pares)
          if(impares > 9){
            impares = (impares-10)+1;
            //console.log(pares);
          }
         // console.log(pares);
          arrayFinal.push(impares);
      }
      else{
        pares = arrayCreditCardNumber[i];
        pares = parseInt(pares);
    // console.log(impares);
        arrayFinal.push(pares);
      }
    
    }
      console.log(arrayFinal);
        
      for (let j = 0; j < arrayFinal.length; j++){
           suma = suma + arrayFinal[j];
           if (suma %10 == 0){
            return true;
          }
           else { 
             return false;
          }

      }
      console.log(suma);

    //SUMA DE LOS ELEMENTOS DEL ARRAY
       // SI SUMA % 10 = 0    return true

       // sino return false
         
    
    
  },

  maskify:function(creditCardNumber){ 
  
    const lastDigit = creditCardNumber.substring(creditCardNumber.length -4, creditCardNumber.length);
    const firstDigit = creditCardNumber.slice(0,creditCardNumber.length -4).replace(/[0-9]/g,'#');
    const hiddenCard = firstDigit + lastDigit;
    return hiddenCard;
  } 
};

 
export default validator; // export por default significa que se exporta automaticamente 
   