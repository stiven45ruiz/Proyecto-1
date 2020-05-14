var sm = document.getElementById("accion");
var rs = document.getElementById("respuesta")
var n1 = parseInt(document.getElementById("numero1").value ) ;
var n2 = parseInt(document.getElementById("numero2").value ) ;


function suma ()
{
   sm.innerHTML = ("+");
   rs.innerHTML = (n1 + n2) 
}    
function resta ()
{
   sm.innerHTML = ("-");
   rs.innerHTML = (n1 - n2)
} 
function multiplica()
{
   sm.innerHTML = ("*");
   rs.innerHTML = (n1 * n2)
} 
function divide ()
{
   sm.innerHTML = ("/");
   rs.innerHTML = (n1 / n2)
} 



