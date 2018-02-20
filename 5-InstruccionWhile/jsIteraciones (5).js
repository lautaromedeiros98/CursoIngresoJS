function Mostrar()
{

	var sexo = prompt("ingrese f ó m .");
	sexo== "f" || "m";
		while (sexo != "f" && sexo != "m" )
		{
			alert("Sexo incorrecto");
			sexo= prompt("ingrese nuevamente.");
		}

			if (sexo= "f")
			{
				document.getElementById('Sexo').value=("El sexo es femenino "  );
			}
			if (sexo = "m")
			{
				document.getElementById('Sexo').value=("El sexo es masculino " );
			}



}//FIN DE LA FUNCIÓN