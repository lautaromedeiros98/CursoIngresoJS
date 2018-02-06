/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno 
	var numeroDos 
    var resultado;
    
    numeroUno=document.getElementById('numeroUno').value; //tomo datos
    numeroDos=document.getElementById('numeroDos').value;
    
    numeroUno=parseInt(numeroUno);  //transformo
    numeroDos=parseInt(numeroDos);
    
    resultado=numeroUno+numeroDos;  //opero
    
    alert(resultado); //muestro


   
   
}

