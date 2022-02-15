/*
Sonia Luna
DIV I
SWITCH 06

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.".  */

//txtIdHora
function mostrar()
{
	var hora;
	var mensaje;

	hora = parseInt(txtIdHora.value);
	mensaje = "la hora no existe.";

	if(hora>=0 && hora<25)
	{
	     if (hora>6 && hora<12)
	     {   
	        mensaje = "Es de mañana. ";
	     }

	     if (hora>11 && hora<20)
	     {   
	        mensaje = "Es de tarde. ";
	     }

	     if (hora>=20 && hora<24 || hora>=0 && hora<7)
	     {   
	        mensaje = "Es de noche. ";
	     }


	}


	alert(mensaje);



}//FIN DE LA FUNCIÓN