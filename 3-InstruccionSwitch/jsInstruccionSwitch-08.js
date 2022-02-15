/*
Sonia Luna
DIV I
SWITCH 08

Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

//txtIdDestino
function mostrar()
{
	var destino = txtIdDestino.value;
	var mensajeFinal;
	var mensaje;

	mensajeFinal = "El este Destino hace: ";

	switch(destino)
	{
	    case "Bariloche":
	    case "Ushuaia":
	    	mensaje = "FRIO.";
	    	break;
	    case "Cataratas":
	    case "Mar del plata":
	        mensaje = "CALOR.";
	        break;		
	}


	alert(mensajeFinal + mensaje);



}//FIN DE LA FUNCIÓN