/*
Sonia Luna
DIV I
SWITCH 09

Una agencia de viajes debe sacar las tarifas de los viajes , 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% 
cataratas y Cordoba tiene un descuento del 10% 
Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% 
y Cordoba tiene el precio sin descuento  */

//txtIdEstacion
//txtIdDestino
function mostrar()
{
	var estacion;
	var destino;
	var precioBase;
	var recargo;
	var precioFinal;
	var mensaje;

	estacion = txtIdEstacion.value;
	destino = txtIdDestino.value;
	precioBase = 15000;
	porcentaje = 0;
	

	mensaje = "Su tarifa es de: $ ";

	switch (estacion)
	{
		case "Invierno":
		if (destino == "Bariloche") //bariloche tiene un aumento del 20% 
		{
			porcentaje = 20; 
		}
		else
		{
			if (destino == "Mar del plata") //Mar del plata tiene un descuento del 20%
			{
				porcentaje = -20; 
			}
			else //cataratas y Cordoba tiene un descuento del 10% 
			{
				porcentaje = -10;
			}
		}	
		break;

		case "Verano":
		if (destino == "Bariloche") //bariloche tiene un descuento del 20% 
		{
			porcentaje = -20; 
		}
		else
		{
			if (destino == "Mar del plata") //Mar del plata tiene un aumento del 20%
			{
				porcentaje = 20; 
			}
			else //cataratas y Cordoba tiene un aumento del 10% 
			{
				porcentaje = 10;
			}
		}	
		break;

		default: //Otoño y Primavera
		if (destino != "Cordoba") 
			{
				porcentaje = 10; 
			}

		break;


	}

	recargo = precioBase * porcentaje /100;

	precioFinal = precioBase + recargo;

	alert(mensaje + precioFinal);



}//FIN DE LA FUNCIÓN

