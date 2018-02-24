/*
	a-tenemos que ingresar alumnos , no sabemos cuantos hay y se va a pedir e nombre , tengo que saber cuantos alumnos ingrese
	b-promedio de notas que sacaron
	c-cantidad de mujeres
	d-cantidad de varones
	e- cantidad de varones desaprobados
	f- saber el nombre de la mejor nota , primero nombre y despues la nota
	g-promedio nota de las mujeres
	h-sexo del menor edad
	i-promedio de las edades de los aprobados 177/cantidad de aprobados
	j-cantidad de notas pares
	k-cantidad de notas impares
*/
function Mostrar()
{
	var alumno;
	var acumulador=0;
	var nota;
	var nombre;
	var contador=0;
	var respuesta="si";
	var promedio;
	var sexo;
	var contadorVarones=0;
	var contadorMujeres=0;
	var edad;
	var contadorVaronesDesaprobados=0;
	var nombreMaximo;
	var notaMaxima;
	var maximo;
	var minimo;
	var promedioMujeres;
	var sumaDeNotasMujeres=0
	var notasDeMujeres=0;
	var acumuladorMujeres=0
	var sexoDelMenorEdad;


		
		while(respuesta== "si")
		{
			nombre=prompt("Ingrese un nombre");
			edad=prompt("Ingrese la edad");
				
			while(edad < 0 || edad >100 )
			{
				edad=prompt("Ingrese nuevamente la edad entre 0 y 100");
			}


			sexo=prompt("¿Sexo?");
				
			while(sexo != "f" && sexo!= "m")
			{
				sexo=prompt("Ingrese un sexo correcto");
			}
			if(sexo=="f")
					{
						contadorMujeres++;
					}
			if(sexo=="m")
					{
						contadorVarones++;
					}			
			

			nota=prompt("Ingrese la nota del examen");
			nota=parseInt(nota);
				
			while(nota<0 || nota>10)
			{
				nota=prompt("Ingrese la nota del examen");
				nota=parseInt(nota);
			}

			acumulador=acumulador+nota;
			respuesta=prompt("¿Desea ingresar mas alumnos?");
			contador++;

			if(sexo=="m" && nota<4)
			{
				contadorVaronesDesaprobados++;
			}

			if( contador ==1)
			{
				maximo=nota;
				minimo=nota;
				nombreMaximo=nombre;
			}
			else
			{
				if(nota>maximo)
				{
					maximo=nota;
				}
				if(nota<minimo);
				{
					minimo=nota;
				}
			}

			notaMaxima=maximo;

				if(sexo=="f")
				{					
					acumuladorMujeres=acumuladorMujeres+nota;
					promedioMujeres=acumuladorMujeres/contadorMujeres;
				}

				if( contador ==1)
				{
					maximo=edad;
					minimo=edad;
					sexoDelMenorEdad=sexo;
				}
				else
				{
					if(edad>maximo)
					{
						maximo=edad;
					}
					if(edad<minimo)
					{
						sexoDelMenorEdad=sexo;
						minimo=edad;
					}
					
				}




		}
	promedio=acumulador/contador;
	document.write( " fueron " + contador + " alumnos ingresados , y el promedio de sus notas de examen es " + promedio + ". La cantidad de varones es " + contadorVarones + " Y la cantidad de mujeres es " + contadorMujeres + " La cantidad de varones desaprobados son " + contadorVaronesDesaprobados +" La nota maxima fue de " + nombreMaximo + " El promedio de las mujeres es " + promedioMujeres + " El sexo de menor edad es " + sexoDelMenorEdad);
}
