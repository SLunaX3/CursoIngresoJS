/*
Sonia Luna
DIV I
SWITCH 10

una agencia de viajes nos piden informar 
si hacemos viajes a lugares según la estación del año estemos, 
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" 
los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche  */

//txtIdEstacion
//txtIdDestino
function mostrar()
{
	var estacion;
	var destino;

	var mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;

	mensaje = "";

	switch (estacion)
	{
		case "Invierno": 
							
		if (destino == "Bariloche") //Solo Bariloche informa "se viaja" 
		{
			mensaje = "Se viaja."; 
		}
		else
		{
			//los demas destinos "No se viaja"
			{
				mensaje = "No se viaja."; 
			}
		}	
		break;

		case "Verano"://Verano:Se viaja a Mar del plata y Cataratas solamente
		if (destino == "Mar del plata" || destino == "Cataratas")
		{
			mensaje = "Se viaja."; 
		}
		else
		{
			{
				mensaje = "No se viaja."; 
			}

		}	
		break;

		case "Otoño": //Otoño: Se viaja a todos los destinos.
		mensaje = "Se viaja."
		break;

		default: //Primavera: solo no se viaja a Bariloche 
		if (destino == "Bariloche") 
		{
			mensaje = "No se viaja."; 
		}
		else 
		{
			mensaje = "Se viaja."
		}	

		break;


	}


	alert(mensaje);



}//FIN DE LA FUNCIÓN

