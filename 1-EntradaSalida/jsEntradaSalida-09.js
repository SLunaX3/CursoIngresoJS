/*
Sonia Luna DIV I
E/S 09

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var porcentaje;
	var resultado;

	sueldo = txtIdSueldo.value;
	resultado = txtIdResultado.value;


	porcentaje = parseInt(sueldo) * 0.10;
	resultado = parseInt(sueldo) + porcentaje;


	document.getElementById('txtIdResultado').value = resultado;



}
//txtIdSueldo
//txtIdResultado