/*
Sonia Luna
DIV I
WHILE 04

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	var numeroIngresado;

	numeroIngresado = parseInt(prompt("Ingrese un número entre 0 y 10."));

	while (numeroIngresado<0 || numeroIngresado>9)
	{
		numeroIngresado = prompt("Número incorrecto.");
		numeroIngresado = parseInt(numeroIngresado);
	}

	txtIdNumero.value = numeroIngresado;

}//txtIdNumero