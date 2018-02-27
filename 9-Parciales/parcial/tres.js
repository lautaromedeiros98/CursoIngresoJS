function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var perimetroFinal;
	largo=document.getElementById('alrgo').value;
	ancho=document.getElementById('ancho').value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro=largo+ancho+largo+ancho;
	perimetroFinal=perimetro*3;
	alert("Se necesitan " + perimetroFinal + " metros de hilo");


}
