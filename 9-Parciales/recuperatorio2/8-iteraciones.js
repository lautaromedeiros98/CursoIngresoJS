//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	contador=0;
	acumulador=0;
	var respuesta;
	var numeroPar=0;
	var maximo;
	var minimo;
	var promedio;

	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		while(numero<0)
		{
			numero=prompt("Ingrese un positivo");
			numero=parseInt(numero);
		}
		contador++;
		respuesta=prompt("Desea continuar?");

		if(numero%2==0)
		{
			numeroPar++;
		}

		acumulador=acumulador+numero;

		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}

	}
	promedio=acumulador/contador;

	alert("La cantidad de numeros pares es " +numeroPar);
	alert("La suma de todos los numeros es " + acumulador);
	alert("el numero maximo es " + maximo + " y el numero minimo es " +minimo);

}

