//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno=prompt("ingrese un numero");
	var numeroDos=prompt("ingrese otro numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	var resultado;
	if(numeroUno==numeroDos)
	{
		resultado=numeroUno*numeroDos;
		alert("El resultado es " +resultado );
	}
	else if(numeroUno>numeroDos)
	{
		resultado=numeroUno-numeroDos;
		alert("El resultado es "+resultado );
	}
	else
	{
		resultado=numeroUno+numeroDos;
		alert("el resultado es " + resultado);
	}
	
}

