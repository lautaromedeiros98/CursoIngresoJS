function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numeroRandom;
	numeroRandom=Math.floor(Math.random() *10 + 1);
	if(numeroRandom>8)
		{
			alert("excelente " + numeroRandom);
		}
		if(numeroRandom>3 && numeroRandom<8)
		{
			alert("aprobado " + numeroRandom);
		}
		if(numeroRandom<4)
		{
			alert(" vamos la proxima se puede " + numeroRandom);
		}


/*
	if(numeroRandom>8)
			{
				alert("excelente" + numeroRandom);
			}else {
		             if(numeroRandom>8)
			{
				alert("excelente" + numeroRandom);
			}
				else{
						if(numeroRandom>3)
			{
				alert("aprobado" + numeroRandom);
			}else
			{
				alert("next" + numeroRandom);
			}
				}		
			}
			}
			
		*/
		//hecho perfecto
		













}//FIN DE LA FUNCIÓN

