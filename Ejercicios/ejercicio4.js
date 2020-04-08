var adivina = parseInt(prompt("Adivian el numero"));
var numero = parseInt(prompt("Que numero es??"));

if (numero < adivina)
{
    document.write("Pista: El numero es mayor!");
}
else if (numero > adivina) 
{
    document.write("Pista: El numero es menor!");
}
else
{
    document.write("Eso no es un numero");
}