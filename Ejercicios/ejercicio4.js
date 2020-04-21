const adivina = Math.random();
const resultado = document.getElementById("resultado")
function listo ()
{
    var numero = parseInt(document.getElementById("numeroAdiv").value);
    if (numero ==  Math.round(adivina * 100))
    {
        resultado.innerHTML = ("¡GENIAL! lo adivinaste");
    }
    else if (numero > Math.round(adivina * 100)) 
    {
        resultado.innerHTML = ("Pista: El numero es menor!");     
    }
    else if (numero < Math.round(adivina * 100))
    {
        resultado.innerHTML = ("Pista: El numero es mayor!");     
    }
    else
    {
        resultado.innerHTML = ("Eso no es un numero");
    }  

}
    