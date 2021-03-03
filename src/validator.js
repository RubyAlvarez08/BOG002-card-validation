const validator = { // Es un objeto con el cual podemos agrupar funciones
 // isValid
 // maskify
  
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
