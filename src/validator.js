const validator = { // Es un objeto con el cual podemos agrupar funciones

 isValid:function(creditCardNumber){

  let arrayCreditCardNumber = creditCardNumber.split("").reverse(); //convertir a un array
     console.log(arrayCreditCardNumber);

    let arrayFinal = [];
    let pares = [];
    let impares = [];
    
     
   for(let i = 0; i < arrayCreditCardNumber.length; i++){  
     
    if((i % 2) == 1){
      pares = arrayCreditCardNumber[i]*2;
      console.log(pares);
      if(pares > 9){
       pares = (i % 10);
       
      }
    }
    else{
     impares = arrayCreditCardNumber[i]*1;
    //console.log(impares);
    }
     const otroArray = arrayFinal.concat(pares,impares);
    //console.log(otroArray);
  }
    
    
  },

  maskify:function(creditCardNumber){ 
  
    const lastDigit = creditCardNumber.substring(creditCardNumber.length -4, creditCardNumber.length);
    const firstDigit = creditCardNumber.slice(0,creditCardNumber.length -4).replace(/[0-9]/g,'#');
    const hiddenCard = firstDigit + lastDigit;
    return hiddenCard;
  } 
};

 
export default validator; // export por default significa que se exporta automaticamente 
   


 


