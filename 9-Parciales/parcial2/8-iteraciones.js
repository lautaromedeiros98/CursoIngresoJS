//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
//pedir nombre de un nombre, peso del animal validar mayor a 0 , y la temperatura de su habitat; la temperatura puede ser entre -40 o +40 , al final debemos informar , la cantidad de temperaturas pares ingresadas, cantidad de temperaturas impares , nombre del animal mas pesado
//nombre del animal menos pesado, cantidad de animales cuyo habitat tiene -0º de temperatura; promedio de peso de todos los animales , temperatura maxima y minima ingresada;
function Mostrar()
{
	var nombre;
	var peso;
	var temperatura;
	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var temperaturaPar=0;
	var temperaturaImpar=0;
	var nombrePesado;
	var nombreMenosPesado;
	var maximoPeso;
	var maximoNombre;
	var minimoPeso;
	var minimoNombre;
	var minimoTemperatura;
	var maximoTemperatura;

	while(respuesta!="no")
	{

		nombre=prompt("Ingrese un nombre");
		while(!isNaN(nombre))
		{
			nombre=prompt("Ingrese un nombre correcto");
		}

		peso=prompt("Ingrese el peso del nombre");
		peso=parseInt(peso);
		while(peso<=0 || isNaN(peso))
		{
			peso=prompt("Ingrese un peso valido");
			peso=parseInt(peso);
		}
		acumulador=acumulador+peso;

		temperatura=prompt("Ingrese la temperatura del habitat en la que el nombre vive");
		temperatura=parseInt(temperatura);
		while(temperatura< -40 || temperatura>40 || isNaN(temperatura))
		{
			temperatura=prompt("Ingrese la temperatura correcta entre -40 y 40");
			temperatura=parseInt(temperatura);
		}
		
		if(temperatura%2==0 && temperatura!=0)
		{
			temperaturaPar++;
		}
		else if(temperatura%2==1 && temperatura!=0)
		{
			temperaturaImpar++;
		}

		if(contador==1)
		{
			maximoPeso=peso;
			maximoNombre=nombre;
			minimoPeso=peso;
			minimoNombre=nombre;
			maximoTemperatura=temperatura;
			minimoTemperatura=temperatura;
		}
		else
		{
			if(peso>maximoPeso)
			{
				maximoPeso=peso;
				maximoNombre=nombre;
			}
			if(peso<minimoPeso)
			{
				minimoPeso=peso;
				minimoNombre=nombre;
			}
			
		}


		respuesta=prompt("¿Desea ingresar mas nombrees?");
	}	

	alert("La cantidad de temperaturas pares es " +temperaturaPar);
	alert("La cantidad de temperaturas impares es " +temperaturaImpar);
}

