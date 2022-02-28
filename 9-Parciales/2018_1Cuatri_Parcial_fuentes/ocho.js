/*
Sonia Luna
DIV I
PRACTICA Parcial 03 2020
Realizar el algoritmo que permita iterar el ingreso de dos datos, 
una letra y un número entre -100 y 100 (validar) 
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

*/
function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var contadorPares;
	var contadorImpares;
	var contadorCeros;

	letra="";
	respuesta=true;
	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;

	while(respuesta==true)
	{
		letra=prompt("Ingrese una letra: ");
		while(letra=="")
		{
			letra=prompt("Error. Ingrese una letra: ");
		}

		numero=prompt("Ingrese un número: ");
		numero=parseInt(numero);
		while(isNaN(numero)||numero<(-100)||numero>100)
		{
			numero=prompt("Error. Ingrese un número ente -100 y 100: ");
			numero=parseInt(numero);
		}

		//a) La cantidad de números pares.
		if (numero%2 ==0) 
		{
			contadorPares++;
		}
		//b) La cantidad de números impares.
		else 
		{
			contadorImpares++;
		}
		//c) La cantidad de ceros.
		contadorCeros++;


	respuesta=confirm("Desea hacer otro ingreso de datos?");	
	}

	document.write("Cantidad de números pares: "+contadorPares+"<br>");
	document.write("Cantidad de números impares: "+contadorImpares+"<br>");
	document.write("Cantidad de ceros: "+contadorCeros+"<br>");
}
