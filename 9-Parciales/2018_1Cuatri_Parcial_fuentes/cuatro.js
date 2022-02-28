/*
Sonia Luna
DIV I
PRACTICA Parcial 04 2018
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto, de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, 
muestro el mensaje "la suma es xxx y supero el 10". 
*/
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado;
	var mensaje;


		numeroUno=prompt("Ingrese número: ");
		numeroUno=parseInt(numeroUno);
		while(isNaN(numeroUno))
		{
			numeroUno=prompt("Error. Ingrese número: ");
			numeroUno=parseInt(numeroUno);
		}
		numeroDos=prompt("Ingrese número: ");
		numeroDos=parseInt(numeroDos);
		while(isNaN(numeroDos))
		{
			numeroDos=prompt("Error. Ingrese número: ");
			numeroDos=parseInt(numeroDos);
		}
		//Si son iguales los muestro concatenados.
		if (numeroUno==numeroDos) 
		{
			mensaje = "El resultado es: "+numeroUno+""+numeroDos;
		}
		//Si el primero es mayor, los resto, de lo contrario los sumo.
		if (numeroUno>numeroDos) 
		{
			resultado= numeroUno - numeroDos;
			mensaje="El resultado es: "+resultado;
		}
		else
		{
			if(numeroUno<numeroDos)
			{
			resultado= numeroUno + numeroDos;
			mensaje="El resultado es: "+resultado;
			}
			
		}
		//Si la suma es mayor a 10 ,además de mostrar el resultado, 
		//muestro el mensaje "la suma es xxx y supero el 10". 
		if (resultado>10) 
		{
			mensaje="La suma es "+ resultado +", y supero el 10.";
		}

	alert(mensaje);
}

