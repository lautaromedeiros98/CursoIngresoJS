function Mostrar()
{
  var resultado;
  var importe=prompt("ingrese importe");
  importe=parseInt(importe);
  resultado=importe*0.75;
  resultado=parseInt(resultado);
  document.getElementById('importeFinal').value=resultado;
}
