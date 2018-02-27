function Mostrar()
{
	var peso;
	var contador=0;
	while(contador<50)
	{
		peso=prompt("Ingrese el peso");
		peso=parseInt(peso);
		while(peso<0 || isNaN(peso))
		{
			peso=prompt("Ingrese el peso");
			peso=parseInt(peso);
		}
		contador++;
		if(contador==1)
		{
			maximo=peso;
			minimo=peso;
		}
		if(peso>maximo)
		{
			maximo=peso;
		}	
		if(peso<minimo)
		{
			minimo=peso;
		}

	}

	alert("El container mas pesado pesa "+maximo);
	alert("el container mas liviano pesa "+minimo);
}
