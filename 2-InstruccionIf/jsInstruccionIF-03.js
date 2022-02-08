/*
Sonia Luna DIV I
IF 03

Al ingresar una edad debemos informar si la persona es mayor de edad, 
sino informar que es un menor de edad. */


function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	//si se cumple
	if (edad>17)
	{
		alert("La persona es Mayor de Edad");
	}
	//sino
	else
	{
		alert("La persona es Menor de Edad");
	}


//txtIdEdad

}//FIN DE LA FUNCIÓN

