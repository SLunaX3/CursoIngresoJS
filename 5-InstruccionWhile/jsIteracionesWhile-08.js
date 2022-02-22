/*
Sonia Luna
DIV I
WHILE 08

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

//txtIdSuma
//txtIdProducto
function mostrar()
{
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;

	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = "si";

	while (respuesta == "si")
	{
        numeroIngresado = prompt("Ingrese un número:");
        numeroIngresado = parseInt(numeroIngresado);

        if(numeroIngresado>=0)
        {
        sumaPositivos = sumaPositivos + numeroIngresado;
		}

		else
        {
        multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;
		}

		respuesta = prompt("Desea ingresar otro número? si o no :");
				
	}



	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

}