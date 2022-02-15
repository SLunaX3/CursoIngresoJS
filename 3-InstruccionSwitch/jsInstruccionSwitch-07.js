/*
Sonia Luna
DIV I
SWITCH 07

Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde se encuentra 
Norte, Sur, Este u Oeste*/

//txtIdDestino
function mostrar()
{
	var destino = txtIdDestino.value;
	var mensajeFinal;
	var mensaje;

	mensajeFinal = "Punto cardinal: C.A.B.A. . Su destino está al: ";

	switch(destino)
	{
	    case "Bariloche":
	    	mensaje = "Oeste";
	    	break;
	    case "Cataratas":
	        mensaje = "Norte. ";
	        break;		
		case "Mar del plata":
	        mensaje = "Este. ";
	        break;	 
	    case "Ushuaia": 
	        mensaje = "Sur. " ;
	        break;
	}


	alert(mensajeFinal + mensaje);



}//FIN DE LA FUNCIÓN