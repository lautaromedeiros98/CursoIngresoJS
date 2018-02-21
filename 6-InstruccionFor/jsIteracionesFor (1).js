function Mostrar()
{
	var contadorDePositivos=0;
	var contadorDeNegativos=0;
	var contadorDeCero=0;
	var contadorDePar=0;
	var contadorDeImpar=0;
	var contador50=0;
	
	for(contador=-100;contador<100;contador++)
	{
		if(contador>0)
		{
			contadorDePositivos++;
		}
		else
		{
			if(contador>0)
			{
				contadorDeNegativos++;
			}
			else
			{
				contadorDeCero++;
			}
		}

	}
	if(contador%2==0 && contador !=)
	{
		contadorDePar++;
	}
	else
	{
		if(contador!=0)
		{
			contadorDeImpar++;
		}
	}
	switch(contador)
		{
			case 50:
				contador50++;
				break;
		}

}
	document.write("positivos"+contadorDePositivos);
	document.write("negativos"+contadorDeNegativos);
	document.write("cero"+contadorDeCero);
	document.write("par"+contadorDePar);
	document.write("impar"+contadorDeImpar);
	document.write("de 50:" +contador50);

	
	
}





//for(contador=0;contador<10;contador++)








/*for(;;)
	{
		contador++;
		document.write("<br>"+contador);
		if (contador==10)
		{
			document.write("<br>break"+contador);
			break;

		}
		if(contador==5)
		{
			continue;
		}
		document.write("<br>continue "+contador);
	*/
