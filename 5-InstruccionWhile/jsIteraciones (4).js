function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	while(numero<0 || numero>9)
	{
		alert("Vuelve a ingresar un numero valido");
		numero= prompt("Ingrese el numero nuevamente");
	}

}//FIN DE LA FUNCIÓN