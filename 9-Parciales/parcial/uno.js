
function Mostrar()
{
	var perimetro;
	var base=document.getElementById('laBase').value;
	var altura;
	var superficie;
	altura=prompt("Ingrese el altura");
	altura=parseInt(altura);
	base=parseInt(base);
	perimetro=base*3;
	superficie=(base*altura)/2;
	
	alert("el perimetro del triangulo es " + perimetro );
	alert("la superficie del triangulo es " + superficie);	
}
