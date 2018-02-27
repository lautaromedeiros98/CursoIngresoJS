function Mostrar()
{
	var precioUno=document.getElementById('precioUno').value;
	var precioDos=document.getElementById('precioDos').value;
	var precioTres=document.getElementById('precioTres').value;
	var promedio;
	var suma;
	precioUno=parseInt(precioUno);
	precioDos=parseInt(precioDos);
	precioTres=parseInt(precioTres);
	suma=precioUno+precioDos+precioTres;
	promedio=suma/3;

	alert("La suma de la compra es " + suma);
	alert("El promedio de la compra es "+promedio );

}
