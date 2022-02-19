/*
Sonia Luna
DIV I
WHILE 06

Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. 
*/

//txtIdSuma
//txtIdPromedio
function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;

	contador = 6;//la cant. de veces que aparece el msj para que ingrese un número
	acumulador = 0;//cada número ingresado
	
	while (contador>1)
	{
        numeroIngresado = parseInt(prompt("Ingrese un número:"))
        contador = contador - 1;// se le pone 6 para restarle ahora 1 y que de 5 msjs
        acumulador = acumulador + numeroIngresado;
	}

	txtIdSuma.value = acumulador;
	txtIdPromedio.value = acumulador/5;


}//FIN DE LA FUNCIÓN