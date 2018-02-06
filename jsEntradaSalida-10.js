/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo;
	var sueldoConDescuento;
	sueldo=document.getElement('importe').value;
	sueldo=parseInt(sueldo);
    sueldoConDescuento=sueldo*0.75;
	sueldoConDescuento=parseInt(sueldoConDescuento);
	document.getElementById('Resultado').value=sueldoConDescuento;
    
    
}
