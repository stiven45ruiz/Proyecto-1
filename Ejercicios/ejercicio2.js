
function suma ()
{
    let sm = document.getElementById("accion");
    let rs = document.getElementById("respuesta")
    let n1 = parseInt(document.getElementById("numero1").value ) ;
    let n2 = parseInt(document.getElementById("numero2").value ) ;
   sm.innerHTML = ("+");
   rs.innerHTML = (n1 + n2) 
}    
function resta ()
{
    let sm = document.getElementById("accion");
    let rs = document.getElementById("respuesta")
    let n1 = parseInt(document.getElementById("numero1").value ) ;
    let n2 = parseInt(document.getElementById("numero2").value ) ;
   sm.innerHTML = ("-");
   rs.innerHTML = (n1 - n2)
} 
function multiplica()
{
    let sm = document.getElementById("accion");
    let rs = document.getElementById("respuesta")
    let n1 = parseInt(document.getElementById("numero1").value ) ;
    let n2 = parseInt(document.getElementById("numero2").value ) ;
    sm.innerHTML = ("*");
   rs.innerHTML = (n1 * n2)
} 
function divide ()
{
    let sm = document.getElementById("accion");
    let rs = document.getElementById("respuesta")
    let n1 = parseInt(document.getElementById("numero1").value ) ;
    let n2 = parseInt(document.getElementById("numero2").value ) ;
    sm.innerHTML = ("/");
   rs.innerHTML = (n1 / n2)
} 



