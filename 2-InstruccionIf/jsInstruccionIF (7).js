function Mostrar()
{
//tomo la edad  
	var edad;
	var soltero;
	edad=document.getElementById('edad').value;
	soltero=document.getElementById('soltero').value;
	if(edad<18 +soltero )
	{
		alert(" Es menor de edad");
	}

 // || <- significa "O" en el if
 // else significa "Sino"
	


}//FIN DE LA FUNCIÓN