/*
Sonia Luna
DIV I
SWITCH 05

Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.". */

//txtIdHora
function mostrar()
{
	var hora;
	var mensaje;

	hora = parseInt(txtIdHora.value);
	mensaje = "";


     if (hora>6 && hora<12)
     {   
        mensaje = "Es de mañana. ";
     }


	alert(mensaje);



}//FIN DE LA FUNCIÓN