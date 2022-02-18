/*
Sonia Luna
DIV I
WHILE 03

al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	var claveIngresada;
	var mensaje;

	claveIngresada = prompt("Ingrese la clave");
	mensaje = "";
/*
	do
	{
		claveIngresada = prompt("Ingrese la clave");
	}
	while(claveIngresada != "utn750");
*/


	while (claveIngresada != "utn750")
	{
		alert("La clave es incorrecta, intente otra vez.");
		claveIngresada = prompt("Ingrese la clave");
	}


	alert("La clave ingresada es correcta");

}//FIN DE LA FUNCIÓN
