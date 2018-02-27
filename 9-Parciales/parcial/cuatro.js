
// solo if , ingresar 3 numeros e informar cual es el mayor , intentar el else if

/*
	if(numerouno<numerodos && numerouno<3)
	{
	maximo=numerouno
	}
	else if
	{
	maximo=numerodos
	}
	else
	{
	maximo=numerotres
	}

	if(numerouno>numerodos && numerouno>numerotres)
	{
	minimo=numerouno
	}
	else if
	{
	minimo=numerodos
	}
	else
	{
	minimo=numerotres
	}
*/

function Mostrar()
{
	var numeroUno=prompt("ingrese un numero");
	var numeroDos=prompt("ingrese un numero");
	var numeroTres=prompt("ingrese un numero");
	var maximo;
	numeroUno=parseInt(numeroUno); 
	numeroDos=parseInt(numeroDos);
	numeroTres=parseInt(numeroTres);
	var minimo;
	
	if(numeroUno>numeroDos && numeroUno>numeroTres)
	{
		maximo=numeroUno;
		alert("el numero maximo es  " + maximo);
	}
	if(numeroDos>numeroUno && numeroUno>numeroTres)
	{
		maximo=numeroDos;
		alert("el numero maximo es " +maximo);
	}
	if(numeroTres>numeroUno && numeroTres>numeroDos)
	{
		maximo=numeroTres;
		alert("el numero maximo es " +maximo);
	}
	if(numeroUno==numeroDos && numeroUno==numeroTres)
	{
		maximo=numeroUno;
		alert("el numero maximo es " + maximo);
	}
	if(numeroUno<numeroDos && numeroUno<numeroTres)
	{
		minimo=numeroUno;
		alert("el numero minimo es " + minimo);
	}
	if(numeroDos<numeroUno && numeroDos<numeroTres)
	{
		minimo=numeroDos;
		alert("el numero minimo es " + minimo);
	}
	if(numeroTres<numeroUno && numeroTres<numeroDos)
	{
		minimo=numeroTres;
		alert("el numero minimo es " + minimo);
	}

}
