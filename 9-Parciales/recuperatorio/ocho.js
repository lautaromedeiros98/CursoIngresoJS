function Mostrar()
{
	var numero;
	var respuesta=prompt("¿Desea ingresar un numero?");
	var contador=0;
	var acumulador=0;
	var numeroPar=0;
	var promedio;
	while(respuesta!="no")
	{
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		while(numero<0)
		{
			numero=prompt("Ingrese un numero correcto");
			numero=parseInt(numero);
		}
		respuesta=prompt("¿Desea ingresar un numero?");
		contador++;

		if (numero%2 == 0)
		{
			numeroPar++;
		}

		acumulador=acumulador+numero;
		promedio=acumulador/contador;

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
	alert("la cantidad de numeros pares es " + numeroPar );
	alert("el promedio de todos los numeros es " + promedio );
	alert("la suma de todos los numeros es "+acumulador);
	alert("el numero mas bajo es "+minimo);
	alert("el numero mas alto es "+maximo);

}
