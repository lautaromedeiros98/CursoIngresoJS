function Mostrar()
{
	var numeroUno=prompt("Ingrese un numero");
	var numeroDos=prompt("Ingrese otro numero");
	var resultado;
	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);
	resultado=numeroUno+numeroDos;
	if(resultado>0)
	{
		document.write("el resultado es positivo " +resultado);		
	}
	if(resultado<0)
	{
		document.write("el resultado es negativo "+resultado);
	}
	if(resultado==0)
	{
		document.write("el resultado es cero "+resultado);
	}

}
