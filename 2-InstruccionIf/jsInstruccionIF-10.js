/*
Sonia Luna DIV I
IF 10

Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4  */

function mostrar()
{
	var numeroAleatorio;
	var mensaje;

	numeroAleatorio = Math.floor((Math.random() * 10) + 1);

	mensaje = "Nota :  " + numeroAleatorio + " .  ";

	if (numeroAleatorio<4)
	{
		alert(mensaje + "Vamos, la próxima se puede.");
	}
	else 
	{
		if (numeroAleatorio<9)
		{
		alert(mensaje + "APROBÓ");
		}
		else 
		{
			alert(mensaje + "EXCELENTE");
		}
	}



}//FIN DE LA FUNCIÓN

/*if (numeroAleatorio>8)
	{
		alert(mensaje + "EXCELENTE");
	}
	else 
	{
		if (numeroAleatorio>3 && numeroAleatorio<9)
		{
		alert(mensaje + "APROBÓ");
		}
		else 
		{
			if (numeroAleatorio<4) 
			{
				alert(mensaje + "Vamos, la próxima se puede.");
			}
		
		}
	}
*/