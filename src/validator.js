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
   


 

// aqui va el codigo con las operaciones para verificar si la tarjeta es valida
function isValid(creditCardNumber){
  const arrayCreditcardNumber = creditCardNumber.split(" ").reverse();
    const suma =0;
  for (const i = 0, i < arrayCreditcardNumber.length; i++);
  
  if(i %2 == 0 ){
      const posicionesPares = arrayCreditcardNumber [i]*2;
       if(posicionesPares >= 10){
         posicionesPares = (posicionesPares-10)+1;
       }
        suma += posicionesPares;
       else{

<<<<<<< HEAD
       }
    return true;
  }
  else 
  return false;
}

function maskify(creditCardNumber){
  // aqui va el codigo que oculta los digitos menos los cuatro ultimos
  return ######1234;
}
*/
=======
>>>>>>> f3a5a6dd5a0c4c7924f2f83fd48194d802c1e8bd
