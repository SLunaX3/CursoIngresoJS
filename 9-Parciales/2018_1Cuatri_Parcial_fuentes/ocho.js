/*
Sonia Luna
DIV I
PRACTICA Parcial 08 2018
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
	var promedioPositivos;
	var acumuladorPositivos;
	var contadorPositivos;
	var acumuladorNegativos;
	var maximo,
	var minimo;
	var banderaMaximo;
	var banderaMinimo;
	var letraMaximo;
	var letraMinimo;

	letra="";
	respuesta=true;
	contadorPares=0;
	contadorImpares=0;
	contadorCeros=0;
	acumuladorPositivos=0;
	contadorPositivos=0;
	acumuladorNegativos=0;
	banderaMaximo=false;
	banderaMinimo=false;

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


		
		if (numero>0) 
		{//d) El promedio de todos los números positivos ingresados.
			acumuladorPositivos += numero;
			contadorPositivos++;

			if (numero>maximo||banderaMaximo==false)//f) El número y la letra del máximo y el mínimo.
			{
				maximo = numero;
				letraMaximo = letra;
				banderaMaximo = true;
			}
		}	
		else
		{
			if (numero<0) //e) La suma de todos los números negativos.
			{
				acumuladorNegativos += numero;
				contadorNegativos++;

			if (numero<minimo||banderaMinimo==false)//f) El número y la letra del máximo y el mínimo.
			{
				minimo = numero;
				letraMinimo = letra;
				banderaMinimo = true;
			}

			else//c) La cantidad de ceros.
			{
				contadorCeros++;
			}
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

	respuesta=confirm("Desea hacer otro ingreso de datos?");	
	}

	document.write("Cantidad de números pares: "+contadorPares+"<br>");
	document.write("Cantidad de números impares: "+contadorImpares+"<br>");
	document.write("Cantidad de ceros: "+contadorCeros+"<br>");
	if (contadorPositivos>0)//d) El promedio de todos los números positivos ingresados.
	{
		promedioPositivos = acumuladorPositivos/contadorPositivos;
		document.write("Promedio de los positivos:"+ promedioPositivos +"<br>");
	}
	else
	{
		document.write("No pudo calcularse el promedio de los positivos <br>");
	}
	document.write("Suma de negativos:"+ acumuladorNegativos +"<br>");
	document.write("Número Máximo y su letra:"+maximo+""+letraMaximo+"<br>");
	document.write("Número Mínimo y su letra:"+minimo+""+letraMinimo+"<br>");

}
