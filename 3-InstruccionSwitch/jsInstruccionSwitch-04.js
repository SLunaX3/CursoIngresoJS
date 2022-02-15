/*
Sonia Luna
DIV I
SWITCH 04

al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

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
	        mensaje = "Tiene 28 días. ";
	        break;		
	    case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
	        mensaje = "Tiene 30 días. ";
	        break;	 
	    default: 
	        mensaje = "Tiene 31 días. " ;
	        break;
	}


	alert(mensaje);



}//FIN DE LA FUNCIÓN