    const g_tierra = 9.807;
    const g_marte = 3.711;
    const g_jupiter = 24.8;
    const g_mercurio = 3.7;
    const g_urano = 8.89;
    const g_venus = 8.89;
    const g_saturno = 10.44;
    const g_neptuno = 11.15;
    const g_sol = 274;
function marte()
{
 nombre = "Marte";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_marte / g_tierra;
 peso_final = Math.round(peso_final);
}
function jupiter()
{
 nombre = "Jupiter";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_jupiter / g_tierra;
 peso_final = Math.round(peso_final);
}
function mercurio()
{
 nombre = "Mercurio";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_mercurio / g_tierra;
 peso_final = Math.round(peso_final);
}
function urano()
{
 nombre = "Urano";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_urano / g_tierra;
 peso_final = Math.round(peso_final);
}
function venus()
{
 nombre = "Venus";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_venus / g_tierra;
 peso_final = Math.round(peso_final);
}
function saturno()
{
 nombre = "Saturno";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_saturno / g_tierra;
 peso_final = Math.round(peso_final);
}
function neptuno()
{
 nombre = "Neptuno";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_neptuno / g_tierra;
 peso_final = Math.round(peso_final);
}
function sol()
{
 nombre = "el Sol";
 peso_persona = document.getElementById("peso_usuario").value;
 peso_final = peso_persona * g_sol / g_tierra;
 peso_final = Math.round(peso_final);
}


function listo()
{
    
    peso_planeta.innerHTML = ("Tu peso en "+ nombre + " es: <strong>" + peso_final + " kilos</strong>");
}


