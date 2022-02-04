/*
Sonia Luna DIV I
E/S 10

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var porcentaje;
	var resultado;

	importe = txtIdImporte.value;
	resultado = txtIdResultado.value;


	porcentaje = parseInt(importe) * 0.25;
	resultado = parseInt(importe) - porcentaje;


	document.getElementById('txtIdResultado').value = resultado;



}
//txtIdImporte
//txtIdResultado