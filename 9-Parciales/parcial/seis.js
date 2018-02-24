function Mostrar()
{
	var ventas;
	var contador=0;
	var acumulador=0;
	var maximo;
	var minimo;	
		while(contador<24)	
		{
			ventas=prompt("Ingrese importe");
			ventas=parseInt(ventas);
			acumulador=acumulador+ventas;
			contador++;

				if(ventas < 0)
				{
					alert("Ingrese un numero valido")
					ventas=prompt("Ingrese un importe");
				}



				if(contador==1)
				{
					maximo = ventas;
					minimo = ventas;
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
	alert("El mayor importe de venta fuè " + maximo);
	alert("El menor importe de venta fuè " + minimo);
}
