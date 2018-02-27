function Mostrar()
{
	var edad;
	var sexo;
	var acumulador=0;
	var contador=0;
	var promedio;
	var contadorVarones=0;
	var acumulador=0;
	while(contador<5)
	{
		edad=prompt("Ingrese la edad");
		edad=parseInt(edad);
		while(edad<0 || edad>100 || edad==isNaN(edad))
		{
			edad=prompt("Ingrese la edad correcta");
			edad=parseInt(edad);
		}
		sexo=prompt("Ingrese sexo");
		while(sexo !="f" && sexo !="m")
		{
			sexo=prompt("Ingrese sexo correcto");
		}
		contador++;
		

		if(contador==1)
		{
			maximo=edad;
			minimo=edad;
		}
		else
		{
			if(edad>maximo)
			{
				maximo=edad;
			}
			if(edad<minimo)
			{
				minimo=edad;
			}
		}
		if(sexo=="m" && edad>=20)
		{
			contadorVarones++;
		}

	}
	acumulador=acumulador+edad;
	promedio=acumulador/contadorVarones;
	alert("El promedio de las edades es "+promedio);
	alert("la edad mas baja es "+minimo);
	alert("la cantidad de varones que su edad es mayor o igual a 20 es " +contadorVarones);
}
