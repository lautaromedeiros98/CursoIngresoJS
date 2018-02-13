/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos
	var PrecioTres;
	var resultado;
		
		PrecioUno=document.getElementById('PrecioUno').value;
		PrecioDos=document.getElementById('PrecioDos').value;
		PrecioTres=document.getElementById('PrecioTres').value;
			
			PrecioUno=parseInt(PrecioUno);
			PrecioDos=parseInt(PrecioDos);
			PrecioTres=parseInt(PrecioTres);
				
				resultado=PrecioUno+PrecioDos+PrecioTres;
				resultado=parseInt(resultado);
					
					alert(resultado);

}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos;
	var PrecioTres;
	var suma;
	var resultado;

		PrecioUno=document.getElementById('PrecioUno').value;
		PrecioDos=document.getElementById('PrecioDos').value;
		PrecioTres=document.getElementById('PrecioTres').value;

			PrecioUno=parseInt(PrecioUno);
			PrecioDos=parseInt(PrecioDos);
			PrecioTres=parseInt(PrecioTres);

				suma=PrecioUno+PrecioDos+PrecioTres;
				resultado=suma/3;

					alert(resultado);
	
}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos
	var PrecioTres;
	var suma;
	var resultado;
		
		PrecioUno=document.getElementById('PrecioUno').value;
		PrecioDos=document.getElementById('PrecioDos').value;
		PrecioTres=document.getElementById('PrecioTres').value;
			
			PrecioUno=parseInt(PrecioUno);
			PrecioDos=parseInt(PrecioDos);
			PrecioTres=parseInt(PrecioTres);

				suma=PrecioUno+PrecioDos+PrecioTres;
				resultado=suma+suma*0.21;

					alert(resultado);
				

}