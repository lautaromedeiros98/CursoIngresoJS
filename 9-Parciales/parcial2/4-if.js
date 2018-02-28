//se ingresan dos numeros ,si son iguales se concatenan, si el primero es mayor que el segundo se multiplican , si el segundo es mayor se restan , si la multiplicacion da numero PAR ademas de mostrar el resultado se muestra el msj "es par"
//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese otro numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		resultado=numeroUno+""+numeroDos;
	}else
	{		
		if(numeroUno>numeroDos)
		{		
			resultado=numeroDos*numeroUno;
			if(resultado%2==0 && resultado!=0)
			{
				resultado= resultado +"es par";
			}	
		}else
		{
			resultado=numeroUno-numeroDos;
		}			
	}
	
	alert(resultado);

}

