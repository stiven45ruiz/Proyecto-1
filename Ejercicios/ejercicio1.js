const resultado = document.getElementById("resultado");

function recibir()
{
   var numero = document.getElementById("inputnumero").value;

   if (numero % 2 == 0) 
   {
      resultado.innerHTML = (numero + " Es Par"); 
   }
   else
   {
      resultado.innerHTML = (numero + " Es Impar" );
   }
     
} 
   
    
           




