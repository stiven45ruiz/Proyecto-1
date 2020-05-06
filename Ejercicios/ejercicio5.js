const peso_planate = document.getElementById("peso_planeta");
const g_tierra = 9.8;
const g_marte = 3.711;
const g_jupiter = 24.8;
const g_mercurio = 3.7;
const g_urano = 8.89;
const g_venus = 8.89;
const g_saturno = 10.44;
const g_urano = 11.15;
const g_sol = 274;

var usuario = prompt("Cual es tu peso?");
var planeta = parseInt(prompt("Elige tu planeta\n1 es marte, 2 es jupiter"));
var peso = parseInt(usuario);

var peso_final;
var nombre;
if (planeta == 1)
{
  peso_final = peso * g_marte / g_tierra;
  nombre ="Marte";
}
else if (planeta == 2)
{
  peso_final = peso * g_jupiter / g_tierra;
  nombre ="Jupiter";
}
else if (planeta == 2)
{
  peso_final = peso * g_jupiter / g_tierra;
  nombre ="mercurio";
}
else
{
peso_final = 1000000; 
nombre = "Kripton";
}


peso_final = parseInt(peso_final);
peso_planeta.innerHTML = ("tu peso en "+ nombre + " es <strong>" + peso_final + " kilos</strong>");