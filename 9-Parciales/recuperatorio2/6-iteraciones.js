//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ventas;
	var contador=0;
	var acumulador=0;
	while(contador<7)
	{
		ventas=prompt("Ingrese un importe");
		ventas=parseInt(ventas);
		while(ventas<0 || ventas ==isNaN(ventas))
		{
			ventas=prompt("Ingrese un importe correcto");
			ventas=parseInt(ventas);
		}
		contador++;

		if(contador==1)
		{
			maximo=ventas;
			minimo=ventas
		}
		else
		{
			if(ventas>maximo)
			{
				maximo=ventas;
			}
			if(ventas<minimo)
			{
				minimo=ventas;
			}
		}
	}
	alert("La mayor venta fue de " +maximo);
	alert("La menor venta fue de " +minimo);	
}

