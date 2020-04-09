var adivina = parseInt(prompt("Numero que quieres que adivinen"));

function listo ()
{
    var numero = parseInt(document.getElementById("numeroAdiv").value);
    if (numero == adivina)
    {
        document.write( "¡GENIAL! lo adivinaste");
    }
    else if (numero > adivina) 
    {
        alert("Pista: El numero es menor!");     
    }
    else if (numero < adivina)
    {
        alert("Pista: El numero es mayor!");     
    }
    else
    {
        alert("Eso no es un numero");
    }  

}
    