/*
Sonia Luna DIV I
IF 04

Al ingresar una edad debemos informar si la persona es adolescente, 
edad entre 13 y 17 años (inclusive) .  */


function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	/*and &&
	priemro Falso ->segundo NO lo evaluo
	primero Verdadero -> segundo lo evalua

 	or ||
	priemro Verdadero -> segundo No lo evaluo
	priemro Falso -> segundo se evalua*/
	
	if (edad>12 && edad<18)
	{
		alert("Ud es un Adolescente");
	}


//txtIdEdad

}//FIN DE LA FUNCIÓN

