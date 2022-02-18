/*
Sonia Luna
DIV I
WHILE 05

Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/

function mostrar()
{
	var sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m .");

	while (sexoIngresado != "f" && sexoIngresado != "m")
		{
			sexoIngresado = prompt("Ingreso incorrecto, intente nuevamente.");
		}


	txtIdSexo.value=sexoIngresado;

}

//"Mientras el sexoIngresado sea =/= de "f"o "m" 
// salta el mensaje "Incorrecto"