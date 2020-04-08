var quehacer = prompt("Que quieres hacer? 1 sumar. 2 restar. 3 Multipliar. 4 Dividir");
var n1 = parseInt(prompt("Numero 1"));
var n2 = parseInt(prompt("Numero 2"));

if (quehacer == 1)
{
    alert(n1 + n2);
}
else if (quehacer == 2)
{
    alert(n1 - n2);
}
else if (quehacer == 3)
{
    alert(n1 * n2);
}
else if (quehacer == 4)
{
    alert(n1 / n2);
}