/*
Sonia Luna DIV I
TP E/S 03

3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

//txtIdTemperatura

function FahrenheitCentigrados () 
{
	var temperaturaIngresada;
	var aCentígrados;
	var mensaje;

	temperaturaIngresada = parseFloat(txtIdTemperatura.value);

	aCentígrados = (temperaturaIngresada - 32) * 5/9;

	mensaje = temperaturaIngresada + "° Fahrenheit son ";
	mensaje += aCentígrados.toFixed(2) + "° Centígrados";

	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	var temperaturaIngresada;
	var aFarenheit;
	var mensaje;

	temperaturaIngresada = parseFloat(txtIdTemperatura.value);

	aFarenheit = (temperaturaIngresada * 9/5) + 32 ;

	mensaje = temperaturaIngresada + "° Centígrados son ";
	mensaje += aFarenheit.toFixed(2) + "° Fahrenheit";

	alert(mensaje);

	
}
