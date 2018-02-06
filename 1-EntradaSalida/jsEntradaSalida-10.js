/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo;
 var sueldoConAumento;
 sueldo=document.getElementById('sueldo').value;
 sueldo=parseInt(sueldo);
 sueldoConAumento=sueldo*0.75;
 sueldoConAumento=parseInt(sueldoConAumento);
 document.getElementById('resultado').value=sueldoConAumento;
    
}
