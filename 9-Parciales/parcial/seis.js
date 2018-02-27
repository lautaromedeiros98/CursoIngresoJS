function Mostrar()
{
	var ventas=prompt("Ingrese un importe");
	ventas=parseInt(ventas);
	var contador=0;
	var acumulador=0;
	var maximo;
	var minimo;


	while(contador<24)
	{
		ventas=prompt("ingrese un importe");
		contador++;
		
		if(contador==1)
		{
		maximo=ventas;
		minimo=ventas;
		}

	if(ventas>maximo)
		{
		maximo=ventas;
		}

	if(ventas<minimo)
		{
		minimo=ventas;
		}



	}

	alert("el importe maximo fue " + maximo);
	alert("el importe minimo fue " + minimo);
}
