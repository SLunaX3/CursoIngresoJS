/*
Sonia Luna
DIV I
PRACTICA Parcial 01 2018
Realizar el algoritmo que pida el ancho y el largo de un rectángulo 
por prompt y que muestre el perímetro por alert. 
*/
function mostrar()
{
	var ancho;
	var largo;
	var perimetroReactangulo;
	var mensaje;


			ancho = prompt("Ingrese ancho(cm): ");
			ancho = parseFloat(ancho);
			while(isNaN(ancho))
			{
				ancho = prompt("Error. Ingrese ancho(cm): ");
				ancho = parseFloat(ancho);
			}
			largo = prompt("Ingrese largo(cm): ");
			largo = parseFloat(largo);
			while(isNaN(largo))
			{
				largo = prompt("Error. Ingrese largo(cm): ");
				largo = parseFloat(largo);
			}

	perimetroReactangulo = (largo + ancho) * 2;

	mensaje = "El perímetro es de " + perimetroReactangulo + " cm";

	alert(mensaje);
}
