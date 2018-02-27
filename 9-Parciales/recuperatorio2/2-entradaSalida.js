//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=prompt("ingrese un importe");
	var ivaUno;
	var ivaDos;
	var resultado;
	importe=parseInt(importe);
	ivaUno=importe*21;
	ivaDos=ivaUno/100;
	resultado=importe+ivaDos;
	resultado=parseInt(resultado);
	document.getElementById('importe').value=resultado;
}

