//ingresar 2 datos , primero letra y segundo numero , los numeros van a estar entre -50 y 50 ,  y informar, el promedio de los numeros psitivos , cantidad de impares , suma de todos los numeros cuya letra halla sido un a vocal , numero maximo y letra con la cual fue ingresado, validar letra

function Mostrar()
{
	var numero;
	var letra;
	var respuesta="si";
	var numeroPositivo;
	var numeroPar;
	var numeroImpar;
	var acumulador=0;
	var contador=0;
	var promedioNumeroPositivo;
	var contadorNPositivos=0;
	var acumuladorPositivos=0;
	
	while(respuesta=="si")
	{
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
			while(numero<-50 || numero>50)
			{
			numero=prompt("Ingrese un numero correcto");
			numero=parseInt(numero);
			}
		letra=prompt("ingrese una letra");
		respuesta=prompt("Desea ingresar mas numeros?");
		contador++;
		
		
		
		if(numero%2==0)
		{
			numero=numeroPar;
		}
		if(numero%2!==0)
		{
			numero=numeroImpar;
		}
		if(numero>0)
		{			 	
			acumuladorPositivos=acumuladorPositivos+numero;
			promedioNumeroPositivo=acumuladorPositivos/contadorNPositivos;	
		}
	}

	alert("El promedio de los numeros positivos es " + promedioNumeroPositivo );

}
