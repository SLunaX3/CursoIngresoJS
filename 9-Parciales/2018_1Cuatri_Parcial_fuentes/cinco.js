/*
Sonia Luna
DIV I
PRACTICA Parcial 05 2018
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula 
(Mercurio y Venus están antes que la tierra). 
*/
function mostrar()
{
	var planeta;
	var mensaje;

	planeta="";

	planeta=prompt("Ingrese el nombre de un planeta: ");
	
	switch(planeta)
	{
		case "tierra":
		mensaje = "Acá vivimos";
		break;
		case "venus":
		case "mercurio":
		mensaje = "Acá hace más calor";
		break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		mensaje = "Acá hace más frío";
		break;
		default:
		mensaje = prompt("Error. Ingrese el nombre de un planeta");
		break;
	}

	alert(mensaje);

}
