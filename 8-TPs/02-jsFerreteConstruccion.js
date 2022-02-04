/*
Sonia Luna DIV I
TP E/S 02

2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/


//txtIdLargo
//txtIdAncho
//txtIdRadio

function Rectangulo () 
{

	var largo;
	var ancho;
	var perimetroTerreno;
	var pedido;
	var mensaje;

	largo = parseInt(txtIdLargo.value);
	ancho = parseInt(txtIdAncho.value);

	perimetroTerreno = (largo + ancho) * 2;
	pedido = perimetroTerreno *3;

	mensaje = "Metros de Alambre para Terrreno Rectangular (3 hilos): ";

	alert(mensaje + pedido);
}


function Circulo () 
{
	var radio;
	var circunferencia;
	var pedido;
	var mensaje;

	radio = parseInt(txtIdRadio.value);

	circunferencia = 2 * Math.PI * radio;
	pedido = circunferencia * 3;

	mensaje ="Metros de Alambre para Terrreno Circular (3 hilos): ";

	alert(mensaje + pedido.toFixed(2));
}


function Materiales () 
{
	var largo;
	var ancho;
	var terrenoRectangular;
	var cemento;
	var cal;
	var mensaje;

	largo = parseInt(txtIdLargo.value);
	ancho = parseInt(txtIdAncho.value);

	terrenoRectangular = largo * ancho;
	cemento = terrenoRectangular * 2;
	cal = terrenoRectangular * 3;

	mensaje = "Materiales para Contrapiso: ";
	mensaje += cemento + " bolsas de Cemento y ";
	mensaje += cal + " bolsas de Cal";

	alert(mensaje);
}