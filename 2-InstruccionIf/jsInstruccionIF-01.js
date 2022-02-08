/*
Sonia Luna DIV I
IF 01

Al ingresar una edad que sea igual a 15, 
mostrar el mensaje "niña bonita". */

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad==15)
	{
		alert("niña bonita");
	}

	alert("Estoy fuera del if. Me ejecuto igual");

//txtIdEdad

}//FIN DE LA FUNCIÓN

/*
Operadores aritmeticos: +, -, *, /, %
Operadores relacionales: >=, <=, ==, >, <
Operadores logicos: && (and), || (or), ! (negacion)
&& -> "doble Anderson"
|| -> disyuncion
condicion -> valor de verdad (verdadero o falso)
valor de verdad:
falso -> false o Ø
verdadera -> true o cualquier valor distinto de Ø
*/