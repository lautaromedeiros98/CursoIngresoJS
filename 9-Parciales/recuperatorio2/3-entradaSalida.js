//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho=document.getElementById('ancho').value;
	var largo=prompt("Ingrese el largo del terreno");
	var resultado;
	var perimetroTotal;
	ancho=parseInt(ancho);
	largo=parseInt(largo);
	resultado=ancho*2 + largo*2;
	perimetroTotal=resultado*6; 
	alert("Se necesitan " + perimetroTotal + " metros de alambre;")
}

