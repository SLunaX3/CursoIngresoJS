/*
Sonia Luna
DIV I
SWITCH 03

al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */

//txtIdMes
function mostrar()
{
	var mes;
	var mensaje;

	mes = txtIdMes.value;
	mensaje = "";

	switch(mes)
	{

		case "Febrero":
	        mensaje = "Este mes no tiene más de 29 días. ";
	        break;

	    default:
	        mensaje = "Este mes tiene 30 o más días. ";
	        break;

	}


	alert(mensaje);


}//FIN DE LA FUNCIÓN