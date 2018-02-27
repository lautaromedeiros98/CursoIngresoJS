//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var sexo;
	var nota;
	var contador=0;
	var acumulador=0;
	var promedio;
	var contadorVarones=0;
	while(contador<6)
	{
		nota=prompt("Ingrese una nota");
		nota=parseInt(nota);
		while(nota <0 || nota >10 || nota==isNaN(nota))
		{
			nota=prompt("Ingrese una nota entre 0 y 10");
			nota=parseInt(nota);
		}
		sexo=prompt("Ingrese sexo")
		while(sexo !="f" && sexo!="m" || sexo==isNaN(sexo) )
		{
			sexo=prompt("Ingrese un sexo correcto , f o m")
		}
		contador++
		acumulador=acumulador+nota;

		if(contador==1)
		{
			maximo=nota;
			minimo=nota;
		}
		else
		{
			if(nota>maximo)
			{
				maximo=nota;
			}
			if(nota<minimo)
			{
				minimo=nota;
			}
		}

		if(sexo=="m" && nota>5)
		{
			contadorVarones++;
		}
	}
	promedio=acumulador/contador;

	alert("El promedio de las notas totales es " + promedio);
	alert("la nota mas baja es "+minimo);
	alert("la cantidad de varones que su nota es mayor o igual a 6 es " +contadorVarones);
}

