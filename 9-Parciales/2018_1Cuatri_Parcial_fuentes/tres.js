/*
Sonia Luna
DIV I
PRACTICA Parcial 03 2018
Pedir por prompt el precio y el porcentaje de descuento, 
mostrar el precio final con descuento por id. 
*/
function mostrar()
{
	var precio;
	var descuento;
	var precioFinal;

	precio = prompt("Ingrese precio: ");
	precio = parseFloat(precio);
	while(isNaN(precio))
	{
		precio = prompt("Error. Ingrese precio: ");
		precio = parseFloat(precio);
	}

	descuento = prompt("Ingrese el porcentaje de Descuento: ");
	descuento = parseFloat(descuento);
	while(isNaN(descuento))
	{
		descuento = prompt("Error. Ingrese el porcentaje de Descuento: ");
		descuento = parseFloat(descuento);		
	}

	precioFinal = precio + precio * descuento /100;


	elPrecioFinal.value = precioFinal;

}
//elPrecioFinal