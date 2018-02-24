/*
	a-tenemos que ingresar alumnos , no sabemos cuantos hay y se va a pedir e nombre , tengo que saber cuantos alumnos ingrese
	b-promedio de notas que sacaron
	c-
*/
function Mostrar()
{
	var alumno;
	var acumulador=0;
	var nota;
	var nombre;
	var contador=0;
	var respuesta="si"
	var promedio
		
		while(respuesta== "si")
		{
			nombre=prompt("Ingrese un nombre");
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
		}
	promedio=acumulador/contador;
	document.write( " fueron " + contador + " alumnos ingresados , y el promedio de sus notas de examen es " + promedio);
}
