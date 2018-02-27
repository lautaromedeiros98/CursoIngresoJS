//mostrar el resultado por id , pedimos precio y porcentaje de descuento que se va hacer y mostramos el importe por id
function Mostrar()
{
	var precio;
	var descuento;
	var importeFinalUno;
	var importeFinalDos;
	var importeFinalTres;
	precio=prompt("ingrese un valor");
	descuento=prompt("ingrese el descuento que se va a realizar");
	precio=parseInt(precio);
	descuento=parseInt(descuento);

	importeFinalUno=precio*descuento;
	importeFinalDos=importeFinalUno/100;
	importeFinalTres=precio-importeFinalDos;

	document.getElementById("importeFinal").value=importeFinalTres;


}
