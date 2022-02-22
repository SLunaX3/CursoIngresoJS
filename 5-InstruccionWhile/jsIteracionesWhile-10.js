/*
Sonia Luna
DIV I
WHILE 10

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). 

10- De los positivos el mas grande
11- De lso negativos el mas chico
*/

function mostrar()
{ 
	var respuesta;
	var numeroIngresado;
	var sumaPositivos;
	var sumaNegativos;
	var contadorPositivos;
	var contadorNegativos;
	var contadorCeros;
	var contadorPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var maximoPositivo;
	var minimoNegativo;
	//var banderaMaximo;
	//var banderaMinimo;
	// PORQUE YA ESTÁ EL CONTADOR Y SE APROVECHA COMO BANDERA

	respuesta =true;
	sumaPositivos =0;
	sumaNegativos =0;
	contadorPositivos =0;
	contadorNegativos =0;
	contadorCeros =0;
	contadorPares =0;
	//banderaMaximo =false;
	//banderaMinimo =false;

	while(respuesta==true)
	{
        numeroIngresado = prompt("Ingrese un número:");
        numeroIngresado = parseInt(numeroIngresado);

			if (numeroIngresado>0) 
			{
				sumaPositivos += numeroIngresado;
				contadorPositivos++;

				if (numeroIngresado>maximoPositivo||contadorPositivos==1)
				{									//banderaPositivos==false

					maximoPositivo = numeroIngresado;
					//banderaMaximo = true;
				}
			}	
			else
			{
				if (numeroIngresado<0) 
				{
					sumaNegativos += numeroIngresado;
					contadorNegativos++;

					if (numeroIngresado<minimoNegativo||contadorNegativos==1)
					{									//banderaNegativos==false

						minimoNegativo = numeroIngresado;
						//banderaMinimo = true;
					}
				}
				else
				{
					contadorCeros++;
				}
			}
			if (numeroIngresado%2 ==0) 
			{
				contadorPares++;
			}	

		respuesta = confirm("Desea ingresar otro número?");

	}

	diferencia = contadorPositivos - contadorNegativos;

	document.write("la suma de positivos es :"+ sumaPositivos +"<br>");	
	document.write("la suma de negativos es :"+ sumaNegativos +"<br>");
	document.write("la cantidad de positivos es :"+ contadorPositivos +"<br>");
	document.write("la cantidad de negativos es :"+ contadorNegativos +"<br>");
	document.write("la cantidad de ceros es :"+ contadorCeros +"<br>");
	document.write("la cantidad de pares es :"+ contadorPares +"<br>");
	

	if (contadorPositivos>0) 
	{
		promedioPositivos = sumaPositivos/contadorPositivos;
		document.write("el promedio de los positivos es :"+ promedioPositivos +"<br>");
	}
	else
	{
		document.write("no pudo calcularse el promedio de los positivos <br>");
	}

	if (contadorNegativos>0) 
	{
		promedioNegativos = sumaNegativos/contadorNegativos;
		document.write("el promedio de los negativos es :"+ promedioNegativos +"<br>");
	}
	else
	{
		document.write("no pudo calcularse el promedio de los negativos <br>");
	}

		document.write("la diferencia entre cantidad de positivos y negativos es :"+ diferencia +"<br>");


}